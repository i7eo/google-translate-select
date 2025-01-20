---
title: 'google-translate-select library'
lang: en-US
page: true
---

<script setup>
import GoogleTranslateSelect from '@google-translate-select/vue3';

const handleGoogleTranslateSelect = (language) => {
  console.log(language)
}
</script>

# What is `@google-translate-select`

[@google-translate-select](https://google-translate-select.i7eo.com) is an open-source project to invoke google translate jssdk to translate your dispaly content, we support vue2/vue3/react as follows:

[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Freact%2Fpackage.json&label=@google-translate-select%2Freact)](https://github.com/i7eo/google-translate-select/tree/master/packages/react)

[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Fvue2%2Fpackage.json&label=@google-translate-select%2Fvue2)](https://github.com/i7eo/google-translate-select/tree/master/packages/vue2)

[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Fvue3%2Fpackage.json&label=@google-translate-select%2Fvue3)](https://github.com/i7eo/google-translate-select/tree/master/packages/vue3)

## Geting Started

<GoogleTranslateSelect
default-language-code="en"
default-page-language-code="en"
:fetch-browser-language="false"
trigger="click"
@select="handleGoogleTranslateSelect"
/>

### Install

::: code-group

```bash [vue2]
pnpm add @google-translate-select/vue2
# yarn add @google-translate-select/vue2
# npm install @google-translate-select/vue2
```

```bash [vue3]
pnpm add @google-translate-select/vue3
# yarn add @google-translate-select/vue3
# npm install @google-translate-select/vue3
```

```bash [react]
pnpm add @google-translate-select/react
# yarn add @google-translate-select/react
# npm install @google-translate-select/react
```

:::

### Usage

::: code-group

```vue{2-8,14-16} [vue2]
<template>
  <GoogleTranslateSelect
    default-language-code="en"
    default-page-language-code="en"
    :fetch-browser-language="false"
    trigger="click"
    @select="handleGoogleTranslateSelect"
  />
</template>
<script lang="ts">
import Vue from 'vue';
import GoogleTranslateSelect from '@google-translate-select/vue2';

export default Vue.extend({
  methods: {
    handleGoogleTranslateSelect(language) {
      console.log(language)
    },
  },
})
</script>
```

```vue{2-8,11-13} [vue3]
<template>
  <GoogleTranslateSelect
    default-language-code="en"
    default-page-language-code="en"
    :fetch-browser-language="false"
    trigger="click"
    @select="handleGoogleTranslateSelect"
  />
</template>
<script setup lang="ts">
import GoogleTranslateSelect from '@google-translate-select/vue3';

const handleGoogleTranslateSelect = (language: any) => {
  console.log(language)
}
</script>
```

```tsx{2-5,7-13} [react]
import GoogleTranslateSelect from '@google-translate-select/vue3';

function App() {
  const handleGoogleTranslateSelect = (language: any) => {
    console.log('select', language)
  }

  return (
    <GoogleTranslateSelect
      defaultLanguageCode="en"
      defaultPageLanguageCode="en"
      fetchBrowserLanguage={false}
      trigger="click"
      select={handleGoogleTranslateSelect}
    />
  )
}
```

:::

## Refactor

I rewrote this project using `pnpm + changeset + typescript + vite + tsup`, use monorepo to manage project. The package name is `@google-translate-select`.

The previous `google-translate-select` package move to repo `backup/master`, if you want to check it, click [here](https://github.com/i7eo/google-translate-select/tree/backup/master).

I refactor previous `google-translate-select` package using `typescript` and renamed it `@google-translate-select/vue2`, if you want to check it, click [here](https://github.com/i7eo/google-translate-select/tree/master/packages/vue2).

## Origin

This package enables localization of web apps made with vue by use of google translate.As your website and app grows, you may find a need to expand to other markets outside your home country.

If your target market lives across the sea and speaks a different language, you may not have any choice but to localize.

For more details on what localization is and the potential benefits, [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/).

## Inspire

This package was heavily inspired by [vue-google-translate](https://github.com/lewis-kori/vue-google-translate).

## Development

For local development, in the root of the repo run `pnpm i` to install all dependencies and then `pnpm build` to build all packages. Now follow the instructions of the specific package you’re working on.

::: tip
In case you are having problems to install the dependencies, try using NVM to get the same node version we use by running `nvm use` in the root of the repo, and check `pnpm` version.
:::

### Vitepress for @google-translate-select

We use vitepress with our library to develop document. You can start it from the root of the repo, just run `pnpm dev:docs`

### Playground for @google-translate-select

We use vite with our library to test it. You can start it from the root of the repo, just run `pnpm dev:react` or `pnpm dev:vue2` or `pnpm dev:vue3`.

## Commits & releases

Use `pnpm commit`. This uses the [cz-git](https://cz-git.qbb.sh/) CLI to create a conventional commit message based on your changes. CI is setup to release all new commits on the main branch that contains a new [changeset](https://github.com/changesets/changesets).

Read more about changeset [here](https://github.com/i7eo/google-translate-select/blob/master/RELEASES.md)

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to contribute to a package, see the README of the corresponding package.

## Reach out to us

Create an issue using one of the templates [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/i7eo/google-translate-select/issues/new/choose)

Make sure to remove any credential from your code before sharing it.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rochac2lee"><img src="https://avatars.githubusercontent.com/u/60928171?v=4?s=100" width="100px;" alt="rochac2lee"/><br /><sub><b>rochac2lee</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=rochac2lee" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MiracleH"><img src="https://avatars.githubusercontent.com/u/22657524?v=4?s=100" width="100px;" alt="hyj"/><br /><sub><b>hyj</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=MiracleH" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://yesux.github.io/"><img src="https://avatars.githubusercontent.com/u/44074974?v=4?s=100" width="100px;" alt="suxiong"/><br /><sub><b>suxiong</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=YeSuX" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ubercj"><img src="https://avatars.githubusercontent.com/u/73803823?v=4?s=100" width="100px;" alt="Chris Jones"/><br /><sub><b>Chris Jones</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=ubercj" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://info.souldoit.com"><img src="https://avatars.githubusercontent.com/u/15118790?v=4?s=100" width="100px;" alt="Syamsoul Azrien Muda"/><br /><sub><b>Syamsoul Azrien Muda</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=syamsoul" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/huazhuangnan"><img src="https://avatars.githubusercontent.com/u/46070704?v=4?s=100" width="100px;" alt="HuaZhuangNan"/><br /><sub><b>HuaZhuangNan</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=huazhuangnan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://collins-odongo.netlify.app/"><img src="https://avatars.githubusercontent.com/u/86556838?v=4?s=100" width="100px;" alt="Zero"/><br /><sub><b>Zero</b></sub></a><br /><a href="https://github.com/i7eo/google-translate-select/commits?author=zero-stealth" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

## License

This repository is published under the [MIT](https://github.com/i7eo/google-translate-select/blob/master/LICENSE) license.
