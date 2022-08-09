[ref](https://github.com/firebase/quickstart-js/tree/master/database)

ネスト配列 2 つ以上だとダメ

データに子供はいらない

初期値に null は無視されるので、使用しないコンストラクタで指定

ネストデータは配下更新されないように明示的に予防しないといけない（トグル部分）
(state無理やりすると破綻するので、コンポーネントの組み替えで対応できるか考える)

## Serve Local

```bash
yarn dev
```

## Build

```bash
time yarn build
```

## Deploy

```bash
time firebase deploy
```
