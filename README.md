# Go-Vote開発プロジェクト

# 使用技術
- React
- Laravel
- inertia
- MySQL

React、Laravelのという二つのフレームワークをinertia(inertia.js)ミドルウェアを用いて接続し、再現しています。
# 開発環境構築
## ※事前準備
下記URLからgit bash をインストールしてください。<br>
https://gitforwindows.org/
## リポジトリをcloneする
`C:\xampp\htdocs`上でpowershellを立ち上げ、リモートリポジトリをcloneしてください
```powershell
git clone https://github.com/GoVoteDevTeam/Go_vote.git
```
## パッケージマネージャをインストールする
### a : composer のインストール
下記のURLのWindows Installerからインストールを行ってください
https://getcomposer.org/download/

### b : npmのインストール
jsでインストールを行ったnode.jsがあれば、npmコマンドが使えるはずです。
確認として、
```powershell
node -v
npm -v
```
を入力し、各バージョンが返却されるか確認してください
　
### cloneしたプロジェクト上で、バックエンドライブラリのインストールを行う
```powershell
composer install
```
### .envファイルを作成し、APIキーを発行
```powershell
cp .env.example .env
php artisan key:generate
```
### パッケージのインストール
フロントエンド側のライブラリをインストールします。
```powershell
npm install
```
### viteの開発サーバを立ち上げる
```powershell
npm run dev
```
### phpの開発サーバを起動する
```powershell
php artisan serve
```
各開発サーバはは別のターミナルで行ってください
