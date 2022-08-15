<h1 align="center">v-google-translate</h1>
<p align="center">包含谷歌翻译插件的 Vue 组件，支持 Vue2.x。</p>
<div align="center">

[![NPM version](https://img.shields.io/npm/v/v-google-translate.svg)](https://npmjs.org/package/v-google-translate)
[![travis-ci](https://travis-ci.com/i7eo/v-google-translate.svg?branch=master)](https://travis-ci.com/i7eo/v-google-translate)
[![codecov](https://codecov.io/gh/i7eo/v-google-translate/branch/master/graph/badge.svg?token=4XX6XMBIZF)](https://codecov.io/gh/i7eo/v-google-translate)

</div>
<p align="center"><a href="README.md">English</a> | 中文</p>

## Table of Contents

1.  [问题](#问题)
2.  [例子](#例子)
3.  [安装](#安装)
4.  [使用](#使用)
    - [Props](#props)
5.  [提示](#提示)

### 问题

这个组件的灵感很大程度上来自 [vue-google-translate](https://github.com/lewis-kori/vue-google-translate)。

这个包支持使用谷歌翻译 vue 制作的 web 应用的本地化。随着你的网站和应用的发展，你可能会发现需要扩展到本国以外的其他市场。

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
import vGoogleTranslate from "v-google-translate";
Vue.use(vGoogleTranslate);
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
```

上述数据是我根据 wiki 以及 shopify 整理的全部语种信息，这些数据已经在我们上线的项目中使用。

属性： `code`, `ename`, `name` 是必须有的， `cname` 是我们内部使用的。

**当然你也可以传入一些你需要的信息。**

> prop name: defaultLanguageCode, type: String, default: 'en'

默认语言 code

> prop name: defaultPageLanguageCode, type: String, default: 'en'

默认页面源语言 code

> prop name: fetchBrowserLanguage, type: Boolean, default: true

是否根据浏览器语言自动修改当前站点语言

> prop name: animateTimeout, type: Number, default: 150

移入/移出的动画延时

> prop name: dropdownClassName, type: String, default: ''

下拉菜单的 className 属性

> prop name: dropdownStyle, type: Object, default: {}

下拉菜单的 style 属性

> prop name: showArrow, type: Boolean, default: true

是否显示下拉小箭头

### 提示

- 我们使用的是`translate.google.com/translate_a/element.js`这个库，它对于网站上的文字进行全量翻译。

- **对于那些你不想翻译的内容，请添加 `class= "notranslate"`**

- 一个例子:我们正在做一个跨境电子商务项目。在这个项目中，我们需要多语言、多货币两个功能来完成国际化。对于页面上的价格，我们不希望被翻译成多种语言。因此，我们在价格 DOM 中添加了 `class= "notranslate"`，以便在货币变化时动态修改价格 DOM 信息。
- 最好能自定义一个监听当前页面全部组件加载完成的钩子函数，多语言组件监听这个钩子函数，当函数返回时再调用该组件。可能会出现的情况是部分动态生成的文字翻译不全

## :copyright: License

[License MIT](LICENSE)

## 问题 & 建议

来这一起玩耍 [here](https://github.com/i7eo/v-google-translate/issues).

## :stuck_out_tongue_winking_eye: Authors

[i7eo](https://i7eo.com/about/)
