# v-google-translate

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/v-google-translate.svg
[npm-url]: https://npmjs.org/package/v-google-translate

包含谷歌翻译插件的 Vue 组件，支持 Vue2.x。

## :large_blue_circle: Internationalization

[English](README.md) | 中文文档

## Table of Contents

 1. [问题](#问题)
 2. [例子](#例子)
 3. [安装](#安装)
 4. [使用](#使用)
    - [Props](#props)
 5. [提示](#提示)

### 问题

这个组件的灵感很大程度上来自 [vue-google-translate](https://github.com/lewis-kori/vue-google-translate)。

这个包支持使用谷歌翻译vue制作的web应用的本地化。随着你的网站和应用的发展，你可能会发现需要扩展到本国以外的其他市场。

有关本地化的更多信息和潜在好处，请查看本文， [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/)。

### 例子

要了解该组件的具体使用方法，请查看 [here.](https://codesandbox.io/s/v-google-translate-demo-er3z8)

### 安装

> Use in Vue component

```text
yarn add v-google-translate
npm i v-google-translate
```

> Use in html

```html
<script src="xxx"></script>
```

### 使用

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

如果你想在选择语言后进行一些操作请添加 `@select` ，如下：

```javascript
import { vGoogleTranslate } from 'v-google-translate';
<template>
  <div>
  <v-google-translate  @select="googleTranslateSelectedHandler"/>
  <div>
</template>

export default {
  components: {
    vGoogleTranslate
  },
  methods: {
    googleTranslateSelectedHandler(language) {
      const { code, name, cname, ename } = language
      // todo ...
    }
  }
}
```

#### Props

> prop name: languages, type: Array, default: 如下

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

上述数据是我根据 wiki 以及 shopify 整理的全部语种信息，这些数据已经在我们上线的项目中使用。

属性： `code`, `localeName`, `name` 是必须有的， `cname` 是我们内部使用的。

**当然你也可以传入一些你需要的信息。**

> prop name: defaultLanguageCode, type: String, default: 'en'

默认语言code

> prop name: fetchBrowserLanguage, type: Boolean, default: true

是否根据浏览器语言自动修改当前站点语言

> prop name: animateTimeout, type: Number, default: 150

移入/移出的动画延时

### 提示

- 我们使用的是`translate.google.com/translate_a/element.js`这个库，它对于网站上的文字进行全量翻译。

- **对于那些你不想翻译的内容，请添加 `class= "notranslate"`**

- 一个例子:我们正在做一个跨境电子商务项目。在这个项目中，我们需要多语言、多货币两个功能来完成国际化。对于页面上的价格，我们不希望被翻译成多种语言。因此，我们在价格DOM中添加了 ` class= "notranslate" `，以便在货币变化时动态修改价格DOM信息。
- 最好能自定义一个监听当前页面全部组件加载完成的钩子函数，多语言组件监听这个钩子函数，当函数返回时再调用该组件。可能会出现的情况是部分动态生成的文字翻译不全


## :copyright: License

[License MIT](LICENSE)

## 问题 & 建议

来这一起玩耍 [here](https://github.com/i7eo/v-google-translate/issues).

## :stuck_out_tongue_winking_eye: Authors

[i7eo](https://i7eo.com/about/)

