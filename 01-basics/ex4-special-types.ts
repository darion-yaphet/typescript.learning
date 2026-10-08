/**
 * 练习 4：any / unknown / never / void
 * 目标：理解四个特殊类型的区别和适用场景
 */

// unknown 是类型安全的 any：使用前必须通过类型守卫收窄
// typeof / Array.isArray 这类判断叫类型守卫（type guard）
function printLength(value: unknown): void {
  if (typeof value === "string" || Array.isArray(value)) {
    // 收窄后，TS 知道 value 是 string | unknown[]，二者都有 length
    console.log(value.length);
  } else {
    console.log("没有长度");
  }
}

// 永远抛异常、不可能正常返回的函数，返回类型是 never
function fail(message: string): never {
  throw new Error(message);
}

// 穷尽性检查：switch 覆盖 Status 所有成员后，default 分支里 status 的类型是 never
// 一旦给 Status 加新成员而忘了改这里，下面这行赋值会立刻编译报错
type Status = "pending" | "success" | "failed";

function handleStatus(status: Status): string {
  switch (status) {
    case "pending":
      return "处理中";
    case "success":
      return "成功";
    case "failed":
      return "失败";
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}

// void vs undefined：
// - void 用在函数返回类型，表示"调用者不该关心返回值"（约定俗成）
// - undefined 是一个实际的值/类型，表示"有个返回值，它是 undefined"
// 无返回值的函数标 void；显式 return undefined 才标 undefined
function noop(): void {}

// 调用示例
printLength("hello");
printLength([1, 2, 3]);
printLength(42);
console.log(handleStatus("success"));
// fail("演示 never"); // 取消注释会直接抛异常终止程序

export { printLength, fail, handleStatus, noop };
