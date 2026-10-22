/**
 * 练习 1：interface 与 type
 * 目标：掌握两种定义对象类型的方式，理解它们的异同和适用场景
 */

// interface 定义对象类型：无等号
interface User {
  id: number;
  name: string;
  email: string;
}

// type 定义对象类型：有等号
type Point = {
  x: number;
  y: number;
};

// 声明合并（declaration merging，interface 独有）：
// 同名 interface 不会报错，字段被合并——User 最终有 id/name/email/age 四个字段
// type 同名会直接报重复定义错误
interface User {
  age: number;
}

// interface 用 extends 继承；type 的等价写法是交叉类型：
// type Admin = User & { role: string }
interface Admin extends User {
  role: string;
}

const user: User = {
  id: 1,
  name: "darion",
  email: "darion@example.com",
  age: 28, // 合并后必填，删掉这行会报错
};

const admin: Admin = {
  id: 2,
  name: "admin",
  email: "admin@example.com",
  age: 30,
  role: "super",
};

const point: Point = { x: 0, y: 0 };

console.log(user, admin, point);

export { user, admin, point };
export type { User, Point, Admin };
