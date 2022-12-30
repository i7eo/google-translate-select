import consola from 'consola'
import { docDirName } from './path'
// import { languages } from './utils/lang'
// import { head } from './config/head'
// import { sidebars } from './config/sidebars'
// import { nav } from './config/nav'
// import { mdPlugin } from './config/plugins'
// import { features } from './config/features'
import {
  PKG_CAMELCASE_SPACE_NAME as title,
  REPO_BRANCH,
  REPO_PATH,
} from '@google-translate-select/constants'
import type { UserConfig } from 'vitepress'

export const config: UserConfig = {
  title,
  description:
    '🚀 A modern, high-performance monorepo project designed with Google Translate JS SDK. Vue and react are supported!',
  lastUpdated: true,
  // head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docDirName,

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // logo: '/images/element-plus-logo.svg',
    // logoSmall: '/images/element-plus-logo-small.svg',
    // sidebars,
    // nav,
    // agolia: {
    //   apiKey: '377f2b647a96d9b1d62e4780f2344da2',
    //   appId: 'BH4D9OD16A',
    // },
    // features,
    // langs: languages,
  },

  // locales,

  // markdown: {
  //   config: (md) => mdPlugin(md),
  // },

  // vue: {
  //   template: {
  //     ssr: true,
  //     compilerOptions: {
  //       directiveTransforms: buildTransformers(),
  //     },
  //   },
  // },
}

export default config
