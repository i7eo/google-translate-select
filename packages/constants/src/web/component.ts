export const GOOGLE_TRANSLATE_JSSDK_URL =
  '//translate.google.com/translate_a/element.js'

// export const GOOGLE_TRANSLATE_JSSDK_URL = '//translate.google.cn/translate_a/element.js' // page show 404

export const GOOGLE_TRANSLATE_JSSDK_URL_WITH_JSONP = (functionName: string) =>
  `${GOOGLE_TRANSLATE_JSSDK_URL}?cb=${functionName}`

export const GOOGLE_TRANSLATE_ORIGINAL_DOM_ID = 'google_translate_element'

export const GOOGLE_TRANSLATE_COOKIE_NAME = 'googtrans'

export const GOOGLE_TRANSLATE_ORIGINAL_SELECT_CLASSNAME = '.goog-te-combo'

export const GOOGLE_TRANSLATE_STOP_TRANSLATE_CLASSNAME = 'notranslate'
