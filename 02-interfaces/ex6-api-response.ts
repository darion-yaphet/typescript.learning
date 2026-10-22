/**
 * 练习 6（综合）：给真实 API 响应写类型定义
 * 目标：综合运用 interface、可选属性、联合类型、判别联合
 *
 * 场景：一个用户列表 API，响应结构如下（来自真实后端约定的简化版）
 */

// TODO 1: 定义 UserRole，只能是 "admin" | "editor" | "viewer"
type UserRole = "admin" | "editor" | "viewer";

// TODO 2: 定义 UserProfile：avatar(string) 必填，bio(string) 可选
interface UserProfile {
  avatar: string;
  bio?: string;
}

// TODO 3: 定义 User：对照上面的 list 元素
//   注意：nickname 可能是 null（用联合类型表达）；profile 是可选的
interface User {
  id: number;
  username: string;
  nickname: string | null;
  role: UserRole;
  createdAt: string;
  profile?: UserProfile;
}

// TODO 4: 定义分页结构 PageData<T>... 先别管泛型，直接写死 User 版本：UserListData
//   （学完阶段三泛型后回来重构这个类型）
interface UserListData {
  total: number;
  list: User[];
}

// TODO 5: 定义完整的响应类型 ApiResponse，并把 rawResponse 标注为该类型
//   如果类型写对了，下面这行应该编译通过；写错了编译器会告诉你哪里不匹配
interface ApiResponse {
  code: number;
  message: string;
  data: UserListData;
}

// 原始 JSON 示例（已标注为 ApiResponse 类型）
const rawResponse: ApiResponse = {
  code: 0,
  message: "ok",
  data: {
    total: 2,
    list: [
      {
        id: 1,
        username: "darion",
        nickname: "D哥",
        role: "admin",
        createdAt: "2026-10-08T10:00:00Z",
        profile: { avatar: "https://example.com/a.png", bio: "前端开发" },
      },
      {
        id: 2,
        username: "guest",
        nickname: null,
        role: "viewer",
        createdAt: "2026-10-08T11:00:00Z",
      },
    ],
  },
};

// TODO 6: 写函数 getNicknames，接收 ApiResponse，返回所有用户的 nickname 数组
//   nickname 为 null 时用 username 兜底
function getNicknames(res: ApiResponse): string[] {
  return res.data.list.map((user) => user.nickname ?? user.username);
}

console.log(getNicknames(rawResponse));

export { rawResponse, getNicknames };
export type { UserRole, UserProfile, User, UserListData, ApiResponse };
