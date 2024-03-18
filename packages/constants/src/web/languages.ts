export const GOOGLE_TRANSLATE_SELECT_LANGUAGES_CODES = [
  'en',
  'af',
  'sq',
  'ar',
  'hy',
  'az',
  'eu',
  'be',
  'bg',
  'ca',
  'zh-CN',
  'zh-TW',
  'he',
  'hr',
  'cs',
  'da',
  'nl',
  'et',
  'tl',
  'fi',
  'fr',
  'de',
  'el',
  'hu',
  'hi',
  'gu',
  'id',
  'ga',
  'it',
  'ja',
  'ko',
  'lt',
  'ms',
  'vi',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'es',
  'sv',
  'th',
  'tr',
  'uk',
  'bn'
] as const

export type LanguageCode =
  typeof GOOGLE_TRANSLATE_SELECT_LANGUAGES_CODES[number]

export interface Language {
  code: LanguageCode
  name: string
  cname: string
  ename: string
}

/**
 * 遵循 ISO 639-1 标准，俩位 code。google translate jssdk 支持的语种。(Complies with ISO 639-1 standard, two-digit code. Google translate js sdk supported.)
 *
 * reference: https://zh.wikipedia.org/wiki/ISO_639-1
 */
export const GOOGLE_TRANSLATE_SELECT_LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    cname: '英语',
    ename: 'English',
  },
  {
    code: 'af',
    name: 'Afrikaans',
    cname: '南非语',
    ename: 'Afrikaans',
  },
  {
    code: 'sq',
    name: 'Gjuha shqipe',
    cname: '阿尔巴尼亚语',
    ename: 'Albanian',
  },
  {
    code: 'ar',
    name: 'العربية',
    cname: '阿拉伯语',
    ename: 'Arabic',
  },
  {
    code: 'he',
    name: 'עִברִית',
    cname: '希伯来语',
    ename: 'Hebrew',
  },
  {
    code: 'hi',
    name: 'हिंदी',
    cname: '印地语',
    ename: 'Hindi',
  },
  {
    code: 'gu',
    name: '古吉拉特语',
    cname: '古吉拉特语',
    ename: 'Gujarati',
  },
  {
    code: 'hy',
    name: 'Հայերեն',
    cname: '亚美尼亚语',
    ename: 'Armenian',
  },
  {
    code: 'az',
    name: 'Азәрбајҹан дили',
    cname: '阿塞拜疆语',
    ename: 'Azerbaijani',
  },
  {
    code: 'eu',
    name: 'Euskara',
    cname: '巴斯克语',
    ename: 'Basque',
  },
  {
    code: 'be',
    name: 'беларуская мова',
    cname: '白俄罗斯语',
    ename: 'Belarusian',
  },
  {
    code: 'bg',
    name: 'български език',
    cname: '保加利亚语',
    ename: 'Bulgarian',
  },
  {
    code: 'ca',
    name: 'Català',
    cname: '加泰罗尼亚语',
    ename: 'Catalan',
  },
  {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    cname: '中文 (简体)',
    ename: 'Chinese (Simplified)',
  },
  {
    code: 'zh-TW',
    name: 'Chinese (Traditional)',
    cname: '中文 (繁体)',
    ename: 'Chinese (Traditional)',
  },
  {
    code: 'hr',
    name: 'Српскохрватски језик',
    cname: '克罗地亚语',
    ename: 'Croatian',
  },
  {
    code: 'cs',
    name: 'čeština',
    cname: '捷克语',
    ename: 'Czech',
  },
  {
    code: 'da',
    name: 'Danmark',
    cname: '丹麦语',
    ename: 'Danish',
  },
  {
    code: 'nl',
    name: 'Nederlands',
    cname: '荷兰语',
    ename: 'Dutch',
  },
  {
    code: 'et',
    name: 'eesti keel',
    cname: '爱沙尼亚语',
    ename: 'Estonian',
  },
  {
    code: 'tl',
    name: 'Filipino',
    cname: '菲律宾语',
    ename: 'Filipino',
  },
  {
    code: 'fi',
    name: 'Finnish',
    cname: '芬兰语',
    ename: 'Finnish',
  },
  {
    code: 'fr',
    name: 'Français',
    cname: '法语',
    ename: 'French',
  },
  {
    code: 'de',
    name: 'Deutsch',
    cname: '德语',
    ename: 'German',
  },
  {
    code: 'el',
    name: 'Ελληνικά',
    cname: '希腊语',
    ename: 'Greek',
  },
  {
    code: 'hu',
    name: 'magyar',
    cname: '匈牙利语',
    ename: 'Hungarian',
  },
  {
    code: 'id',
    name: 'Indonesia',
    cname: '印度尼西亚语',
    ename: 'Indonesian',
  },
  {
    code: 'ga',
    name: 'Irish',
    cname: '爱尔兰语',
    ename: 'Irish',
  },
  {
    code: 'it',
    name: 'Italiano',
    cname: '意大利语',
    ename: 'Italian',
  },
  {
    code: 'ja',
    name: 'にほんご',
    cname: '日语',
    ename: 'Japanese',
  },
  {
    code: 'ko',
    name: '한국어',
    cname: '韩语',
    ename: 'Korean',
  },
  {
    code: 'lt',
    name: 'lietuvių kalba',
    cname: '立陶宛语',
    ename: 'Lithuanian',
  },
  {
    code: 'ms',
    name: 'Melayu',
    cname: '马来西亚语',
    ename: 'Malay',
  },
  {
    code: 'vi',
    name: 'Tiếng Việt',
    cname: '越南语',
    ename: 'Vietnamese',
  },
  {
    code: 'no',
    name: 'norsk',
    cname: '挪威语',
    ename: 'Norwegian',
  },
  {
    code: 'pl',
    name: 'Polski',
    cname: '波兰语',
    ename: 'Polish',
  },
  {
    code: 'pt',
    name: 'Português',
    cname: '葡萄牙语',
    ename: 'Portuguese',
  },
  {
    code: 'ro',
    name: 'limba română',
    cname: '罗马尼亚语',
    ename: 'Romanian',
  },
  {
    code: 'ru',
    name: 'Русский',
    cname: '俄语',
    ename: 'Russian',
  },
  {
    code: 'es',
    name: 'Español',
    cname: '西班牙语',
    ename: 'Spanish',
  },
  {
    code: 'sv',
    name: 'Swedish',
    cname: '瑞典语',
    ename: 'Swedish',
  },
  {
    code: 'th',
    name: 'ภาษาไทย',
    cname: '泰语',
    ename: 'Thai',
  },
  {
    code: 'tr',
    name: 'Turkish',
    cname: '土耳其语',
    ename: 'Turkish',
  },
  {
    code: 'uk',
    name: 'українська мова',
    cname: '乌克兰语',
    ename: 'Ukrainian',
  },
  {
    code: 'bn',
    name: 'বাংলা',
    cname: '孟加拉语',
    ename: 'Bengali',
  }
]
