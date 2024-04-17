import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'content',
  title: 'chibivite',
  description: 'An online guidebook to implement minimal Vite from scratch',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [{ text: 'Guide', link: '/guide/' }],
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/NozomuIkuta' },
      { icon: 'github', link: 'https://github.com/NozomuIkuta/chibivite' },
    ],
    sidebar: [],
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2024 Nozomu Ikuta',
    },
  },
})
