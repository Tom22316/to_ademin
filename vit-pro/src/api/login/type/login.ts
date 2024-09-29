
// 声明LoginRequestData接口
export interface LoginRequestData {
    // 账号
    username: "admin" | "editor"
    // 密码
    password: string
    // 验证码
    code: string
}

// 响应数据的格式
export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>