/**
 * 练习 1：原始类型与类型注解
 * 目标：给下面的变量和函数补上正确的类型注解，让 `npm run check` 通过
 */

// 原始类型注解：string / number / boolean（TS 不区分整数和浮点）
const username: string = "darion";
const age: number = 28;
const isAdmin: boolean = false;
const score: number = 99.5;

// 参数逐个标注，返回值类型写在参数列表后面
function greet(name: string, greeting: string): string {
  return `${greeting}, ${name}!`;
}

// 没有返回值的函数，返回类型用 void
function logMessage(message: string): void {
  console.log(message);
}

greet(username, "你好");
// greet(42, "你好"); // 编译报错：number 不能赋值给 string —— TS 在编译期就拦下了 JS 运行时的隐患

console.log(greet(username, "你好"));
logMessage("练习 1 完成");

// 导出避免模块作用域报错
export { username, age, isAdmin, score, greet, logMessage };
