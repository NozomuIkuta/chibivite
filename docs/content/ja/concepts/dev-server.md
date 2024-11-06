# 開発サーバー

Viteの開発サーバーは、一般的なWebサーバーと同様に、特定のURLに対するリクエストを受け取り、特定のリソースを返します。

どんなURLへのリクエストに対してどんなリソースを返すかは、Webサーバーの実装次第です。たとえば、 `/index.html` というURLに対するリクエストに、Webサーバーのファイルシステムにおける `/index.html` を返す必要はありません。かわりに `/www/index.html` ファイルを返すことが可能です。また、 `/src/index.ts` というURLに対するリクエストに、URLの見た目から推測されるとおりにTypeScriptのコードを返す必要もありません。

::: tip
URL (Uniform Resource Locator) とは、インターネット上の固有のリソースのアドレスであって、そのアドレスに実際に何があるかをあらわしたものではないことに留意してください。
:::

なお、リクエストに対応する処理を決定するのはURLだけでなく、リクエストのその他の属性（例：HTTPヘッダー）も考慮して決定される場合もあります。

リクエストにまつわる諸条件にもとづき、Viteの開発サーバーは、さまざまなリクエストに対してさまざまな処理をおこないます。

## ルーティングとミドルウェア

リクエストに対する特定の処理（関数）を「ミドルウェア」といい、特定のURLへのリクエストに対してどのミドルウェアを実行するかを「ルーティング」といいます。Viteでは、[connect](https://www.npmjs.com/package/connect)を利用してルーティングをおこない、たとえば以下のようなリクエストと処理の関係が定義されています。

| リソース                                | URL例             | ミドルウェア            | ファイルシステム上の対応するファイル |
| :-------------------------------------- | :---------------- | :---------------------- | :----------------------------------- |
| エントリーポイントとしての `index.html` | `/index.html`     | `indexHtmlMiddleware`   | `<PROJECT_ROOT>/index.html`          |
| JavaScriptリソース                      | `/src/index.ts`   | `transformMiddleware`   | `<PROJECT_ROOT>/src/index.ts`        |
| CSSリソース                             | `/src/styles.css` | `transformMiddleware`   | `<PROJECT_ROOT>/src/styles.ts`       |
| 公開静的ファイルリソース                | `/favicon.ico`    | `servePublicMiddleware` | `<PROJECT_ROOT>/public/favicon.ico`  |
