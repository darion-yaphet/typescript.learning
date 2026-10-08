/**
 * 练习 5：类型推断
 * 目标：理解什么时候类型注解是多余的，什么时候必须写
 */

// 1. 基本推断：const 推断到最窄的字面量类型，let 放宽到基础类型
//    鼠标悬停变量名可见：name 是 "darion"（字面量类型），count 是 number
const name = "darion"; // 推断为字面量类型 "darion"（const 不可变，给到最窄）
let count = 0; // 推断为 number（let 可变，放宽到基础类型）

// 2. let 推断为 string，赋 "pending" 合法；
//    改成 const 则类型收窄为字面量 "success"，再赋值会报错：
//    Type '"pending"' is not assignable to type '"success"'
//    想用 let 又限定取值，要手写注解：
//    let status: "success" | "pending" = "success";
let status = "success";
status = "pending";

// 3. 空数组陷阱：strict 模式下推断为 never[]（"永远不会有元素的数组"）
//    初始值提供不了足够信息时必须手写注解
const numbers: number[] = [];
numbers.push(1);

// 4. 返回值推断为 number，简单函数不用写返回类型注解
//    （但公共 API / 导出函数通常显式标注，防止实现改动意外变更契约）
function add(a: number, b: number) {
  return a + b;
}

// 5. 推断失效/需要手写注解的场景总结：
//    - 函数参数（TS 无法从调用处反推形参类型）
//    - 空值初始化（[]、null，没有信息可推断）
//    - 需要比推断结果更窄的类型（如限定取值范围的联合类型）
//    其余情况相信推断，注解写了反而是噪音

export { name, count, status, numbers, add };
