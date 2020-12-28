# 42Reloaded-hello_node

### ex00
+ Hello Worldの出力

### ex01
+ 変数データのタイプ出力
+ typeof

### ex02
+ 引数を足す
+ parseInt
```
node sum_args.js 1 2 3
```

### ex03
+ 引数にとったファイルの中身の行数を出力
+ fs.readFileSync
```
node io.js io.js
```

### ex04
+ コールバックを使用して、ファイルの中身の行数を出力
+ fs.readFile

### ex05
+ 引数でとったhttpURLのhtml情報を出力
```
node http-client.js http://abehiroshi.la.coocan.jp/
```

### ex06
+ 引数でとったhttpURLのhtml情報を取得と、文字数を出力

### ex07
+ async/await/promiseを使用して、同期的にhtml情報を取得して出力
```
node async-http-collect.js http://mai.co.jp/ http://earthsoft.jp/ http://abehiroshi.la.coocan.jp/
```

### ex08
+ 引数にとったポートでサーバーを建て、接続したクライアント側に、接続時の時刻を表示させ、終了する。

### ex09
+ APIを作成する。
+ /api/parsetime?iso=時間 に対して、{時間, 分, 秒}を返す.
  + 例: {"hour":17,"minute":10,"second":15}
```
curl 'localhost:8080/api/parsetime?iso=2020-12-15T17:10:15.474Z'
```

+ /api/unixtime?iso=時間 に対して、 {unixtime}を返す.
  + 例: { "unixtime": 1376136615474 }
 ```
 curl 'localhost:8080/api/unixtime?iso=2020-12-15T17:10:15.474Z'
 ``` 
#### URL(テスト)
+ http://mai.co.jp/

+ http://earthsoft.jp/

+ http://abehiroshi.la.coocan.jp/
