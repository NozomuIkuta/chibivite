# ビルドのセットアップ

::: tip このページのゴール
✅ chibiviteの[コマンドラインインターフェース](/ja/concepts/command-line-interface)にコマンドを追加しましょう

✅ chibiviteをRollupでビルドするための設定を整えましょう
:::

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
