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
- DevServerの管理
  - HTTP Server => ファイルへのリクエストの処理
  - WebSocket Server => HMRの送信側
- PluginContainer
  - Rollupエミュレーション
    - Rollup Plugin
    - Transformation
- esbuild
