<template>
  <div
    v-if="hasLanguages"
    ref="googleTranslateSelectEl"
    :class="getClass"
    @mouseenter="handleDropdownShowByHover"
    @mouseleave="handleDropdownHideByHover"
  >
    <div :class="[ns.b('dropdown')]">
      <div :class="[ns.be('dropdown', 'activator')]">
        <div :class="[ns.b('language')]">
          <div :class="[ns.b('flag')]">
            <div :class="[ns.be('flag', selectedLanguageOption.code)]" />
          </div>
          {{ selectedLanguageOption.name }}
        </div>
        <div
          v-if="showArrow"
          :class="[ns.b('icon'), visible ? ns.is('reverse') : '']"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
            />
          </svg>
        </div>
      </div>
      <transition name="google-translate-select-zoom-in-top">
        <div
          v-show="visible"
          :class="[ns.be('dropdown', 'menu'), dropdownClassName]"
          :style="dropdownStyle"
        >
          <ul>
            <li
              v-for="language in languages"
              :key="`language-${language.code}`"
              :class="[
                ns.be('dropdown', 'menu__item'),
                hoveredLanguageCode === language.code ? 'hover' : '',
                selectedLanguageCode === language.code ? 'selected' : '',
              ]"
              :data-language-code="language.code"
              @click="() => handleTranslate(language.code)"
              @mouseenter.stop="() => (hoveredLanguageCode = language.code)"
              @mouseleave.stop="() => (hoveredLanguageCode = '')"
            >
              <div :class="[ns.b('language')]">
                <div :class="[ns.b('flag')]">
                  <div :class="[ns.be('flag', language.code)]" />
                </div>
                {{ language.name }}
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div :id="GOOGLE_TRANSLATE_ORIGINAL_DOM_ID" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  GoogleTranslateFireEvent,
  createGoogleTranslateJsonpCallback,
  createNamespace,
  createScriptTag,
  createStyleTag,
  getCookie,
  isString,
  removeIcon,
  useMutationObserver,
} from '@google-translate-select/utils'
import {
  GOOGLE_TRANSLATE_COOKIE_NAME,
  GOOGLE_TRANSLATE_JSSDK_URL,
  GOOGLE_TRANSLATE_ORIGINAL_DOM_ID,
  GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME,
  GOOGLE_TRANSLATE_STOP_TRANSLATE_CLASSNAME,
} from '@google-translate-select/constants'
import '@google-translate-select/theme-chalk/src/index.scss'
import { googleTranslateProps } from './types'
import type { UseMutationObserverReturn } from '@google-translate-select/utils'
import type { Language as ILanguage } from '@google-translate-select/constants'

interface Data {
  googleTranslateSelectEl: HTMLElement | null
  visible: boolean
  selectedLanguageCode: string
  hoveredLanguageCode: string
  setTimeoutId: number
  jsonCallbackFnName: string
  googleTranslateOriginSelectObserve: Partial<UseMutationObserverReturn> | null
  htmlAttrLangObserve: Partial<UseMutationObserverReturn> | null
  ns: typeof ns
  GOOGLE_TRANSLATE_ORIGINAL_DOM_ID: string
}

const ns = createNamespace('select')

export default Vue.extend<
  Data,
  Record<string, any>,
  Record<string, any>,
  Record<string, any>
>({
  name: ns.n,
  inheritAttrs: false,
  props: googleTranslateProps,
  data() {
    return {
      googleTranslateSelectEl: null,
      visible: false,
      selectedLanguageCode: '',
      hoveredLanguageCode: '',
      setTimeoutId: -1,
      jsonCallbackFnName: '',
      scriptTag: null,
      googleTranslateOriginSelectObserve: {},
      htmlAttrLangObserve: {},
      ns,
      GOOGLE_TRANSLATE_ORIGINAL_DOM_ID,
    }
  },
  computed: {
    getClass() {
      return [
        ns.b(),
        GOOGLE_TRANSLATE_STOP_TRANSLATE_CLASSNAME,
        this.$attrs.class,
      ]
    },
    hasLanguages() {
      return this.languages && this.languages.length
    },
    selectedLanguageOption() {
      return this.getSelectedLanguageOption()
    },
  },
  mounted() {
    this.googleTranslateSelectEl = this.$refs[
      'googleTranslateSelectEl'
    ] as HTMLElement
    this.createGoogleTranslate()
    this.createHtmlAttrLangObserve()

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    if (this.trigger === 'click')
      document.addEventListener('click', _this.handleDropdownShowOrHideByClick)
  },
  // @ts-ignore
  beforeUnmount() {
    if (this.googleTranslateOriginSelectObserve?.stop) {
      this.googleTranslateOriginSelectObserve!.stop!()
    }

    if (this.htmlAttrLangObserve?.stop) {
      this.htmlAttrLangObserve!.stop!()
    }

    if (this.scriptTag?.unload) {
      this.scriptTag.unload()
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    if (this.trigger === 'click')
      document.removeEventListener(
        'click',
        _this.handleDropdownShowOrHideByClick
      )
  },
  methods: {
    /**
     * get current select language
     */
    getSelectedLanguageOption() {
      const selectedLanguageOption = this.languages.find(
        (language: ILanguage) => language.code === this.selectedLanguageCode
      )
      if (selectedLanguageOption) {
        return selectedLanguageOption
      } else {
        const defaultSelectedLanguageOption = this.languages.find(
          (language: ILanguage) => language.code === this.defaultLanguageCode
        )
        return defaultSelectedLanguageOption
      }
    },
    /**
     * dynamic insert style for GoogleTranslate
     */
    createStyle() {
      return createStyleTag(
        `body { top: 0 !important; } .skiptranslate { display: none !important; }`
      )
    },
    /**
     * create jsonp callback for GoogleTranslate, when GoogleTranslate loaded callback will be triggered
     */
    createJsonCallback() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      const pageLanguage = this.defaultPageLanguageCode
      const { jsonpCallbackName } = createGoogleTranslateJsonpCallback(
        {
          pageLanguage,
        },
        _this.setSelectedLanguageCode
      )
      _this.jsonCallbackFnName = jsonpCallbackName
    },
    /**
     * pass jsonp callback to GoogleTranslate
     */
    createScript() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      return createScriptTag(
        `${GOOGLE_TRANSLATE_JSSDK_URL}?cb=${_this.jsonCallbackFnName}`
      )
    },
    /**
     * GoogleTranslate init
     */
    createGoogleTranslate() {
      this.createStyle()
      this.createJsonCallback()
      this.scriptTag = this.createScript()
    },
    /**
     * Triggers translations by observe changes in the DOM of GoogleTranslate's original select.
     *
     * Because the callback function passed in JSONP can only be called after the GOOGLE_TRANSLATE_JSSDK_URL resource is loaded,
     * and the GOOGLE_TRANSLATE_JSSDK_URL will import the resource that generated the original DOM, observe is used here🤓
     */
    createGoogleTranslateOriginSelectObserve() {
      this.googleTranslateOriginSelectObserve = useMutationObserver(
        document.querySelector(GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME)!,
        (records) => {
          records.forEach((record) => {
            if (
              record.addedNodes[0] &&
              (record.addedNodes[0] as HTMLOptionElement).value
            ) {
              if (
                this.selectedLanguageCode ===
                (record.addedNodes[0] as HTMLOptionElement).value
              ) {
                this.triggerTranslate(
                  (record.addedNodes[0] as HTMLOptionElement).value
                )
              }
            }
          })
          removeIcon()
        },
        {
          childList: true,
          subtree: true,
        }
      )
      this.googleTranslateOriginSelectObserve!.start!()
    },
    /**
     * When GoogleTranslate's original executes, the attribute 'lang' of HTML will have an auto state,
     * in order to overwrite the auto state, we call the 'handleTranslate' again
     */
    createHtmlAttrLangObserve() {
      this.htmlAttrLangObserve = useMutationObserver(
        document.querySelector('html')!,
        (records) => {
          records.forEach((record) => {
            if (record.attributeName === 'lang') {
              const currentValue = (record.target as HTMLElement).getAttribute(
                'lang'
              )
              const oldValue = record.oldValue
              // 修复auto的中间状态，如果页面当中内容较多，gt会有一个翻译的过程，就会抛出lang = auto，此时我们手动再触发一次翻译覆盖掉上次未进行完的翻译操作
              if (
                oldValue !== currentValue &&
                oldValue &&
                oldValue !== 'auto' &&
                currentValue === 'auto'
              ) {
                this.handleTranslate(this.selectedLanguageCode)
              }
            }
          })
        },
        {
          attributes: true,
          attributeOldValue: true,
        }
      )

      this.htmlAttrLangObserve!.start!()
    },
    /**
     * Simulates the change event of select to manually trigger GoogleTranslate
     *
     * @param select
     */
    triggerTranslate(select: HTMLSelectElement | string) {
      if (!select) return
      let selectValue = ''
      if (isString(select)) {
        selectValue = select
      } else {
        selectValue = select.value ?? ''
      }

      const googleTranslateOriginalSelectEl = document.querySelector(
        GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME
      ) as HTMLSelectElement
      const googleTranslateSelectEl = document.querySelector(`.${ns.b()}`)

      if (
        !googleTranslateSelectEl ||
        googleTranslateSelectEl.innerHTML.length === 0 ||
        googleTranslateOriginalSelectEl.options.length === 0
      ) {
        this.createGoogleTranslateOriginSelectObserve()
      } else {
        googleTranslateOriginalSelectEl.value = selectValue
        GoogleTranslateFireEvent(googleTranslateOriginalSelectEl, 'change')
        this.googleTranslateOriginSelectObserve &&
          this.googleTranslateOriginSelectObserve!.stop!()
      }
    },
    /**
     * Determines whether the current select language exists in the props.languages
     *
     * @param code
     */
    isLanguageCodeInLanguages(code: string) {
      // 如果 code 不存在于语言列表中默认使用英语
      const result = this.languages.find(
        (language: ILanguage) => language.code === code
      )
      return result ? code : 'en'
    },
    /**
     * Get browser language
     */
    getBrowserLanguage() {
      const browserLanguage =
        window.navigator.language || document.documentElement.lang || 'en'
      const filterLanguages = ['zh-CN', 'zh-TW']
      if (filterLanguages.every((l) => l !== browserLanguage)) {
        if (browserLanguage.indexOf('-') > -1) {
          return browserLanguage.split('-')[0]
        }
      }
      return browserLanguage
    },
    /**
     * After triggering GoogleTranslate Translate, a cookie called 'googtrans' is generated, such as '/en/tr'
     */
    getGoogleCookieLanguage() {
      const googleTranslateCookie = getCookie(GOOGLE_TRANSLATE_COOKIE_NAME)
      if (googleTranslateCookie) {
        const googleTranslateCookieResult = googleTranslateCookie.split('/')
        return googleTranslateCookieResult[2]
          ? googleTranslateCookieResult[2]
          : 'en'
      } else {
        return ''
      }
    },
    /**
     * Use browser language、cookie 'googtrans' to get language code
     */
    setSelectedLanguageCode() {
      const isFetchBrowserLanguageOpen = this.fetchBrowserLanguage
      const browserLanguage = isFetchBrowserLanguageOpen
        ? this.isLanguageCodeInLanguages(this.getBrowserLanguage())
        : ''
      const googleCookieLanguage = this.getGoogleCookieLanguage()
      const isGoogleCookieLanguageExist = !!googleCookieLanguage
      const handleDefaultLanguage = () => {
        if (this.defaultLanguageCode) {
          return this.defaultLanguageCode
        } else {
          return 'en'
        }
      }
      const handleBrowserLanguageInLanguages = () => {
        const isBrowserLanguageInLanguages = !!this.languages.find(
          (language: ILanguage) => language.code === browserLanguage
        )
        if (isBrowserLanguageInLanguages) {
          return browserLanguage
        } else {
          return handleDefaultLanguage()
        }
      }
      const handleGoogleCookieLanguageInLanguages = () => {
        const isGoogleCookieLanguageInLanguages = !!this.languages.find(
          (language: ILanguage) => language.code === googleCookieLanguage
        )
        if (isGoogleCookieLanguageInLanguages) {
          return googleCookieLanguage
        } else {
          return handleDefaultLanguage()
        }
      }
      let selectedCode = handleDefaultLanguage()
      if (!isGoogleCookieLanguageExist) {
        // 首次
        if (isFetchBrowserLanguageOpen)
          selectedCode = handleBrowserLanguageInLanguages()
      } else {
        // 非首次
        // 越过浏览器语言判断直接去列表中匹配
        selectedCode = handleGoogleCookieLanguageInLanguages()
      }
      this.handleTranslate(selectedCode)
    },
    handleTranslate(code: string) {
      this.triggerTranslate(code)
      this.selectedLanguageCode = code
      this.$emit('select', this.getSelectedLanguageOption())
    },
    clearSettimeout() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      window.clearTimeout(_this.setTimeoutId)
      this.setTimeoutId = -1
    },
    handleDropdownShowByHover(e: Event) {
      if (this.trigger === 'hover') {
        this.clearSettimeout()
        this.setTimeoutId = window.setTimeout(() => {
          const target = e.target as HTMLElement
          if (
            this.googleTranslateSelectEl &&
            this.googleTranslateSelectEl.contains(target)
          ) {
            this.visible = true
          }
        }, 0)
      }
    },
    handleDropdownHideByHover() {
      if (this.trigger === 'hover') {
        this.clearSettimeout()
        this.setTimeoutId = window.setTimeout(() => {
          this.visible = false
        }, this.animateTimeout)
      }
    },
    handleDropdownShowOrHideByClick(e: Event) {
      const target = e.target as HTMLElement
      if (
        this.googleTranslateSelectEl &&
        this.googleTranslateSelectEl.contains(target)
      ) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
  },
})
</script>
