# ハンズオン目次

- ツールのセットアップ
- プロジェクトのセットアップ
- Hello, chibivite!
  - Nodeのビルド
- chibivite CLI
  - CLIのビルド
- Dev Serverのセットアップ
  - `createServer()`
  - `listen()`
- `index.html` の処理
- Plugin Container
- TypeScript Transform
- HMR
  - Clientのビルド

# Viteの構成

**Client**

- ブラウザで動作するコード
  - client.ts => HMRの受信側
  - env.ts => 環境変数のインジェクション

**Node**

- CLI
  - cac
    - dev command
    - build command
    - preview command => 対象外(?)
- DevServer
  - connect
    - HTTP Server => ファイルへのリクエストの処理
    - WebSocket Server => HMRの送信側
- PluginContainer
  - Rollupエミュレーション
    - Rollup Plugin
    - Transformation
- esbuild

**HMR**

- HMR Context
- HRM Boundary
- あとで読む：https://bjornlu.com/blog/hot-module-replacement-is-easy

**その他**

- Dependency Pre-Bundling (https://vitejs.dev/guide/dep-pre-bundling.html)
  - Dependencies vs. DevDependencies
