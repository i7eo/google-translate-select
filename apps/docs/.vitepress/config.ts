import {
  PKG_PREFIX,
  REPO_PATH,
  REPO_BRANCH,
} from '@google-translate-select/constants'

export default {
  lang: 'en-US',
  title: PKG_PREFIX,
  description:
    'A modern, high-performance monorepo project designed with Google Translate JS SDK. Vue and react are supported!s',
  lastUpdated: true,
  markdown: {
    // theme: 'material-palenight',
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: PKG_PREFIX,
    // nav: [{ text: 'Guide', link: '/guide' }],
    socialLinks: [{ icon: 'github', link: `https://github.com/${REPO_PATH}` }],
    editLink: {
      pattern: `https://github.com/${REPO_PATH}/edit/${REPO_BRANCH}/apps/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright (c) 2021 i7eo <https://github.com/i7eo>',
    },
  },
}
