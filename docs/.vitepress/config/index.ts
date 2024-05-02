import { withMermaid } from 'vitepress-plugin-mermaid'
import { enConfig } from './en'
import { jaConfig, jaSearchConfig } from './ja'
import { defineConfig } from 'vitepress'

export default withMermaid({
  ...defineConfig({
    srcDir: 'content',
    base: '/chibivite/',
    title: 'chibivite',
    lastUpdated: true,
    themeConfig: {
      externalLinkIcon: true,
      socialLinks: [
        { icon: 'twitter', link: 'https://twitter.com/NozomuIkuta' },
        { icon: 'github', link: 'https://github.com/NozomuIkuta/chibivite' },
      ],
      search: {
        provider: 'local',
        options: {
          locales: {
            ...jaSearchConfig,
          },
        },
      },
    },
    locales: {
      root: { label: 'English', ...enConfig },
      ja: { label: '日本語', ...jaConfig },
    },
  }),
  mermaid: {},
  mermaidPlugin: {},
})
