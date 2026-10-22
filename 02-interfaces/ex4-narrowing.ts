/**
 * 练习 4：类型收窄（Type Narrowing）
 * 目标：掌握 typeof / instanceof / in / 判别联合 四种收窄方式
 */

// TODO 1: typeof 收窄——处理 string | number，string 转大写，number 保留两位小数
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// TODO 2: instanceof 收窄——处理 Date | RegExp，Date 输出 ISO 字符串，RegExp 输出 source
function stringify(value: Date | RegExp): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value.source;
}

// TODO 3: in 收窄——区分 Fish 和 Bird，分别调用 swim() 和 fly()
interface Fish {
  swim: () => void;
}
interface Bird {
  fly: () => void;
}
function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

// TODO 4: 判别联合（Discriminated Union）——最核心的收窄模式
// 定义 Shape 联合：Circle(有 radius) | Square(有 sideLength)，共同字段 kind 作为"判别标签"
// 然后写 area 函数，用 switch 按 kind 计算面积
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength * shape.sideLength;
    default: {
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
    }
  }
}

console.log(formatValue("hello"));
console.log(formatValue(3.14159));
console.log(stringify(new Date("2026-10-08T00:00:00Z")));
console.log(stringify(/typescript/g));
console.log(area({ kind: "circle", radius: 5 }));
console.log(area({ kind: "square", sideLength: 4 }));

export { formatValue, stringify, move, area };
export type { Shape, Fish, Bird, Circle, Square };
