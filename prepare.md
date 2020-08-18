# 準備

## IDEのインストール

IDEは「統合開発環境」と呼ばれるもので、コードを書くためのエディタや、間違いを見つけるデバッグツールなどが集約されています。  
IDEによって少しずつ機能が違いますが、エラーを指摘してくれたり、変数名などをサジェストしてくれたりします。

おすすめのIDEは「IntelliJ IDEA」です。  
有料ですが、開発効率がものすごく上がるので、本気でエンジニアになりたい人なら迷わず買っていいと思います。

次点で「Visual Studio Code（VS Code）」がおすすめです。  
こちらは無料で、様々なプラグインを入れることによって、いろいろな機能が追加できます。

## Google Chromeのインストール

Webサイトを閲覧したり、javascriptを実行したりするアプリケーションのひとつにWebブラウザがあります。
世の中にはたくさんのWebブラウザがありますが、そのなかでも、Google Chromeは、様々なデバッグ機能がありとても便利です。


# javascriptの記述〜実行

javascriptを実行するいちばん簡単な方法は、HTMLに埋め込むことです。  
以下のファイルを作成して、`index.html`という名前で適当な場所に保存しましょう。

```javascript:index.html
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>javascript</title>
    <script>
        // ここから
        console.log('Hello World');
        // ここまでの間にjavascriptのコードを書きます
    </script>
</head>
<body>
    <h1>javascriptの練習です</h1>
</body>
</html>
```

HTMLを埋め込んだjavascriptを実行するときには、エクスプローラーやFinderで該当ファイルを右クリックして、「Google Chromeで開く」を選択します。（OSやバージョンで若干違いがあります）

Google Chromeでjavascriptを含むHTMLファイルを実行したとき、`console.log()`で出力されるものを見るためには、consoleを開く必要があります。  
ブラウザの画面上で右クリックして、「検証」を選択し、右側に表示される検証画面のConsoleタブをクリックします。

