/**
 * 练习 3：联合类型与交叉类型
 * 目标：掌握 |（或）和 &（且），理解它们的组合逻辑
 */

// 联合类型："string 或 number"，取值范围变宽
type Id = string | number;

function printId(id: Id): void {
  // id.toUpperCase(); // 报错：number 上没有此方法
  // 联合类型上只能调用所有成员共有的属性/方法，特有的必须先收窄
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // 收窄为 string 后安全
  } else {
    console.log(id.toFixed(2)); // 此处 id 收窄为 number
  }
}

interface HasName {
  name: string;
}
interface HasAge {
  age: number;
}

// 交叉类型："既是 HasName 又是 HasAge"，约束叠加，字段一个不能少
// 方向别搞反：| 让类型更宽（取值多），& 让类型更窄（约束多）
type Person = HasName & HasAge;

// const badPerson: Person = { name: "张三" }; // 报错：Property 'age' is missing
const person: Person = { name: "张三", age: 30 };

printId("abc-123");
printId(42);
console.log(person);

export { printId, person };
export type { Id, Person, HasName, HasAge };
