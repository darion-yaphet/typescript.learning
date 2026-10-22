# typescript.learning

TypeScript 学习练习项目，按阶段组织，每个练习可独立类型检查和运行。

## 环境

- Node v22+
- TypeScript 5.6（strict 模式）
- tsx（直接运行 TS 文件）

## 目录

```
├── 01-basics/        # 阶段一：基础类型 ✅
│   ├── ex1-primitives.ts       # 原始类型与类型注解
│   ├── ex2-arrays-tuples.ts    # 数组与元组
│   ├── ex3-enums-literals.ts   # 枚举与字面量联合
│   ├── ex4-special-types.ts    # any / unknown / never / void
│   └── ex5-inference.ts        # 类型推断
├── 02-interfaces/    # 阶段二：接口与对象 ✅
│   ├── ex1-interface-vs-type.ts    # interface 与 type 异同与声明合并
│   ├── ex2-optional-readonly.ts    # 可选属性与只读属性
│   ├── ex3-union-intersection.ts   # 联合类型与交叉类型
│   ├── ex4-narrowing.ts            # 四大类型收窄与判别联合
│   ├── ex5-function-types.ts       # 函数类型、剩余参数与函数重载
│   └── ex6-api-response.ts         # 综合实战：API 响应类型设计
├── 03-generics/      # 阶段三：泛型与工具类型
├── 04-project/       # 阶段四：工程化实战
├── notes.md          # 学习笔记
└── LEARNING_PLAN.md  # 学习计划与进度
```

## 常用命令

```bash
npm run check                      # 全项目类型检查（tsc --noEmit）
npx tsx 01-basics/ex1-primitives.ts  # 运行单个练习
```

## 学习方式

每个练习文件包含 TODO 和思考题，补全代码让 `npm run check` 通过即为完成。
学习计划与进度见 [LEARNING_PLAN.md](./LEARNING_PLAN.md)，知识点总结见 [notes.md](./notes.md)。
