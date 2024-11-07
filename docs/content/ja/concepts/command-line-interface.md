# コマンドラインインターフェイス

::: tip 🎯 このページのゴール

- Viteのコマンドラインインターフェースが担う責任を理解しましょう
- Viteのコマンドラインインターフェースが担う責任を理解しましょう
  :::

開発者は２種類の方法でViteを使用できます。ひとつは[JavaScript API](https://ja.vitejs.dev/guide/api-javascript.html)で、もうひとつは[コマンドラインインターフェース](https://ja.vitejs.dev/guide/cli.html)（以下、Vite CLIまたは単にCLIと表記します）です。

JavaScript APIではプリミティブなレベルでViteを使うことができ、Viteを使ったフレームワークの開発や複雑なビルドプロセスの実装をおこなうことができます。

一方、ほとんどのアプリケーション開発者はCLIを通してViteを使うだけで事足ります。実際のところ、ViteのCLIはJavaScript APIのラッパーでありユーティリティです。

## Vite CLIの責任

Vite CLI自体はほとんど処理をおこなっていません。コマンドライン引数を処理して、JavaScript APIを呼び出すだけです。

コマンドライン引数の処理は、[cac](https://github.com/cacjs/cac)によって実現されています。

なお、 `vite` コマンドはcacを直接呼び出すのではなく、`vite.js` を呼び出してパフォーマンス計測やデバッグのためのセットアップをおこないます。

chibiviteでもViteにならい `chibivite.js` を作成しますが、パフォーマンス計測機能やデバック機能は実装しません。

---

::: info ✨ まとめ

- Vite CLIは、JavaScript APIを呼び出します
- Vite CLIのエントリーポイントは、 `vite.js` です
- `vite.js` は、パフォーマンス計測やデバッグのためのセットアップをおこないます
  :::
