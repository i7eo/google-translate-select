<template>
  <div v-if="languages.length > 0" class="eo__languages notranslate">
    <div class="eo__dropdown">
      <div
        class="eo__dropdown__activator"
        @mouseenter="show"
        @mouseleave="hide"
      >
        <div class="language">
          <div class="flag">
            <div
              :class="
                'language__flag language__flag--' + __selectedLangInfo.code
              "
            ></div>
          </div>
          {{ __selectedLangInfo.ename }}
        </div>
        <svg
          class="icon-svg icon-svg--size16"
          :style="{ transform: visible ? 'rotate(0deg)' : 'rotate(180deg)' }"
          v-if="showArrow"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"
            ></path>
          </svg>
        </svg>
      </div>
      <transition name="v-animate-zoom-in-top">
        <div
          :class="[dropdownClassName, 'eo__dropdown__menu']"
          :style="dropdownStyle"
          v-show="visible"
          @mouseenter="show"
          @mouseleave="hide"
        >
          <ul>
            <li
              v-for="language in languages"
              :key="'lanuage-' + language.code"
              :data-lang-code="language.code"
              @click="translateHandler(language.code)"
            >
              <div class="language">
                <div class="flag">
                  <div
                    :class="'language__flag language__flag--' + language.code"
                  ></div>
                </div>
                {{ language.name }}
              </div>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
  name: "v-google-translate",
  props: {
    languages: {
      type: Array,
      default() {
        // 遵循 ISO 639-1 标准，俩位的code
        // 参考：https://zh.wikipedia.org/wiki/ISO_639-1
        return [
          {
            code: "en",
            name: "English",
            cname: "英语",
            ename: "English",
          },
          {
            code: "af",
            name: "Afrikaans",
            cname: "南非语",
            ename: "Afrikaans",
          },
          {
            code: "sq",
            name: "Gjuha shqipe",
            cname: "阿尔巴尼亚语",
            ename: "Albanian",
          },
          {
            code: "ar",
            name: "العربية",
            cname: "阿拉伯语",
            ename: "Arabic",
          },
          {
            code: "hy",
            name: "Հայերեն",
            cname: "亚美尼亚语",
            ename: "Armenian",
          },
          {
            code: "az",
            name: "Азәрбајҹан дили",
            cname: "阿塞拜疆语",
            ename: "Azerbaijani",
          },
          {
            code: "eu",
            name: "Euskara",
            cname: "巴斯克语",
            ename: "Basque",
          },
          {
            code: "be",
            name: "беларуская мова",
            cname: "白俄罗斯语",
            ename: "Belarusian",
          },
          {
            code: "bg",
            name: "български език",
            cname: "保加利亚语",
            ename: "Bulgarian",
          },
          {
            code: "ca",
            name: "Català",
            cname: "加泰罗尼亚语",
            ename: "Catalan",
          },
          {
            code: "zh-CN",
            name: "Chinese (Simplified)",
            cname: "中文 (简体)",
            ename: "Chinese (Simplified)",
          },
          {
            code: "zh-TW",
            name: "Chinese (Traditional)",
            cname: "中文 (繁体)",
            ename: "Chinese (Traditional)",
          },
          {
            code: "hr",
            name: "Српскохрватски језик",
            cname: "克罗地亚语",
            ename: "Croatian",
          },
          {
            code: "cs",
            name: "čeština",
            cname: "捷克语",
            ename: "Czech",
          },
          {
            code: "da",
            name: "Danmark",
            cname: "丹麦语",
            ename: "Danish",
          },
          {
            code: "nl",
            name: "Nederlands",
            cname: "荷兰语",
            ename: "Dutch",
          },
          {
            code: "et",
            name: "eesti keel",
            cname: "爱沙尼亚语",
            ename: "Estonian",
          },
          {
            code: "tl",
            name: "Filipino",
            cname: "菲律宾语",
            ename: "Filipino",
          },
          {
            code: "fi",
            name: "Finnish",
            cname: "芬兰语",
            ename: "Finnish",
          },
          {
            code: "fr",
            name: "Français",
            cname: "法语",
            ename: "French",
          },
          {
            code: "de",
            name: "Deutsch",
            cname: "德语",
            ename: "German",
          },
          {
            code: "el",
            name: "Ελληνικά",
            cname: "希腊语",
            ename: "Greek",
          },
          {
            code: "hu",
            name: "magyar",
            cname: "匈牙利语",
            ename: "Hungarian",
          },
          {
            code: "id",
            name: "Indonesia",
            cname: "印度尼西亚语",
            ename: "Indonesian",
          },
          {
            code: "ga",
            name: "Irish",
            cname: "爱尔兰语",
            ename: "Irish",
          },
          {
            code: "it",
            name: "Italiano",
            cname: "意大利语",
            ename: "Italian",
          },
          {
            code: "ja",
            name: "にほんご",
            cname: "日语",
            ename: "Japanese",
          },
          {
            code: "ko",
            name: "한국어",
            cname: "韩语",
            ename: "Korean",
          },
          {
            code: "lt",
            name: "lietuvių kalba",
            cname: "立陶宛语",
            ename: "Lithuanian",
          },
          {
            code: "ms",
            name: "Malay",
            cname: "马来西亚语",
            ename: "Malay",
          },
          {
            code: "no",
            name: "norsk",
            cname: "挪威语",
            ename: "Norwegian",
          },
          {
            code: "pl",
            name: "Polski",
            cname: "波兰语",
            ename: "Polish",
          },
          {
            code: "pt",
            name: "Português",
            cname: "葡萄牙语",
            ename: "Portuguese",
          },
          {
            code: "ro",
            name: "limba română",
            cname: "罗马尼亚语",
            ename: "Romanian",
          },
          {
            code: "ru",
            name: "Русский",
            cname: "俄语",
            ename: "Russian",
          },
          {
            code: "es",
            name: "Español",
            cname: "西班牙语",
            ename: "Spanish",
          },
          {
            code: "sv",
            name: "Swedish",
            cname: "瑞典语",
            ename: "Swedish",
          },
          {
            code: "th",
            name: "ภาษาไทย",
            cname: "泰语",
            ename: "Thai",
          },
          {
            code: "tr",
            name: "Turkish",
            cname: "土耳其语",
            ename: "Turkish",
          },
          {
            code: "uk",
            name: "українська мова",
            cname: "乌克兰语",
            ename: "Ukrainian",
          },
        ];
      },
    },
    defaultLanguageCode: {
      type: String,
      default: "en",
    },
    defaultPageLanguageCode: {
      type: String,
      default: "en",
    },
    fetchBrowserLanguage: {
      type: Boolean,
      default: true,
    },
    animateTimeout: {
      type: Number,
      default: 150,
    },
    dropdownClassName: {
      type: String,
      default: "",
    },
    dropdownStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    __selectedLangInfo() {
      const selectedLanguageInfo = this.selectedLanguageInfo();
      return selectedLanguageInfo;
    },
  },
  data: () => ({
    visible: false,
    selectedLanguageCode: "",
  }),
  created() {
    this.initUtils();
  },
  mounted() {
    this.initGoogleTranslate();
    this.htmlLangObserver();
  },
  beforeDestroy() {
    this._googleTranslateSelectObserver.disconnect();
    this._htmlLangObserver.disconnect();
  },
  methods: {
    initUtils() {
      this.dynamicCreateStyle = styles => {
        const style = document.createElement("style");
        style.setAttribute("type", "text/css");
        style.innerHTML = styles;
        document.getElementsByTagName("head")[0].appendChild(style);
      };

      this.dynamicLoadJs = (jsUrl, fn, jsId = "") => {
        const _doc = document.querySelector("body");
        const script = document.createElement("script");

        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", jsUrl);
        jsId && script.setAttribute("id", jsId);
        _doc.appendChild(script);
        script.onload = script.onreadystatechange = function () {
          if (
            !this.readyState ||
            this.readyState === "loaded" ||
            this.readyState === "complete"
          ) {
            fn && fn();
          }
          script.onload = script.onreadystatechange = null;
        };
      };

      this.getCookie = name => {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length >= 2) {
          return decodeURIComponent(parts.pop().split(";").shift());
        } else {
          return undefined;
        }
      };

      this.observer = (target, optionName, callback) => {
        if (!target) return;
        const MutationObserver =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver;
        const optionsMap = {
          attribute: {
            attribute: true,
            attributeOldValue: true,
          },
          child: {
            childList: true,
            subtree: true,
          },
        };
        if (MutationObserver) {
          const Observer = new MutationObserver(records => {
            records.map(record => {
              callback && callback(record);
            });
          });
          Observer.observe && Observer.observe(target, optionsMap[optionName]);
          return Observer;
        }
      };
    },
    initGoogleTranslate() {
      const _this = this;
      const createStyle = () => {
        this.dynamicCreateStyle(
          `body { top: 0 !important; } .skiptranslate { display: none !important; }`,
        );
      };
      const createJsonCallback = () => {
        window.googleTranslateElementInit = function () {
          new window.google.translate.TranslateElement(
            { pageLanguage: _this.defaultPageLanguageCode, autoDisplay: false },
            "google_translate_element",
          );
          _this.setSelectedLanguageCode();
        };
      };
      const createScript = () => {
        this.dynamicLoadJs(
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
          () => {
            this.GTranslateFireEvent = (a, b) => {
              try {
                if (document.createEvent) {
                  const c = document.createEvent("HTMLEvents");
                  c.initEvent(b, true, true);
                  a.dispatchEvent(c);
                } else {
                  const c = document.createEventObject();
                  a.fireEvent("on" + b, c);
                }
              } catch (e) {
                console.warn(
                  `google transltate dispatch event has error: ${e}`,
                );
              }
            };
            this.doGTranslate = a => {
              if (a.value) a = a.value;
              if (a === "") return;
              var b = a;
              var t = document.querySelector(".goog-te-combo");
              var gtel = document.querySelector(".eo__languages");
              if (
                gtel == null ||
                gtel.innerHTML.length === 0 ||
                t.options.length === 0
              ) {
                this.googleTranslateSelectObserver();
              } else {
                t.value = b;
                this.GTranslateFireEvent(t, "change");
                this._googleTranslateSelectObserver &&
                  this._googleTranslateSelectObserver.disconnect();
              }
            };
          },
        );
      };

      createStyle();
      createJsonCallback();
      createScript();
    },
    googleTranslateSelectObserver() {
      this._googleTranslateSelectObserver = this.observer(
        document.querySelector(".goog-te-combo"),
        "child",
        record => {
          if (record.addedNodes[0] && record.addedNodes[0].value) {
            if (this.selectedLanguageCode === record.addedNodes[0].value) {
              this.doGTranslate(record.addedNodes[0].value);
            }
          }
        },
      );
    },
    htmlLangObserver() {
      this._htmlLangObserver = this.observer(
        document.querySelector("html"),
        "attribute",
        record => {
          if (record.attributeName === "lang") {
            const currentValue = record.target.getAttribute("lang");
            const oldValue = record.oldValue;
            // 修复auto的中间状态，如果页面当中内容较多，gt会有一个翻译的过程，就会抛出lang = auto，此时我们手动再触发一次翻译覆盖掉上次未进行完的翻译操作
            if (
              oldValue !== currentValue &&
              oldValue &&
              oldValue !== "auto" &&
              currentValue === "auto"
            ) {
              this.translateHandler(this.selectedLanguageCode);
            }
          }
        },
      );
    },
    setSelectedLanguageCode() {
      const browserLanguage = this.fetchBrowserLanguage
        ? this.isLanguageCodeInLanguages(this.getBrowserLanguage())
        : "";
      const googleCookieLanguage = this.getGoogleCookieLanguage();
      const isFetchBrowserLanguageOpen = this.fetchBrowserLanguage;
      const isGoogleCookieLanguageExist = !!googleCookieLanguage;

      const handleDefaultLanguage = () => {
        if (this.defaultLanguageCode) {
          return this.defaultLanguageCode;
        } else {
          return "en";
        }
      };

      const handleBrowserLanguageInLanguages = () => {
        const isBrowserLanguageInLanguages = !!this.languages.find(
          language => language.code === browserLanguage,
        );
        if (isBrowserLanguageInLanguages) {
          return browserLanguage;
        } else {
          return handleDefaultLanguage();
        }
      };

      const handleGoogleCookieLanguageInLanguages = () => {
        const isGoogleCookieLanguageInLanguages = !!this.languages.find(
          language => language.code === googleCookieLanguage,
        );
        if (isGoogleCookieLanguageInLanguages) {
          return googleCookieLanguage;
        } else {
          return handleDefaultLanguage();
        }
      };

      let selectedCode = handleDefaultLanguage();
      if (!isGoogleCookieLanguageExist) {
        // 首次
        if (isFetchBrowserLanguageOpen)
          selectedCode = handleBrowserLanguageInLanguages();
      } else {
        // 非首次
        // 越过浏览器语言判断直接去列表中匹配
        selectedCode = handleGoogleCookieLanguageInLanguages();
      }

      this.translateHandler(selectedCode);
    },
    getBrowserLanguage() {
      const browserLanguage =
        navigator.language ||
        navigator.browserLanguage ||
        document.documentElement.lang ||
        "en";
      const filterLanguages = ["zh-CN", "zh-TW"];
      if (filterLanguages.every(l => l !== browserLanguage)) {
        if (browserLanguage.indexOf("-") > -1) {
          return browserLanguage.split("-")[0];
        }
      }
      return browserLanguage;
    },
    getGoogleCookieLanguage() {
      const googleTranslateCookie = this.getCookie("googtrans");
      if (googleTranslateCookie) {
        const googleTranslateCookieResult = googleTranslateCookie.split("/");
        return googleTranslateCookieResult[2]
          ? googleTranslateCookieResult[2]
          : "en";
      } else {
        return "";
      }
    },
    isLanguageCodeInLanguages(code) {
      // 如果 code 不存在于后台配置的语言列表中默认使用英语
      const result = this.languages.find(language => language.code === code);
      return result ? code : "en";
    },
    selectedLanguageInfo() {
      const target = this.languages.find(
        language => language.code === this.selectedLanguageCode,
      );
      if (target) {
        return target;
      } else {
        const defaultTarget = this.languages.find(
          language => language.code === this.defaultLanguageCode,
        );
        return defaultTarget;
      }
    },
    translateHandler(code) {
      this.doGTranslate(code);
      this.selectedLanguageCode = code;

      this.$emit("select", this.selectedLanguageInfo());

      return false;
    },
    show() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = true;
      }, this.animateTimeout);
    },
    hide() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = false;
      }, this.animateTimeout);
    },
  },
};
</script>

<style lang="scss">
.eo {
  .icon-svg {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    width: 20px;
    height: 20px;

    &--size16 {
      width: 16px;
      height: 16px;
    }
  }

  &__dropdown {
    position: relative;
    cursor: pointer;

    &__activator {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;

      .icon-svg {
        width: 11px;
        height: 8px;
        margin: 0 5px;
        transition: all 0.35s;
      }
    }

    &__menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 10011;
      padding: 10px 0;
      background-color: #fff;
      border: 1px solid rgba(34, 34, 34, 0.08);
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgb(34 34 34 / 5%);
      overflow-y: auto;
      max-height: 400px;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #e0e0e0;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f7f8fa;
      }

      ul {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        list-style: none;
      }

      li {
        position: relative;
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-weight: 500;
        letter-spacing: 0.1em;

        &:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: rgba(34, 34, 34, 0.08);
          transition: all 0.6s;
          transform: scale(0);
        }

        &:hover:before {
          transform: scale(1);
        }
      }
    }
  }
}

.v-animate-zoom-in-top-enter-active,
.v-animate-zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.v-animate-zoom-in-top-enter,
.v-animate-zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
.eo__languages {
  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }

  .language {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__flag {
      background-image: url(../../assets/language-flags.png);
    }
  }

  .language__flag--af {
    width: 35px;
    height: 35px;
    background-position: 0px 0px;
  }

  .language__flag--ar {
    width: 35px;
    height: 35px;
    background-position: -40px 0px;
  }

  .language__flag--az {
    width: 35px;
    height: 35px;
    background-position: 0px -40px;
  }

  .language__flag--be {
    width: 35px;
    height: 35px;
    background-position: -40px -40px;
  }

  .language__flag--bg {
    width: 35px;
    height: 35px;
    background-position: -80px 0px;
  }

  .language__flag--ca {
    width: 35px;
    height: 35px;
    background-position: -80px -40px;
  }

  .language__flag--cs {
    width: 35px;
    height: 35px;
    background-position: 0px -80px;
  }

  .language__flag--da {
    width: 35px;
    height: 35px;
    background-position: -40px -80px;
  }

  .language__flag--de {
    width: 35px;
    height: 35px;
    background-position: -80px -80px;
  }

  .language__flag--el {
    width: 35px;
    height: 35px;
    background-position: -120px 0px;
  }

  .language__flag--en {
    width: 35px;
    height: 35px;
    background-position: -120px -40px;
  }

  .language__flag--es {
    width: 35px;
    height: 35px;
    background-position: -120px -80px;
  }

  .language__flag--et {
    width: 35px;
    height: 35px;
    background-position: 0px -120px;
  }

  .language__flag--eu {
    width: 35px;
    height: 35px;
    background-position: -40px -120px;
  }

  .language__flag--fi {
    width: 35px;
    height: 35px;
    background-position: -80px -120px;
  }

  .language__flag--fr {
    width: 35px;
    height: 35px;
    background-position: -120px -120px;
  }

  .language__flag--ga {
    width: 35px;
    height: 35px;
    background-position: -160px 0px;
  }

  .language__flag--hr {
    width: 35px;
    height: 35px;
    background-position: -160px -40px;
  }

  .language__flag--hu {
    width: 35px;
    height: 35px;
    background-position: -160px -80px;
  }

  .language__flag--hy {
    width: 35px;
    height: 35px;
    background-position: -160px -120px;
  }

  .language__flag--id {
    width: 35px;
    height: 35px;
    background-position: 0px -160px;
  }

  .language__flag--it {
    width: 35px;
    height: 35px;
    background-position: -40px -160px;
  }

  .language__flag--ja {
    width: 35px;
    height: 35px;
    background-position: -80px -160px;
  }

  .language__flag--ko {
    width: 35px;
    height: 35px;
    background-position: -120px -160px;
  }

  .language__flag--lt {
    width: 35px;
    height: 35px;
    background-position: -160px -160px;
  }

  .language__flag--ms {
    width: 35px;
    height: 35px;
    background-position: -200px 0px;
  }

  .language__flag--nl {
    width: 35px;
    height: 35px;
    background-position: -200px -40px;
  }

  .language__flag--no {
    width: 35px;
    height: 35px;
    background-position: -200px -80px;
  }

  .language__flag--pl {
    width: 35px;
    height: 35px;
    background-position: -200px -120px;
  }

  .language__flag--pt {
    width: 35px;
    height: 35px;
    background-position: -200px -160px;
  }

  .language__flag--ro {
    width: 35px;
    height: 35px;
    background-position: 0px -200px;
  }

  .language__flag--ru {
    width: 35px;
    height: 35px;
    background-position: -40px -200px;
  }

  .language__flag--sq {
    width: 35px;
    height: 35px;
    background-position: -80px -200px;
  }

  .language__flag--sv {
    width: 35px;
    height: 35px;
    background-position: -120px -200px;
  }

  .language__flag--th {
    width: 35px;
    height: 35px;
    background-position: -160px -200px;
  }

  .language__flag--tl {
    width: 35px;
    height: 35px;
    background-position: -200px -200px;
  }

  .language__flag--tr {
    width: 35px;
    height: 35px;
    background-position: -240px 0px;
  }

  .language__flag--uk {
    width: 35px;
    height: 35px;
    background-position: -240px -40px;
  }

  .language__flag--zh-CN {
    width: 35px;
    height: 35px;
    background-position: -240px -80px;
  }

  .language__flag--zh-TW {
    width: 35px;
    height: 35px;
    background-position: -240px -120px;
  }
}
</style>
