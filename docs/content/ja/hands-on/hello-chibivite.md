# Hello, chibivite!

::: tip このページのゴール
✅ chibiviteの[コマンドラインインターフェース](/ja/concepts/command-line-interface)を実装しましょう

✅ chibiviteを実際に動作させることができるプレイグラウンドを立ち上げましょう
:::

chibiviteのコマンドラインインターフェース（以下、chibivite CLIと表記します）を実装して、実際に動かしてみましょう！

---

まず、chibivite CLIの実体として `packages/chibivite/bin/chibivite.js` を作成して、以下のコードをコピーしましょう。

```js
#!/usr/bin/env node

function start() {
  console.log('Hello, chibivite!')
}

start()
```

chibiviteをパッケージマネージャーでインストールした開発者がこのファイルを実行できるようにするため、`package.json` に以下の内容を設定しましょう。

<!-- prettier-ignore -->
```json
{
  // ...
  "packageManager": "pnpm@9.1.2",
  "bin": "bin/chibivite.js", // [!code ++]
  "scripts": {},
  // ...
}
```

これで、chibiviteをインストールした開発者は `package.json` の `scripts` フィールドで `chibivite` コマンドを利用できるようになりました。

---

では、実際に `chibivite` コマンドが使えることを確かめましょう。

モノレポにchibiviteをインストールして使うパッケージを追加しましょう。ここでは `playground` という名前のパッケージを `pnpm-workspace.yaml` に追加しましょう。

```yaml
packages:
  - packages/*
  - playground // [!code ++]
```

つぎに `playground/package.json` を作成して、以下のコードをコピーしましょう。

<!-- prettier-ignore -->
```json
{
  "name": "playground",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "sideEffects": false,
  "scripts": {},
  "devDependencies": {
    "chibivite": "workspace:*"
  }
}
```

プロジェクトルートまたはいずれかのパッケージルートで以下のコマンドを実行し、依存関係を解決しましょう。

```bash
pnpm install
```

`playground` ディレクトリに `node_modules` ディレクトリが作成されれば成功です。

::: details `node_modules` の中身

- `node_modules/.bin/chibivite`

  `pnpm exec chibivite` で実行されるファイルで、内部で `chibivite/bin/chibivite.js` を実行します。

- `node_modules/chibivite`

      `packages/chibivite` へのシンボリックリンクです。

  :::

インストールしたchibiviteパッケージのコマンドを実行するためのnpm scriptを追加しましょう。

<!-- prettier-ignore -->
```json
{
  // ...
  "scripts": {},       // [!code --]
  "scripts": {         // [!code ++]
    "dev": "chibivite" // [!code ++]
  },                   // [!code ++]
  // ...
}
```

`playground` ディレクトリで以下のコマンドを実行しましょう。ターミナルに `Hello, chibivite!` と表示されれば成功です。

```bash
pnpm run dev
```

---

おめでとうございます！これでchibivite CLIをプレイグラウンドで利用できるようになりました！🎉
