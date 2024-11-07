# ツールのセットアップ

::: tip 🎯 このページのゴール

- chibiviteを開発するために必要なツールを準備しましょう
  :::

## VSCodeのインストール

1. [VSCode公式サイト](https://code.visualstudio.com/)にアクセスします。
2. VSCodeをダウンロードし、インストールします。

## Node.jsのインストール

1. [Node.js公式サイト](https://nodejs.org/en)にアクセスします。
2. Node.js v20.12.0 またはそれ以上のバージョンをダウンロードし、インストールします。

   ::: tip Node.jsのバージョン管理
   すでにv20.12.0 未満のNode.jsがインストールされている場合、以下の選択肢があります。

   - 既存のNode.jsをアンインストールして、新しいバージョンをインストールする
   - （推奨）Node.jsバージョンマネージャー（例：[nvm](https://github.com/nvm-sh/nvm)）を使って複数のバージョンのNode.jsをインストールする
     :::

3. ターミナルで以下のコマンドを実行し、インストールしたNode.jsのバージョンと、同封されているnpmのバージョンが表示されれば成功です。

   ```bash
   node --version
   ```

   ```bash
   npm --version
   ```
