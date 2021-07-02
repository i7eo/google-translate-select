<h1 align="center">v-google-translate</h1>
<p align="center">google translate for Vue2.x.</p>
<div align="center">

[![NPM version](https://img.shields.io/npm/v/v-google-translate.svg)](https://npmjs.org/package/v-google-translate)
[![travis-ci](https://travis-ci.com/i7eo/v-google-translate.svg?branch=master)](https://travis-ci.com/i7eo/v-google-translate)
[![codecov](https://codecov.io/gh/i7eo/v-google-translate/branch/master/graph/badge.svg?token=4XX6XMBIZF)](https://codecov.io/gh/i7eo/v-google-translate)

</div>
<p align="center">English | <a href="README.zh-CN.md">中文</a></p>

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
]
```
The above is all the language information from the WIKI, The data we are using.

The `code`, `ename`, `name` must be uploaded, and the `cname` is the data we need to use.

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

