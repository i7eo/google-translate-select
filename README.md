# v-google-translate

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/v-google-translate.svg
[npm-url]: https://npmjs.org/package/v-google-translate

google translate for Vue2.x.

## :large_blue_circle: Internationalization

English | [中文文档](README_zh.md)

## Table of Contents

 1. [Problem](#problem)
 2. [Demo](#demo)
 3. [Installation](#installation)
 4. [Usage](#usage)
    - [Props](#props)
 5. [Tips](#tips)

### Problem
This package was heavily inspired by [vue-google-translate](https://github.com/lewis-kori/vue-google-translate).

This package enables localization of web apps made with vue by use of google translate.
As your website and app grows, you may find a need to expand to other markets outside your home country.

If your target market lives across the sea and speaks a different language, you may not have any choice but to localize. 

For more details on what localization is and the potential benefits, [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/).

### Demo

To view the package in action, check it out [here.](https://codesandbox.io/s/v-google-translate-demo-er3z8)

### Installation

> Use in Vue component

```text
yarn add v-google-translate
npm i v-google-translate
```

> Use in html

```html
<script src="xxx"></script>
```

### Usage

> Use in Vue component

```javascript
// main.js
import vGoogleTranslate from 'v-google-translate';
Vue.use(vGoogleTranslate)
```

```javascript
// xxx.vue
<template>
  <div>
  <v-google-translate />
  <div>
</template>
```

> Use in html

```html
<body>
  <v-google-translate></v-google-translate>

  <script src="https://cdn.jsdelivr.net/npm/v-google-translate/lib/v-google-translate.umd.min.js"></script>
</body>
```

If you want to do something after you select the language, add `@select` to the component, just like this:

```javascript
<template>
  <div>
  <v-google-translate  @select="googleTranslateSelectedHandler"/>
  <div>
</template>

export default {
  methods: {
    googleTranslateSelectedHandler(language) {
      const { code, name, cname, ename } = language
      // todo ...
    }
  }
}
```

#### props

> prop name: languages, type: Array, default: (As shown below.)


```javascript
[
  {
    code: "en",
    localeName: "English",
    cname: "英语",
    name: "English",
  },
  {
    code: "af",
    localeName: "Afrikaans",
    cname: "南非语",
    name: "Afrikaans",
  },
  {
    code: "sq",
    localeName: "Gjuha shqipe",
    cname: "阿尔巴尼亚语",
    name: "Albanian",
  },
  {
    code: "ar",
    localeName: "العربية",
    cname: "阿拉伯语",
    name: "Arabic",
  },
  {
    code: "hy",
    localeName: "Հայերեն",
    cname: "亚美尼亚语",
    name: "Armenian",
  },
  {
    code: "az",
    localeName: "Азәрбајҹан дили",
    cname: "阿塞拜疆语",
    name: "Azerbaijani",
  },
  {
    code: "eu",
    localeName: "Euskara",
    cname: "巴斯克语",
    name: "Basque",
  },
  {
    code: "be",
    localeName: "беларуская мова",
    cname: "白俄罗斯语",
    name: "Belarusian",
  },
  {
    code: "bg",
    localeName: "български език",
    cname: "保加利亚语",
    name: "Bulgarian",
  },
  {
    code: "ca",
    localeName: "Català",
    cname: "加泰罗尼亚语",
    name: "Catalan",
  },
  {
    code: "zh-CN",
    localeName: "Chinese (Simplified)",
    cname: "中文 (简体)",
    name: "Chinese (Simplified)",
  },
  {
    code: "zh-TW",
    localeName: "Chinese (Traditional)",
    cname: "中文 (繁体)",
    name: "Chinese (Traditional)",
  },
  {
    code: "hr",
    localeName: "Српскохрватски језик",
    cname: "克罗地亚语",
    name: "Croatian",
  },
  {
    code: "cs",
    localeName: "čeština",
    cname: "捷克语",
    name: "Czech",
  },
  {
    code: "da",
    localeName: "Danmark",
    cname: "丹麦语",
    name: "Danish",
  },
  {
    code: "nl",
    localeName: "Nederlands",
    cname: "荷兰语",
    name: "Dutch",
  },
  {
    code: "et",
    localeName: "eesti keel",
    cname: "爱沙尼亚语",
    name: "Estonian",
  },
  {
    code: "tl",
    localeName: "Filipino",
    cname: "菲律宾语",
    name: "Filipino",
  },
  {
    code: "fi",
    localeName: "Finnish",
    cname: "芬兰语",
    name: "Finnish",
  },
  {
    code: "fr",
    localeName: "Français",
    cname: "法语",
    name: "French",
  },
  {
    code: "de",
    localeName: "Deutsch",
    cname: "德语",
    name: "German",
  },
  {
    code: "el",
    localeName: "Ελληνικά",
    cname: "希腊语",
    name: "Greek",
  },
  {
    code: "hu",
    localeName: "magyar",
    cname: "匈牙利语",
    name: "Hungarian",
  },
  {
    code: "id",
    localeName: "Indonesia",
    cname: "印度尼西亚语",
    name: "Indonesian",
  },
  {
    code: "ga",
    localeName: "Irish",
    cname: "爱尔兰语",
    name: "Irish",
  },
  {
    code: "it",
    localeName: "Italiano",
    cname: "意大利语",
    name: "Italian",
  },
  {
    code: "ja",
    localeName: "にほんご",
    cname: "日语",
    name: "Japanese",
  },
  {
    code: "ko",
    localeName: "한국어",
    cname: "韩语",
    name: "Korean",
  },
  {
    code: "lt",
    localeName: "lietuvių kalba",
    cname: "立陶宛语",
    name: "Lithuanian",
  },
  {
    code: "ms",
    localeName: "Malay",
    cname: "马来西亚语",
    name: "Malay",
  },
  {
    code: "no",
    localeName: "norsk",
    cname: "挪威语",
    name: "Norwegian",
  },
  {
    code: "pl",
    localeName: "Polski",
    cname: "波兰语",
    name: "Polish",
  },
  {
    code: "pt",
    localeName: "Português",
    cname: "葡萄牙语",
    name: "Portuguese",
  },
  {
    code: "ro",
    localeName: "limba română",
    cname: "罗马尼亚语",
    name: "Romanian",
  },
  {
    code: "ru",
    localeName: "Русский",
    cname: "俄语",
    name: "Russian",
  },
  {
    code: "es",
    localeName: "Español",
    cname: "西班牙语",
    name: "Spanish",
  },
  {
    code: "sv",
    localeName: "Swedish",
    cname: "瑞典语",
    name: "Swedish",
  },
  {
    code: "th",
    localeName: "ภาษาไทย",
    cname: "泰语",
    name: "Thai",
  },
  {
    code: "tr",
    localeName: "Turkish",
    cname: "土耳其语",
    name: "Turkish",
  },
  {
    code: "uk",
    localeName: "українська мова",
    cname: "乌克兰语",
    name: "Ukrainian",
  },
]
```
The above is all the language information from the WIKI, The data we are using.

The `code`, `localeName`, `name` must be uploaded, and the `cname` is the data we need to use.

**Of course，You can pass in some custom parameters.**

> prop name: defaultLanguageCode, type: String, default: 'en'

> prop name: fetchBrowserLanguage, type: Boolean, default: true

> prop name: animateTimeout, type: Number, default: 150


### Tips

- Note that here we invoke `translate.google.com/translate_a/element.js` library file, the translation for the web pages of writing is the full amount. Only the translation of static content is supported without refreshing the page.

- **For something you don't want to translate, add `class= "notranslate"`**

- I can give you an example of best practices: We are working on a cross-border e-commerce project. In this project, we need two functions, multi-language and multi-currency, to complete internationalization. For the price on the page, we don't want to be translated into multiple languages. So we added `class= "notranslate"` to the price DOM to dynamically modify the price DOM information when the currency changes.


## :copyright: License

[License MIT](LICENSE)

## Questions & Suggestions

Please open an issue [here](https://github.com/i7eo/v-google-translate/issues).

## :stuck_out_tongue_winking_eye: Authors

[i7eo](https://i7eo.com/about/)

