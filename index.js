"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 配列 */
var fruits = ["apple", "banana", "orange"];
/* Tuple型:複数の構成要素からなる組で配列の中に書く */
var book = ["business", 1500, false];
// ok
book[1] = 500;
// error: book[1]= 'hello'
// 初期値以外は厳しく型を見てくれないため、代入後に取得しようとするとエラーが発生する
book.push(21);
// error: console.log(book[3]);
/* enum: 列挙型→特定の値だけを取得可能 */
var coffeeSize = {
    SHORT: "SHORT",
    TALL: "TALL",
    GRANDE: "GRANDE",
    VENTI: "VENTI",
};
var coffee = {
    hot: true,
    size: coffeeSize.SHORT,
};
// 文字列のため代入が可能
coffee.size = "hello";
// enum CoffeeSize {
//   SHORT = "SHORT",
//   TALL = "TALL",
//   GRANDE = "GRANDE",
//   VENTI = "VENTI",
// }
// イコールで定義しないと、インデックスを持つようになる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 100] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 101] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 102] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var tea = {
    hot: true,
    size: CoffeeSize.SHORT,
};
console.log(CoffeeSize.SHORT);
/* Union型 */
var unionType = 10;
unionType.toUpperCase();
unionType = "hello";
unionType.toUpperCase();
var unionTypes = [21, "hello"];
/* Literal型: 決まった値のみしか受け入れない */
// let: string型
// const: literal型
var apple = "apple";
var zero = 0;
// enumのように使用可能だがオブジェクトのように使用することはできない
var clothSize = "large";
var cloth = {
    color: "white",
    size: clothSize,
};
var clothsSize = "large";
