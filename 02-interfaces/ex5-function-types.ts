/**
 * 练习 5：函数类型
 * 目标：掌握函数类型注解、可选/默认/剩余参数、函数重载
 */

// TODO 1: 用 type 定义一个函数类型 BinaryOp，表示"接收两个 number，返回 number"
// 然后实现 add 和 multiply 两个该类型的函数
type BinaryOp = (a: number, b: number) => number;

const add: BinaryOp = (a, b) => a + b;
const multiply: BinaryOp = (a, b) => a * b;

// TODO 2: 可选参数与默认参数
// 实现 greet：name 必填，greeting 可选（默认 "你好"），返回问候语
// 思考：
// 1. 同一参数不能同时写 `?` 和默认值（两者语法互斥，默认值天然具有可选语义）
// 2. 必选参数不能置于可选参数或无 undefined 传值的默认参数之后
function greet(name: string, greeting: string = "你好"): string {
  return `${greeting}, ${name}!`;
}

// TODO 3: 剩余参数
// 实现 sumAll：接收任意个 number，返回总和（提示：...args）
function sumAll(...args: number[]): number {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// TODO 4: 函数重载——同一个函数支持多种调用签名
// 实现 parseInput：
//   传入 string 时返回 string[]
//   传入 number 时返回 string
// （重载需要写多个签名 + 一个兼容的实现）
function parseInput(input: string): string[];
function parseInput(input: number): string;
function parseInput(input: string | number): string[] | string {
  if (typeof input === "string") {
    return input.split("");
  }
  return input.toString();
}

console.log(add(10, 20));
console.log(multiply(5, 6));
console.log(greet("darion"));
console.log(greet("darion", "Hello"));
console.log(sumAll(1, 2, 3, 4));
console.log(parseInput("hello"));
console.log(parseInput(123));

export { add, multiply, greet, sumAll, parseInput };
export type { BinaryOp };
