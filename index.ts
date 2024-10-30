import { ok } from "assert";
import { error } from "console";

/* 配列 */
const fruits: string[] = ["apple", "banana", "orange"];

/* Tuple型:複数の構成要素からなる組で配列の中に書く */
const book: [string, number, boolean] = ["business", 1500, false];
// ok
book[1] = 500;
// error: book[1]= 'hello'
// 初期値以外は厳しく型を見てくれないため、代入後に取得しようとするとエラーが発生する
book.push(21);
// error: console.log(book[3]);

/* enum: 列挙型→特定の値だけを取得可能 */

const coffeeSize = {
  SHORT: "SHORT",
  TALL: "TALL",
  GRANDE: "GRANDE",
  VENTI: "VENTI",
};

const coffee = {
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
enum CoffeeSize {
  SHORT,
  TALL = 100,
  GRANDE,
  VENTI,
}

const tea = {
  hot: true,
  size: CoffeeSize.SHORT,
};
console.log(CoffeeSize.SHORT);

/* Union型 */
let unionType: number | string = 10;
unionType.toUpperCase();
unionType = "hello";
unionType.toUpperCase();

let unionTypes: (number | string)[] = [21, "hello"];

/* Literal型: 決まった値のみしか受け入れない */
// let: string型
// const: literal型
const apple: "apple" = "apple";
const zero: 0 = 0;
// enumのように使用可能だがオブジェクトのように使用することはできない
let clothSize: "small" | "medium" | "large" = "large";
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: clothSize,
};

/* typeエイリアス */
type ClothSize = "small" | "medium" | "large";
let clothsSize: ClothSize = "large";

/* 関数の戻り値にvoid型を使用する方法*/
// void: returnの有無に関わらず使用できる
// undefined: return 有

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};
const anotherAdd: (n1: number, n2: number) => number = add;

/* unknown型 */
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
// error: text = unknownInput
if (typeof unknownInput === "string") {
  // unknownは使用する際に注意が必要
  text = unknownInput;
}

/* never型 */
// 決してなにも返さない


