# routine-management-app

## Tech Stack

-   Laravel 9.x
-   PHP 8.x
-   postgresql 15
-   Nodejs (lts/fermium)
-   Typescript
-   React Hooks
-   Inertia.js
-   vite
-   tailwind

## Prerequisites

-   docker
-   nvm(https://github.com/nvm-sh/nvm#installing-and-updating)

## Setup

0. [Prerequisites](#Prerequisites) にあるものをインストール

1. WEB サーバを立ち上げ

```bash
# ↓ コマンドを実行するディレクトリを注意
[~] $ git clone git@github.com:hiromichi-hayashi/routine-management-app.git
[~] $ cd routine-management-app

# .env ファイルを準備
[routine-management-app] $ cp .env.example .env
[routine-management-app] $ php artisan key:generate

# .envと.env.testingの修正
## .env
DB_PASSWORD=password

# PHPパッケージをインストール
[routine-management-app] $ sail up
[routine-management-app] $ sail composer install
```

### マイグレーションを実行

3. JS をセットアップ

```zsh
# node バージョンを統一するように
[routine-management-app] $ nvm install && nvm use

# node パッケージをインストール
[routine-management-app] $ npm ci

# vite を起動
[routine-management-app] $ npm run dev
```

4. http://localhost:8080 にアクセス
