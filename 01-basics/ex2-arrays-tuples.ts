/**
 * 练习 2：数组与元组
 * 目标：掌握数组类型、元组类型、只读数组
 */

// 字符串数组：类型 + []
const languages: string[] = ["TypeScript", "JavaScript", "Rust"];

// 数字数组的两种等价写法
const scores: number[] = [90, 85, 77];
const scoresAlt: Array<number> = [90, 85, 77]; // 泛型写法，等价

// 元组：固定长度、固定每个位置的类型
const employee: [string, number, boolean] = ["张三", 30, true];

// 只读数组：readonly 修饰后，push/pop 等修改方法被编译器禁用
const readonlyIds: readonly number[] = [1, 2, 3];
// readonlyIds.push(4); // 报错：Property 'push' does not exist on type 'readonly number[]'

// reduce 回调的参数类型由 TS 自动推断，不用手写注解
function sum(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(scores));
console.log(employee);

export { languages, scores, scoresAlt, employee, readonlyIds, sum };
