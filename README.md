<h1>@google-translate-select</h1>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/i7eo/google-translate-select/Release/master?label=build%20%26%20release)](https://github.com/i7eo/google-translate-select/actions/workflows/release.yml)
[![All Contributors](https://img.shields.io/github/all-contributors/i7eo/google-translate-select/master)](#contributors-)

[@google-translate-select](https://i7eo.com/) is an open-source project to invoke google translate jssdk to translate your dispaly content, we support vue2/vue3/react as follows:

[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Freact%2Fpackage.json&label=@google-translate-select%2Freact)](https://github.com/i7eo/google-translate-select/tree/master/packages/react)
[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Fvue2%2Fpackage.json&label=@google-translate-select%2Fvue2)](https://github.com/i7eo/google-translate-select/tree/master/packages/vue2)
[![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/i7eo/google-translate-select?filename=packages%2Fvue3%2Fpackage.json&label=@google-translate-select%2Fvue3)](https://github.com/i7eo/google-translate-select/tree/master/packages/vue3)

## Table of Contents

- [Refatcor](#refactor)
- [Origin](#origin)
- [Inspire](#inspire)
- [Development](#development)
  - [Vitepress for @google-translate-select](#vitepress-for-@google-translate-select)
  - [Playground for @google-translate-select](#playground-for-@google-translate-select)
- [Commits & releases](#commits--releases)
- [Get involved](#get-involved)
- [Reach out to us](#reach-out-to-us)
- [License](#license)
- [Contributors](#contributors)

## Refactor

I rewrote this project using `pnpm + changeset + typescript + vite + tsup`, use monorepo to manage project. The package name is `@google-translate-select`.

The previous `google-translate-select` package move to repo `backup/master`, if you want to check it, click [here](https://github.com/i7eo/google-translate-select/tree/backup/master).

I refactor previous `google-translate-select` package using `typescript` and renamed it `@google-translate-select/vue2`, if you want to check it, click [here](https://github.com/i7eo/google-translate-select/tree/master/packages/vue2).

## Orign

This package enables localization of web apps made with vue by use of google translate.As your website and app grows, you may find a need to expand to other markets outside your home country.

If your target market lives across the sea and speaks a different language, you may not have any choice but to localize.

For more details on what localization is and the potential benefits, [checkout this article](https://alistapart.com/article/do-you-need-to-localize-your-website/).

## Inspire

This package was heavily inspired by [vue-google-translate](https://github.com/lewis-kori/vue-google-translate).

## Development

For local development, in the root of the repo run `pnpm i` to install all dependencies and then `pnpm build` to build all packages. Now follow the instructions of the specific package you’re working on.

> In case you are having problems to install the dependencies, try using NVM to get the same node version we use by running `nvm use` in the root of the repo, and check `pnpm` version.

### Vitepress for @google-translate-select

We use vitepress with our library to develop document. You can start it from the root of the repo, just run `pnpm docs`

### Playground for @google-translate-select

We use vite with our library to test it. You can start it from the root of the repo, just run `pnpm dev:react` or `pnpm dev:vue2` or `pnpm dev:vue3`.

## Commits & releases

Use `pnpm commit`. This uses the [cz-git](https://cz-git.qbb.sh/) CLI to create a conventional commit message based on your changes. CI is setup to release all new commits on the main branch that contains a new [changeset](https://github.com/changesets/changesets).

Read more about changeset [here](RELEASES.md)

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to contribute to a package, see the README of the corresponding package.

## Reach out to us

Create an issue using one of the templates [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/i7eo/google-translate-select/issues/new/choose).
Make sure to remove any credential from your code before sharing it.

## License

This repository is published under the [MIT](LICENSE) license.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://yesux.github.io/"><img src="https://avatars.githubusercontent.com/u/44074974?v=4?s=100" width="100px;" alt="suxiong"/><br /><sub><b>suxiong</b></sub></a><br /><a href="#infra-YeSuX" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/i7eo/google-translate-select/commits?author=YeSuX" title="Tests">⚠️</a> <a href="https://github.com/i7eo/google-translate-select/commits?author=YeSuX" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
