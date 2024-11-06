import { defineConfig, type DefaultTheme } from 'vitepress'

const description =
  'フルスクラッチから始めるミニマルなVite実装のためのオンラインガイドブック'

export const jaConfig = defineConfig({
  lang: 'ja',
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
    /**
     * Some theme config can't be localized due to VitePress bug.
     * See https://github.com/vuejs/vitepress/issues/3056
     */
    nav: [
      { text: 'コンセプト', link: '/ja/concepts/' },
      { text: 'ハンズオン', link: '/ja/hands-on/' },
    ],
    langMenuLabel: '言語を切り替える',
    darkModeSwitchLabel: '外観',
    lightModeSwitchTitle: 'ライトモードに切り替える',
    darkModeSwitchTitle: 'ダークモードに切り替える',
    sidebarMenuLabel: 'メニュー',
    sidebar: [
      { text: 'はじめに', link: '/ja/introduction' },
      {
        text: 'コンセプト',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/concepts/' },
          {
            text: 'コマンドラインインターフェース',
            link: '/ja/concepts/command-line-interface',
          },
          { text: '開発サーバー', link: '/ja/concepts/dev-server' },
          // { text: 'プレビューサーバー', link: '/ja/concepts/preview-server' },
          // { text: 'プラグインコンテナー', link: '/ja/concepts/plugin-container' },
          // { text: 'モジュールグラフ', link: '/ja/concepts/module-graph' },
        ],
      },
      {
        text: 'ハンズオン',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/hands-on/' },
          { text: 'ツールのセットアップ', link: '/ja/hands-on/tool-setup' },
          {
            text: 'プロジェクトのセットアップ',
            link: '/ja/hands-on/project-setup',
          },
          { text: 'Hello, chibivite!', link: '/ja/hands-on/hello-chibivite' },
          {
            text: 'chibivite CLIのビルド',
            link: '/ja/hands-on/cli-build-setup',
          },
        ],
      },
    ],
    outline: {
      label: '目次',
    },
    editLink: {
      pattern:
        'https://github.com/vuejs/vitepress/edit/main/docs/content/:path',
      text: 'GitHubでこのページを編集する',
    },
    lastUpdated: {
      text: '更新日時',
      formatOptions: {
        forceLocale: true,
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    returnToTopLabel: 'トップに戻る',
    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
    footer: {
      message: 'MITライセンスで配布されています。',
      copyright: '© 2024 Nozomu Ikuta',
    },
    notFound: {
      title: 'ページが見つかりません',
      quote: 'しかし、探し続ければいつかたどりつくかもしれません。',
      linkLabel: 'ホームに戻る',
      linkText: 'ホームに戻る',
    },
  },
})

export const jaSearchConfig: DefaultTheme.LocalSearchOptions['locales'] = {
  ja: {
    translations: {
      button: {
        buttonText: '検索',
        buttonAriaLabel: '検索',
      },
      modal: {
        displayDetails: '詳細を表示する',
        resetButtonTitle: 'リセット',
        backButtonTitle: '戻る',
        noResultsText: '結果がありません: ',
        footer: {
          navigateText: '移動',
          navigateUpKeyAriaLabel: '上に移動',
          navigateDownKeyAriaLabel: '下に移動',
          selectText: '選択',
          selectKeyAriaLabel: '選択',
          closeText: '閉じる',
          closeKeyAriaLabel: '閉じる',
        },
      },
    },
  },
}
