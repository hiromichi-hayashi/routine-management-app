# routine-management-app

## Tech Stack

-   Laravel 9.x
-   PHP 8.x
-   postgresql 15
-   Node.js (lts/fermium)
-   Typescript
-   React Hooks
-   Inertia.js
-   vite
-   tailwind

## Prerequisites

-   docker

## Setup

0. [Prerequisites](#Prerequisites) にあるものをインストール

1. WEB サーバを立ち上げ

### ↓ コマンドを実行するディレクトリを注意

```
[~] $ git clone git@github.com:hiromichi-hayashi/routine-management-app.git
[~] $ cd routine-management-app
```

### laravel のインストール

```
[~] $ composer install
```

### .env ファイルを準備

```
[routine-management-app] $ cp .env.example .env
[routine-management-app] $ sail php artisan key:generate
```

### .env の修正

```
DB_PASSWORD=password
```

### PHP パッケージをインストール

```
[routine-management-app] $ sail up
[routine-management-app] $ sail composer install
```

## マイグレーションを実行

3. JS をセットアップ

### node パッケージをインストール

```
[routine-management-app] $ sail npm ci
```

### vite を起動

```
[routine-management-app] $ sail npm run dev
```

4. http://localhost:8080 にアクセス
