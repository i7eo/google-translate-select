import React, { useEffect, useMemo, useState } from 'react'
import cs from 'classnames'
import {
  GOOGLE_TRANSLATE_COOKIE_NAME,
  GOOGLE_TRANSLATE_JSSDK_URL,
  GOOGLE_TRANSLATE_ORIGINAL_DOM_ID,
  GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME,
  GOOGLE_TRANSLATE_SELECT_LANGUAGES,
  GOOGLE_TRANSLATE_STOP_TRANSLATE_CLASSNAME,
} from '@google-translate-select/constants'
import {
  GoogleTranslateFireEvent,
  createGoogleTranslateJsonpCallback,
  createNamespace,
  createScriptTag,
  createStyleTag,
  getCookie,
  isString,
  useMutationObserver,
} from '@google-translate-select/utils'
import '@google-translate-select/theme-chalk/src/index.scss'
import type { UseMutationObserverReturn } from '@google-translate-select/utils'
import type { IGoogleTranslateProps } from './types/props'

const ns = createNamespace('select')

export default function GoogleTranslateSelect(props: IGoogleTranslateProps) {
  const {
    languages = GOOGLE_TRANSLATE_SELECT_LANGUAGES,
    defaultLanguageCode = 'en',
    defaultPageLanguageCode = 'en',
    fetchBrowserLanguage = true,
    animateTimeout = 150,
    dropdownClassName = '',
    dropdownStyles = {},
    showArrow = true,
    trigger = 'hover',
    className = '',
    select,
  } = props

  const [visible, setVisible] = useState<boolean>(false)
  const [selectedLanguageCode, changeSelectedLanguageCode] =
    useState<string>('')
  const [jsonCallbackFnName, setJsonCallbackFnName] = useState<string>('')
  const [
    googleTranslateOriginSelectObserve,
    setGoogleTranslateOriginSelectObserve,
  ] = useState<Partial<UseMutationObserverReturn> | null>({})
  const [htmlAttrLangObserve, setHtmlAttrLangObserve] =
    useState<Partial<UseMutationObserverReturn> | null>({})
  const [flag, setFlag] = useState<boolean>(true)
  const [timeoutId, setTimeoutId] = useState<number>(-1)

  /**
   * get current select language
   */
  const getSelectedLanguageOption = (code: string) => {
    const selectedLanguageObject = languages.find(
      (language) => language.code === code
    )
    const defaultSelectedLanguageObject = languages.find(
      (language) => language.code === defaultLanguageCode
    )

    return selectedLanguageObject
      ? selectedLanguageObject
      : defaultSelectedLanguageObject
  }

  const selectedLanguageOption = useMemo(
    () => getSelectedLanguageOption(selectedLanguageCode),
    [selectedLanguageCode]
  )

  useEffect(() => {
    createGoogleTranslate()
    createHtmlAttrLangObserve()
  }, [])

  useEffect(() => {
    createScript()
  }, [jsonCallbackFnName])

  useEffect(() => {
    if (htmlAttrLangObserve?.start) {
      htmlAttrLangObserve.start()
    }
    return () => {
      if (htmlAttrLangObserve?.stop) {
        htmlAttrLangObserve.stop()
      }
    }
  }, [htmlAttrLangObserve])

  useEffect(() => {
    if (googleTranslateOriginSelectObserve?.start) {
      googleTranslateOriginSelectObserve.start()
    }
    return () => {
      if (googleTranslateOriginSelectObserve?.stop) {
        googleTranslateOriginSelectObserve.stop()
      }
    }
  }, [googleTranslateOriginSelectObserve])

  useEffect(() => {
    if (googleTranslateOriginSelectObserve?.stop) {
      googleTranslateOriginSelectObserve!.stop!()
    }
  }, [flag])

  /**
   * When GoogleTranslate's original executes, the attribute 'lang' of HTML will have an auto state,
   * in order to overwrite the auto state, we call the 'handleTranslate' again
   */
  const createHtmlAttrLangObserve = () => {
    const observer = useMutationObserver(
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
              handleTranslate(selectedLanguageCode)
            }
          }
        })
      },
      {
        attributes: true,
        attributeOldValue: true,
      }
    )
    setHtmlAttrLangObserve(observer)
  }

  /**
   * GoogleTranslate init
   */
  const createGoogleTranslate = () => {
    createStyle()
    createJsonCallback()
  }

  /**
   * pass jsonp callback to GoogleTranslate
   */
  const createScript = () => {
    if (!jsonCallbackFnName) {
      return null
    }

    return createScriptTag(
      `${GOOGLE_TRANSLATE_JSSDK_URL}?cb=${jsonCallbackFnName}`
    )
  }

  /**
   * create jsonp callback for GoogleTranslate, when GoogleTranslate loaded callback will be triggered
   */
  const createJsonCallback = () => {
    const { jsonpCallbackName } = createGoogleTranslateJsonpCallback(
      {
        pageLanguage: defaultPageLanguageCode,
      },
      setSelectedLanguageCode
    )
    setJsonCallbackFnName(jsonpCallbackName)
  }

  /**
   * Use browser language、cookie 'googtrans' to get language code
   */
  const setSelectedLanguageCode = () => {
    const googleCookieLanguage = getGoogleCookieLanguage()
    const browserLanguage = fetchBrowserLanguage
      ? isLanguageCodeInLanguages(getBrowserLanguage())
      : ''
    const isGoogleCookieLanguageExist = !!googleCookieLanguage
    const isFetchBrowserLanguageOpen = fetchBrowserLanguage
    const defaultSelectedCode = defaultLanguageCode || 'en'

    const handleLanguageInLanguages = (code: string) => {
      const isLanguageInLanguages = !!languages.find(
        (language) => language.code === code
      )
      return isLanguageInLanguages ? code : defaultSelectedCode
    }
    let selectedCode = defaultSelectedCode
    if (!isGoogleCookieLanguageExist && isFetchBrowserLanguageOpen) {
      selectedCode = handleLanguageInLanguages(browserLanguage)
    } else {
      selectedCode = handleLanguageInLanguages(googleCookieLanguage)
    }

    handleTranslate(selectedCode)
  }

  /**
   * Get browser language
   */
  function getBrowserLanguage() {
    const browserLanguage =
      window.navigator.language || document.documentElement.lang || 'en'

    const filterLanguages = ['zh-CN', 'zh-TW']
    if (filterLanguages.every((l) => l !== browserLanguage)) {
      if (browserLanguage.indexOf('-') > -1) {
        return browserLanguage.split('-')[0]
      }
    }
    return browserLanguage
  }

  /**
   * Determines whether the current select language exists in the props.languages
   *
   * @param code
   */
  function isLanguageCodeInLanguages(code: string) {
    // 如果 code 不存在于语言列表中默认使用英语
    const result = languages.find((language) => language.code === code)
    return result ? code : 'en'
  }

  /**
   * After triggering GoogleTranslate Translate, a cookie called 'googtrans' is generated, such as '/en/tr'
   */
  const getGoogleCookieLanguage = () => {
    const googleTranslateCookie = getCookie(GOOGLE_TRANSLATE_COOKIE_NAME)
    if (googleTranslateCookie) {
      const googleTranslateCookieResult = googleTranslateCookie.split('/')
      return googleTranslateCookieResult[2]
        ? googleTranslateCookieResult[2]
        : 'en'
    } else {
      return ''
    }
  }

  /**
   * dynamic insert style for GoogleTranslate
   */
  const createStyle = () => {
    return createStyleTag(
      `body { top: 0 !important; } .skiptranslate { display: none !important; }`
    )
  }

  const handleDropdownShow = () => {
    if (trigger === 'hover') {
      clearTimeout(timeoutId)
      setTimeoutId(
        window.setTimeout(() => {
          setVisible(true)
        }, animateTimeout)
      )
    }
  }

  const handleDropdownHide = () => {
    if (trigger === 'hover') {
      clearTimeout(timeoutId)
      setTimeoutId(
        window.setTimeout(() => {
          setVisible(false)
        }, animateTimeout)
      )
    }
  }

  /**
   * Triggers translations by observe changes in the DOM of GoogleTranslate's original select.
   *
   * Because the callback function passed in JSONP can only be called after the GOOGLE_TRANSLATE_JSSDK_URL resource is loaded,
   * and the GOOGLE_TRANSLATE_JSSDK_URL will import the resource that generated the original DOM, observe is used here🤓
   */
  const createGoogleTranslateOriginSelectObserve = (code: string) => {
    const observe = useMutationObserver(
      document.querySelector(GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME)!,
      (records) => {
        records.forEach((record) => {
          if (
            record.addedNodes[0] &&
            (record.addedNodes[0] as HTMLOptionElement).value
          ) {
            if (code === (record.addedNodes[0] as HTMLOptionElement).value) {
              triggerTranslate(
                (record.addedNodes[0] as HTMLOptionElement).value
              )
            }
          }
        })
      },
      {
        childList: true,
        subtree: true,
      }
    )
    setGoogleTranslateOriginSelectObserve(observe)
  }

  const triggerTranslate = (select: HTMLSelectElement | string) => {
    if (!select) {
      return
    }
    const selectValue = isString(select) ? select : select.value ?? ''
    const googleTranslateOriginalSelectEl = document.querySelector(
      GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME
    ) as HTMLSelectElement
    const googleTranslateSelectEl = document.querySelector(`.${ns.b()}`)

    if (
      !googleTranslateSelectEl ||
      googleTranslateSelectEl.innerHTML.length === 0 ||
      googleTranslateOriginalSelectEl.options.length === 0
    ) {
      createGoogleTranslateOriginSelectObserve(selectValue)
    } else {
      googleTranslateOriginalSelectEl.value = selectValue
      GoogleTranslateFireEvent(googleTranslateOriginalSelectEl, 'change')
      setFlag(!flag)
    }
  }

  const handleTranslate = (code: string) => {
    triggerTranslate(code)
    changeSelectedLanguageCode(code)
    select && select(getSelectedLanguageOption(code))
  }

  const handleDropdownByClick = () => {
    if (trigger === 'click') {
      setVisible((value) => !value)
    }
  }

  if (!languages || !languages.length) {
    return null
  }

  return (
    <>
      <div
        className={cs([
          ns.b(),
          GOOGLE_TRANSLATE_STOP_TRANSLATE_CLASSNAME,
          className,
        ])}
      >
        <div className={ns.b('dropdown')}>
          <div
            className={ns.be('dropdown', 'activator')}
            onMouseEnter={handleDropdownShow}
            onMouseLeave={handleDropdownHide}
            onClick={handleDropdownByClick}
          >
            <div className={ns.b('language')}>
              <div className={ns.b('flag')}>
                <div className={ns.be('flag', selectedLanguageOption?.code)} />
              </div>
              {selectedLanguageOption?.name}
            </div>
            {showArrow && (
              <div
                className={cs([ns.b('icon'), visible ? ns.is('reverse') : ''])}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path
                    fill="currentColor"
                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                  />
                </svg>
              </div>
            )}
          </div>
          <div
            className={cs([ns.be('dropdown', 'menu'), dropdownClassName])}
            style={{ display: visible ? '' : 'none', ...dropdownStyles }}
            onMouseEnter={handleDropdownShow}
            onMouseLeave={handleDropdownHide}
            onClick={handleDropdownByClick}
          >
            <ul>
              {languages.map((language) => {
                return (
                  <li
                    key={`language-${language.code}`}
                    className={cs([
                      ns.be('dropdown', 'menu__item'),
                      selectedLanguageCode === language.code ? 'selected' : '',
                    ])}
                    data-language-code={language.code}
                    onClick={() => {
                      handleTranslate(language.code)
                    }}
                  >
                    <div className={ns.b('language')}>
                      <div className={ns.b('flag')}>
                        <div className={ns.be('flag', language.code)}></div>
                      </div>
                      {language.name}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div id={GOOGLE_TRANSLATE_ORIGINAL_DOM_ID} />
    </>
  )
}
