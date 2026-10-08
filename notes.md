# TypeScript 学习笔记

## 阶段一：基础类型（2026-10-08 完成）

### 原始类型与注解

- 7 个原始类型：`string` `number` `boolean` `bigint` `symbol` `undefined` `null`
- TS 不区分整数和浮点，都是 `number`
- 函数注解位置：参数括号内逐个标，返回类型标在括号后 `function f(a: string): number {}`

### 数组与元组

- 数组两种等价写法：`number[]` 和 `Array<number>`，日常用前者
- 元组 `[string, number, boolean]`：锁死长度和每个位置的类型，顺序错了也报错
- `readonly number[]`：push/pop 等修改方法被编译器禁用

### 枚举 vs 字面量联合

- 数字枚举：默认 0 开始自增，有反向映射；字符串枚举：日志可读，无反向映射
- 字面量联合 `type T = "a" | "b"`：纯编译期概念，编译后零残留，传参直接写字面量
- 现代 TS 推荐：字面量联合 + 穷尽性检查，优于枚举

### 四个特殊类型

| 类型 | 含义 | 场景 |
|---|---|---|
| `any` | 放弃检查 | 尽量不用，迁移旧 JS 时过渡 |
| `unknown` | 类型安全的"不知道" | 接收外部数据，收窄后使用 |
| `never` | 永不可能 | 抛异常函数、穷尽性检查 |
| `void` | 无返回值 | 函数返回类型 |

- `void` vs `undefined`：void 表示"不该关心返回值"；undefined 是实际的值
- 类型守卫（type guard）：`typeof`、`Array.isArray` 等判断把 unknown 收窄到具体类型

### 穷尽性检查（实用套路）

```ts
default: {
  const exhaustiveCheck: never = status; // 加新枚举成员忘改 switch 时立刻报错
  return exhaustiveCheck;
}
```

### 类型推断规则

- `const` 推断到最窄的字面量类型；`let` 放宽到基础类型
- 空数组 `[]` 推断为 `never[]`，push 任何东西都报错 → 必须手写 `number[]`
- **必须手写注解的场景**：函数参数、空值初始化、需要比推断结果更窄的类型（限定取值范围）
- 其余情况相信推断，注解是噪音
- 公共 API / 导出函数建议显式写返回类型，防止实现改动意外变更契约

### 工程小记

- `noUnusedLocals`（tsconfig strict 实践之一）：声明未使用的变量会报错，防死代码
- 导出纯类型用 `export type { T }`，告诉编译器别生成 JS 代码

## 阶段二：接口与对象

（待记录）

## 阶段三：泛型与工具类型

（待记录）

## 阶段四：工程化实战

（待记录）
