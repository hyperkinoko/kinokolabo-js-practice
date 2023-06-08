# レッスン11: Canvas

このレッスンでは、Canvasを使って図形を描く方法を学びます。

※ `index.html`や`style.css`はすでに書いてあります。`main.js`を記述しましょう。

## 課題1

実行例のように画面に四角を描きましょう。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT

Canvasの使い方は[ここ](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API)を参照してください。

[答え](samples/lesson11/lesson11-01)

## 課題2

まずは画面に縁取りのある四角を描き，消去ボタンを押すと消えるようにしましょう。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT

index.htmlにはすでに，消去ボタンを押した時`refresh()`を実行するよう設定しています。

[答え](samples/lesson11/lesson11-01)

## 課題3

まずは画面に縁取りのある四角を描き，移動ボタンを押すと右に移動するようにしましょう。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT

四角を移動させるには，一度clearRectを使って四角を消し，移動後の座標に再度四角を描きます。

[答え](samples/lesson11/lesson11-01)

## 課題4

index.htmlにはすでに，移動ボタンを押した時`move()`を実行するよう設定しています。

画面を「セル」という正方形に区切り，左からx番目，上からy番目の位置にあるとき`(x, y)`と表現します。  
以下の変数や関数を使って，はじめは`(5, 1)`の位置，移動ボタンを押すと`(6, 2)`の位置に移動するようにしましょう。

![セル](assets/images/lesson11-01-01.png)

四角の縁取りの色を定数`BORDER_COLOR`として宣言し，`'#9c9c9c'`を代入しましょう。  
四角の1辺の長さを定数`CELL_SIZE`として宣言し，`20`を代入しましょう。

また，関数`drawCell`を以下の通りに作成します。

* 四角が左から何マス目にあるかを引数`col`で受け取ります。
* 四角が上から何マス目にあるかを引数`row`で受け取ります。
* 四角の色を引数`color`で受け取ります。
* `col`と`row`で指定された位置に，縁取りのある四角を，指定された色で描きます。

### 実行例
![実行例](assets/images/lesson11-01-02.png)

### HINT

左から5マス目，上から3マス目に四角がある場合，四角の描画は以下のようになります。

```
context.fillRect(5 * CELL_SIZE, 3 * CELL_SIZE, CELL_SIZE, CELL_SIZE);
```

[答え](samples/lesson11/lesson11-01)


## 課題5

はじめに四角を`(5, 0)`に配置し，左右のボタンで動かせるようにしましょう。  
このとき，現在の位置`(posX, posY)`をグローバル変数`posX`と`posY`で管理しましょう。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT

左に移動すると`posX`は`1`大きくなり，下に移動すると`posY`は`1`大きくなります。

[答え](samples/lesson11/lesson11-01)

## 課題6

左右に移動する前に関数`canMoveTo`を実行し，`posX`が`0`〜`9`の範囲を越えないようにします。

関数`canMoveTo`は以下のような仕様で作成します。

* これから移動しようとしている位置を引数`col`と`row`で受け取ります（rowは後で使います）。
* `col`が`0`〜`9`の範囲にあり，なおかつ`row`が`0`〜`19`の範囲にあれば`true`を返します。それ以外では`false`を返します。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT
条件のすべてが満たされるときだけtrueを返すような処理は，早期returnを使うときれいに書けます。

```
function 関数() {
    if(条件1を満たす && 条件2を満たす) {
      return true;
    } else {
      return false;
    }
}
```

行数が少ないので一見スマートに見えますが，条件が多くなると横に長くなり，どういうときにtrueを返すのかが非常にわかりにくくなります。

```
function 関数() {
    if(条件1を満たさない) {
      return false;
    }
    if(条件2を満たさない) {
      return false;
    } 
    return true;
}
```

これは，どれだけ条件が増えても，1つのブロックでは1つの条件を見るので，わかりやすいです。

[答え](samples/lesson11/lesson11-01)


## 課題7

課題6の動きに加えて，一定時間ごとに下に移動するようにしましょう。  
このとき，下に移動する前にも関数`canMoveTo`を実行し，一番下に到着したら止まるようにしましょう。

落ちる速さはグローバル変数`speed`で宣言し，初期値に`1000`を代入します。  
タイマーIDはグローバル変数`timerId`で宣言します。

### 実行例
![実行例](assets/images/lesson11-01-01.png)

### HINT
[答え](samples/lesson11/lesson11-01)

## 課題8

関数`canMoveTo`の中で用いる`9`や`19`という数字はそれぞれ列と行の最大値です。  
このような値をマジックナンバーといい，コードのあちこちに散りばめてしまうと，後で行や列を増やしたときに修正の手間が生じます。
こういった数値は，あらかじめ定数で宣言しておくようにしましょう。

では，`9`を`GAME_AREA_COL_MAX`，`19`を`GAME_AREA_ROW_MAX`とし，グローバルな定数として宣言しましょう。
また，この定数を用いてゲーム画面（黒い部分）の幅や高さを計算し，`clearRect`で活用しましょう。
また，`canvas`の`width`属性と`height`属性もこの定数を用いて指定しましょう。

### 実行例
![実行例](assets/movgif/lesson10-03-01.gif)

### HINT

`canvas`の`width`属性と`height`属性を指定するには，

```
canvas.width = 幅;
canvas.height = 高さ;
```

とします。

### TIPS
試しに`CELL_SIZE`を`20`から`30`に変えたり，`GAME_AREA_COL_MAX`を`12`に変えたりしてみてください。
きちんと計算されて，表示や動きに整合性が取れていますね。

[答え](samples/lesson10/lesson10-04)

## 課題9

移動をキーボード入力にも対応させましょう。

* 左移動: 「←」または「a」
* 右移動: 「→」または「d」
* 下移動: 「↓」または「s」

### 実行例
![実行例](assets/movgif/lesson10-03-01.gif)

### HINT

キーボード入力で関数を実行させるには，

```
document.addEventListener('keydown', listener関数);
```

と書きます。

`listener関数`はeventを受け取ってそのeventに応じて色んな処理をします。
今回はキーボードイベントを受け取り，その内容によって，各々左，右，下に動くメソッドを実行します。

```
{
  switch (event.code) {
    case 'ArrowLeft':   // 左矢印キー
    case 'KeyA':        // Aキー 
      moveLeft();       // 左に動く
      break;            // 忘れずに書く
    ・・・略・・・
  }
}
```

[答え](samples/lesson10/lesson10-04)

