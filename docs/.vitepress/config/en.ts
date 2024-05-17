import { defineConfig } from 'vitepress'

const description = 'An online guidebook to implement minimal Vite from scratch'

export const enConfig = defineConfig({
  lang: 'en-US',
  description,
  head: [
    ['meta', { property: 'og:site_name', content: 'chibivite' }],
    ['meta', { property: 'og:title', content: 'chibivite' }],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://nozomuikuta.github.io/chibivite',
      },
    ],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:image:alt', content: 'chibivite' }],
    ['meta', { name: 'twitter:site', content: 'chibivite' }],
    ['meta', { name: 'twitter:title', content: 'chibivite' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '' }],
    ['meta', { name: 'twitter:image:alt', content: 'chibivite' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Hands-On', link: '/hands-on/' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/introduction' },
      {
        text: 'Concepts',
        link: '/concepts/',
        items: [],
      },
      {
        text: 'Hands-On',
        link: '/hands-on/',
        items: [],
      },
    ],
    editLink: {
      pattern:
        'https://github.com/vuejs/vitepress/edit/main/docs/content/:path',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 Nozomu Ikuta',
    },
  },
})
