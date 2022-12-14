import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'v-google-translate',
  description: 'v-google-translate docs',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [{ text: 'Demo', link: '/demo' }],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/i7eo/v-google-translate/tree/next',
      },
    ],
    footer: {
      message: 'Light tomorrow with today.',
      copyright: '2022-present © copyright',
    },
    lastUpdatedText: 'Updated Date',
  },
})
