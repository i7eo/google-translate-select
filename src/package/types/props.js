import { GOOGLE_TRANSLATE_SELECT_LANGUAGES } from "@google-translate-select/constants";

export const googleTranslateProps = {
  /** select dropdown option */
  languages: {
    type: Array,
    default: () => GOOGLE_TRANSLATE_SELECT_LANGUAGES,
  },
  /** select input default language*/
  defaultLanguageCode: {
    type: String,
    default: "en",
  },
  /** page(browser) content language */
  defaultPageLanguageCode: {
    type: String,
    default: "en",
  },
  /** get browser default language  */
  fetchBrowserLanguage: {
    type: Boolean,
    default: true,
  },
  /** select dropdown animate */
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
    default: () => ({}),
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  trigger: {
    // type: String as PropType<'click' | 'hover'>,
    type: String,
    default: "hover",
  },
};
