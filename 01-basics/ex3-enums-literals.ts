/**
 * 练习 3：枚举与字面量类型
 * 目标：掌握 enum、字面量联合类型，以及二者的取舍
 */

// 字符串枚举：每个成员显式绑定字符串值，日志可读性好
// （数字枚举默认 0 开始自增，且有反向映射；字符串枚举没有反向映射）
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 字面量联合类型：纯编译期概念，编译后零代码残留
// 相比枚举更轻量，传参直接写字面量即可，是现代 TS 更推荐的方式
type Theme = "light" | "dark" | "auto";

// 返回值是对象类型 { x: number; y: number }
function move(direction: Direction): { x: number; y: number } {
  const pos = { x: 0, y: 0 };
  switch (direction) {
    case Direction.Up:
      pos.y += 1;
      break;
    case Direction.Down:
      pos.y -= 1;
      break;
    case Direction.Left:
      pos.x -= 1;
      break;
    case Direction.Right:
      pos.x += 1;
      break;
  }
  return pos;
}

// 传参直接写字面量："dark"，不需要像枚举那样 Direction.Up
function applyTheme(theme: Theme): void {
  console.log(`应用主题: ${theme}`);
}

// 调用示例：枚举必须通过 Direction.Up 引用，联合类型直接写字面量
console.log(move(Direction.Up));
console.log(move(Direction.Right));
applyTheme("dark");
// applyTheme("blue"); // 编译报错："blue" 不在 Theme 的取值范围内

export { Direction, move, applyTheme };
export type { Theme };
