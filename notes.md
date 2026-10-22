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

## 阶段二：接口与对象（2026-10-22 完成）

### interface vs type

- **interface（接口）**：定义对象结构，无等号；支持**声明合并**（同名接口自动合并字段，扩充三方库类型利器）；用 `extends` 实现继承。
- **type（类型别名）**：几乎可给任意类型起别名，有等号；**禁止同名声明**（会报重复标识符错误）；用 `&`（交叉类型）实现类似继承的属性扩展。
- **选型建议**：面向对象/数据模型/公共库 API 优先 `interface`；联合类型、元组、函数别名、复杂计算与映射类型优先 `type`。

### 可选属性与只读属性

- `?` 可选属性：等价于 `T | undefined`，未传时取值为 `undefined`。
- `readonly`：只读属性，初始化后禁止重新赋值；**注意它仅为浅层只读**，嵌套对象内部字段不受保护。
- `?.` 与 `??`：可选链安全访问，`??`（空值合并）仅在左侧为 `null` 或 `undefined` 时生效，防止 `||` 误将 `0` 或空字符串 `""` 判定为假。

### 联合类型 vs 交叉类型

- `|` 联合类型（或）：取值范围变宽，但可直接访问的方法/属性变窄（未收窄前只能调用所有成员共有的属性）。
- `&` 交叉类型（且）：约束叠加，要求同时满足所有成员的所有字段，字段一个不能少。

### 类型收窄（Type Narrowing）四大核心手段

1. `typeof`：收窄原始类型（`string`、`number`、`boolean` 等）。
2. `instanceof`：收窄构造函数原型（`Date`、`RegExp`、`Error` 及自定义 Class）。
3. `in` 操作符：根据属性名区分不同对象类型（如 `"swim" in animal`）。
4. **判别联合（Discriminated Union）**：现代 TS 最核心架构模式。通过共享单一的字面量判别属性（如 `kind: "circle" | "square"`），配合 `switch` 分支与 `never` 穷尽性检查，编译器可百分百安全推导每个分支的具体类型。

### 函数类型

- 独立函数类型：`type BinaryOp = (a: number, b: number) => number;`。
- 可选与默认参数：默认参数天然具有可选语义；必选参数不可排在可选参数之后。
- 剩余参数：`...args: number[]` 收拢为数组。
- **函数重载**：按调用契约书写若干个重载签名，最后紧跟一个能兼容所有签名的实现签名；调用者只能按重载签名调用，外部无法直接传入不兼容的组合。

### 真实业务 API 类型设计模式

- 遵循自底向上组件化思路：
  `字面量联合（Role/Status）` -> `嵌套对象（UserProfile）` -> `主实体（User）` -> `容器/分页结构（UserListData）` -> `顶层包装协议（ApiResponse）`。
- 善用 `nickname: string | null` 表达后端返回的空值，与前端可选 `profile?: UserProfile` 区分开。

## 阶段三：泛型与工具类型

（待记录）

## 阶段四：工程化实战

（待记录）
