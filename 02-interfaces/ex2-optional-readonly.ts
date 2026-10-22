/**
 * 练习 2：可选属性与只读属性
 * 目标：掌握 ? 和 readonly 修饰符，理解它们对赋值的影响
 */

// readonly：创建后不可重新赋值；?：可选属性，不传时是 undefined
interface Config {
  readonly apiUrl: string;
  timeout?: number;
  retries?: number;
}

// options 整体可选，内部字段也各自可选
// options?.timeout 可选链：options 为 undefined 时短路返回 undefined
// ?? 空值合并：只在左边是 null/undefined 时取右边（不像 || 会把 0/"" 也判为假）
function createConfig(
  apiUrl: string,
  options?: { timeout?: number; retries?: number }
): Config {
  return {
    apiUrl,
    timeout: options?.timeout ?? 3000,
    retries: options?.retries ?? 3,
  };
}

const config = createConfig("https://api.example.com", { timeout: 5000 });

// config.apiUrl = "https://other.com"; // 报错：Cannot assign to 'apiUrl' because it is a read-only property
// 注意：readonly 只保护顶层赋值，嵌套对象内部属性不受保护

console.log(config);

export { createConfig, config };
export type { Config };
