# account_login

## 簡介
使用 Express Handlebars 打造陽春版帳密檢查網頁

### 功能
- 使用者輸入 email 帳號與密碼供伺服器做驗證
- 驗證成功進入簡易主畫面，驗證失敗出現錯誤提示並允許重新輸入
- 保存使用者登入狀態與增加登出功能

## 開發工具
- Node.js 16.15.0
- Express 4.18.1
- Express-Handlebars 6.0.6
- Body-Parser 1.20.0
- Cookie-Parser 1.4.6
- MongoDB Atlas
- Mongoose 6.3.5
- Bootstrap.js 5.0.2
- Popper.js 2.11.5

## 開始使用
1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地，透過終端機輸入
```zsh
git clone --single-branch -b rememberMeLogout https://github.com/chh817/account_login.git
```
3. 複製完畢，進入 account_login 資料夾，輸入
```zsh
npm i
```
4. 安裝完畢，設定環境變數
```zsh
export MONGODB_URI="mongodb+srv://使用者名稱:使用者密碼@資料庫位置/資料庫名稱(與下載資料夾名稱相同)?retryWrites=true&w=majority"
``` 
5. 設定完畢，載入種子資料
```zsh
npm run seed
```
6. 載入完畢，繼續輸入
```zsh
npm run start
```
7. 當出現下列訊息代表連線成功，可進入網址進行測試
```zsh
App is running on http://localhost:3000
Mongodb connected!
```
8. 若要停止連線，使用下列快速鍵
```zsh
Command⌘ + C
```
