# React Tokyo Olympic 2020

## フロント

- node: 16.x

.env

```
REACT_APP_USE_LOCAL_MOCK: trueの場合、APIのレスポンスにローカルのモックを使用する (axios-mock-adaptor)
REACT_APP_USE_SERVER_MOCK: trueの場合、APIサーバーにローカルサーバーを使用する
REACT_APP_API_BASE_PATH: APIのエンドポイントを指定
```

例

```
REACT_APP_USE_LOCAL_MOCK=true
REACT_APP_USE_SERVER_MOCK=false
REACT_APP_API_BASE_PATH=http://localhost:5555
```

### 開発環境起動

`yarn start`

http://localhost:3000

### ビルド

`yarn build`

## ローカルサーバー

### ローカルサーバー起動

`docker-compose up`

- API サーバー
  - http://localhost:5555
- API ドキュメント
  - http://localhost:5556

https://docs.docker.com/compose/
