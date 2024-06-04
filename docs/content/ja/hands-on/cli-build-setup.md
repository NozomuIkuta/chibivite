# chibivite CLIのビルド

::: tip このページのゴール
✅ chibivite CLIをTypeScriptで実装してビルドできるようにしましょう
:::

chibivite CLIの詳細をTypeScriptで実装できるようにして、より堅牢なコードベースで開発できるようにしましょう！

このハンズオンでは、Viteと同様に[Rollup](https://rollupjs.org/)を使ってビルドをおこないます。

---

まずは、Rollupをインストールして基本のビルドパイプラインを設定しましょう！

```bash
cd packages/chibivite
```

```bash
pnpm install rollup@4.17.2
```

::: info パッケージのバージョンについて
ほとんどのパッケージは[セマンティックバージョニング](https://semver.org/)を採用しているため、マイナーバージョンの差分は安全に適用することができます。実際のところ、Rollupのバージョンを指定せずに以下のようにインストールしても、それがRollup v4系であれば基本的には問題ありません。

```bash
pnpm install rollup
```

しかし、まれにマイナーバーアップデートにも破壊的変更が含まれている場合があります。このハンズオンでは、このハンズオンにしたがって開発したchibiviteが将来にわたって動作することを保証するため、すべての依存パッケージのバージョンを厳密に指定してインストールします。
:::

以下のように `package.json` が書きかわっていれば成功です。

<!-- prettier-ignore -->
```json
{
  // ...
  "dependencies": {},   // [!code --]
  "dependencies": {     // [!code ++]
    "rollup": "4.17.2"  // [!code ++]
  },                    // [!code ++]
  // ...
}
```

つぎに、`rollup.config.mjs` を作成して、以下のコードをコピーしましょう。

<!-- prettier-ignore -->
```js{8-12}
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: path.resolve(__dirname, 'src/cli.mjs'),
  output: {
    dir: './dist',
    format: 'esm'
  }
})
```

Rollupでビルドをおこなうためには、入力元（エントリーポイント）と出力パス、そして出力形式の設定が必要です。
それぞれ、`input` オプション、`output.dir`オプション、`output.format`オプションに対応しています。

::: details `__dirname` について
`rollup.config.mjs`はECMAScript Module（ESM）であるため、CommonJS Moduleが提供している[`__dirname`](https://nodejs.org/docs/latest/api/modules.html#__dirname)定数が利用できません。
ESMでは、代わりに `fileURLToPath(new URL('.', import.meta.url))` のイディオムを使って同様の値を得ることができます。
今後、このイディオムを毎回記述しなくてすむように、`__dirname` という名前の変数に代入して利用しています。

結果として、`path.resolve(__dirname, 'src/cli.mjs')` は `/path/from/root/dir/to/packages/chibivite/src/cli.mjs` に解決されます。
:::

`src/cli.mjs` はまだ存在しないため、ファイルを作成して、以下のコードをコピーしましょう。

```js
console.log('Hello, chibivite!')
```

<!-- このコードは `packages/chibivite/bin/chibivite.js` のコードから[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))を除いたものです。`bin/chibivite.js`を書きかえて、ビルドされた -->

Rollupを実行できるようにnpm scriptを定義しましょう。

<!-- prettier-ignore -->
```json
{
  // ...
  "scripts": {},                                 // [!code --]
  "scripts": {                                   // [!code ++]
    "build": "rollup --config rollup.config.mjs" // [!code ++]
  },                                             // [!code ++]
  // ...
}
```

この状態で以下のコマンドを実行してみましょう。`dist/cli.js`が作成されれば成功です。

```bash
pnpm run build
```

以下のコマンドで、ビルドされた `dist/cli.js` を実行してみましょう。ターミナルに `Hello, chibivite!` と表示されれば成功です。

```bash
node dist/cli.js
```

`bin/chibivite.js`を以下のように変更して、`bin/chibivite.js`から`dist/cli.js`を呼び出すようにしましょう。これで、プレイグラウンドでビルドしたCLIを利用できるようになります。

<!-- prettier-ignore -->
```js
#!/usr/bin/env node

function start() {
  console.log('Hello, chibivite!')     // [!code --]
  return import('../dist/node/cli.js') // [!code ++]
}

start()
```

プレイグラウンドで以下のコマンドを実行してみましょう。これまでと変わらずターミナルに `Hello, chibivite!` と表示されれば成功です。

```bash
cd path/to/playground
```

```bash
pnpm run dev
```

::: info なぜ`bin/chibivite.js`としてビルドしないのか
Rollupを以下のように設定してビルドの出力先を直接 `bin/chibivite.js` にしても、プレイグラウンドでビルドしたCLIを利用できます（[shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>)のあつかいは省略しています）。

<!-- prettier-ignore -->
```js
export default defineConfig({
  input: path.resolve(__dirname, 'src/cli.mjs'),
  output: {
    dir: './bin',
    entryFileNames: 'chibivite.js',
    format: 'esm',
  },
})
```

このハンズオンでは、Viteにならいビルドの出力先を別途設定しています。くわしくは[コマンドラインインターフェース](/ja/concepts/command-line-interface)のページを参照してください。
:::

---

ここから、TypeScriptをJavaScriptにトランスパイルするための設定をしていきましょう！

まず、Rollupを使ってTypeScriptをトランスパイルするために必要なパッケージをインストールしましょう。

```bash
pnpm install -D @rollup/plugin-typescript@11.1.6 tslib@2.6.2
```

以下のように `package.json` が書きかわっていれば成功です。

<!-- prettier-ignore -->
```json
{
  // ...
  "devDependencies": {}                    // [!code --]
  "devDependencies": {                     // [!code ++]
    "@rollup/plugin-typescript": "11.1.6", // [!code ++]
    "tslib": "2.6.2"                       // [!code ++]
  }                                        // [!code ++]
}
```

つぎに、`rollup.config.mjs`を以下のように書きかえましょう。

<!-- prettier-ignore -->
```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript' // [!code ++]

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: path.resolve(__dirname, 'src/cli.mjs'), // [!code --]
  input: path.resolve(__dirname, 'src/cli.ts'),  // [!code ++]
  output: {
    dir: './dist',
    format: 'esm',
  },
  plugins: [      // [!code ++]
    typescript(), // [!code ++]
  ],              // [!code ++]
})
```

そして `src/cli.mjs` を `src/cli.ts` にリネームしてTypeScriptファイルにしましょう。

```bash
mv src/cli.mjs src/cli.ts
```

では、Rollupでビルドしてみましょう。ただし、`src/cli.ts`のコードにTypeScript特有の内容がふくまれていないため、トランスパイルできているかを確かめることができません。検証のため、以下のようにコードを書き換えてビルドしてみましょう。`dist/cli.js`で型宣言が消えていれば成功です。

<!-- prettier-ignore -->
```js
type MyType = true // [!code ++]
console.log('Hello, chibivite!')
```

```bash
pnpm run build
```

---

最後に `tsconfig.json` をセットアップしてTypeScriptの設定を完了しましょう。

`packages/chibivite/tsconfig.json` を作成して、以下のコードをコピーしましょう。

<!-- prettier-ignore -->
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "moduleDetection": "force",
    "lib": ["ESNext", "DOM"],
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "allowJs": true,
    "strict": true,
    "skipLibCheck": true,
    "noUncheckedIndexedAccess": true
  }
}
```

ここでは `tsconfig.json` の内容を詳細に説明することはしませんが、おおよそViteの設定を踏襲しています。

つぎに、 `@rollup/plugin-typescript` がこの `tsconfig.json` を読み込むようにしましょう。ソースマップを出力するために、Rollupの `output` オプションにも変更をくわえます。

<!-- prettier-ignore -->
```js
// ...
export default defineConfig({
  // ...
  output: {
    dir: './dist',
    format: 'esm',
    sourcemap: true, // [!code ++]
  },
  plugins: [
    typescript(),                                         // [!code --]
    typescript({                                          // [!code ++]
      tsconfig: path.resolve(__dirname, 'tsconfig.json'), // [!code ++]
      sourceMap: true,                                    // [!code ++]
    }),
  ],
})
```

では、Rollupでビルドしてみましょう。`dist/cli.js`で型宣言が消えていれば成功です。

```bash
pnpm run build
```

検証がおわったら、型宣言は`src/cli.ts`から削除しましょう。

<!-- prettier-ignore -->
```js
type MyType = true // [!code --]
console.log('Hello, chibivite!')
```

---

おめでとうございます！これでchibivite CLIをTypeScriptで実装してビルドできるようになりました！🎉
