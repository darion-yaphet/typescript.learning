# TypeScript 学习计划

> 周期：约 4–6 周，每天 1–2 小时
> 环境：Node v22 + npm 10 + tsc 7.0（已就绪）

## 阶段一：基础类型（第 1 周）

- 原始类型、数组、元组、枚举、字面量类型
- `any` / `unknown` / `never` / `void` 的区别
- 类型注解 vs 类型推断，什么时候该写注解
- 练习：把 5 个 JS 小函数改写成 TS，体会编译报错的价值

## 阶段二：接口与对象（第 2 周）

- `interface` vs `type`，可选属性、只读属性
- 联合类型、交叉类型、类型收窄（`typeof` / `instanceof` / 判别联合）
- 函数类型：重载、可选参数、默认参数、剩余参数
- 练习：给一组真实 API 响应写类型定义

## 阶段三：泛型与工具类型（第 3–4 周，核心难点）

- 泛型函数、泛型接口、泛型约束（`extends`）
- 内置工具类型：`Partial` `Pick` `Omit` `Record` `ReturnType` 等
- `keyof`、`typeof`、索引访问类型、映射类型
- 条件类型、`infer` 入门
- 练习：手写 `Pick`、`Readonly`，实现一个类型安全的 `get(obj, path)`

## 阶段四：工程化实战（第 5–6 周）

- `tsconfig.json` 关键配置（strict、moduleResolution、paths）
- 声明文件 `.d.ts`、给无类型的 npm 包写类型
- 结合 React 或 Node 写一个小项目（如 CLI 工具或 Todo API）
- 挑战：刷 [type-challenges](https://github.com/type-challenges/type-challenges) 的 easy/medium 题

## 目录结构

```
typescript.learning/
├── 01-basics/        # 阶段一练习
├── 02-interfaces/    # 阶段二练习
├── 03-generics/      # 阶段三练习
├── 04-project/       # 阶段四实战项目
├── notes.md          # 学习笔记
└── LEARNING_PLAN.md  # 本文件
```

## 学习资源

- 官方文档：https://www.typescriptlang.org/docs （最权威）
- type-challenges：https://github.com/type-challenges/type-challenges （泛型刷题）
- TypeScript Deep Dive（Basarat，免费开源）：https://basarat.gitbook.io/typescript

## 进度记录

| 阶段 | 状态 | 完成日期 |
|------|------|----------|
| 阶段一：基础类型 | ✅ 已完成 | 2026-10-08 |
| 阶段二：接口与对象 | ⬜ 未开始 | |
| 阶段三：泛型与工具类型 | ⬜ 未开始 | |
| 阶段四：工程化实战 | ⬜ 未开始 | |
