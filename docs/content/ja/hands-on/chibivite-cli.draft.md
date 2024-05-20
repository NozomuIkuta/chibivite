# chibivite CLI

::: tip このページのゴール
✅ chibivite CLIにコマンドを追加しましょう

✅ chibivite CLIをRollupでビルドできるようにしましょう
:::

これまでのchibivite CLIは「Hello, chibivite!」と表示するだけの簡単なものです。

chibivite CLIにコマンドを追加して、より実践的な処理を実行できるようにしましょう！

---

まずは、必要な依存をインストールします。

```bash
cd packages/chibivite
```

```bash
pnpm install --dev cac
```

::: info なぜ `--dev/-D` フラグが必要か
上記のコマンドでは、cacは `package.json` の `devDependencies` に追加されます。

chibiviteはcacに依存しているので `pnpm install cac` を実行して `package.json` の `dependencies` に追加したくなるかもしれません。

しかし、実はViteでもcacは `devDependencies` に追加されており `pnpm install vite` を実行してもcacはインストールされません。
それでもVite CLIが実行できるのは、cacのソースコードがViteのコードの一部としてバンドルされているためです。

Viteは可能な限り `devDependencies` に依存を追加し、Viteの一部としてビルドしています。詳しくは[Viteコントリビューションガイド](https://github.com/vitejs/vite/blob/main/CONTRIBUTING.md#notes-on-dependencies)を参照してください。
:::

---

---
