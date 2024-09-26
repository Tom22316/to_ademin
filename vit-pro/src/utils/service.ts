// 请求实例和请求方法
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"
import { ElMessage } from "element-plus"
import { get, merge } from "lodash-es"
import { getToken } from "./cache/cookies"
// 创建请求实例
function createService (){
    
    // 创建Axios实例
    const service = axios.create();
    // 请求拦截器
    // interceptors 专门用来做请求器的
    service.interceptors.request.use(
        // 第一个参数是一个函数，用于处理请求配置。这是你可以在请求发送前修改请求的地方。
        // 第二个参数是一个函数，用于处理请求错误。它会在请求失败时被调用。

        // 此处可以修改config
        (config) =>config,
        // 发送失败，Promise返回拒绝
        (error) => Promise.reject(error)
    )

    // 响应拦截器
    service.interceptors.response.use(
        (response) => {
            // apiData 是 api 返回的数据
            const apiData = response.data;
            // 二进制数据则直接返回
             const responseType = response.request?.responseType;
            if (responseType === "blob" || responseType === "arraybuffer") return apiData;
            // 对code进行判断
            const code = apiData.code;
            // 如果没有code
            if(code == undefined){
                ElMessage.error("非系统接口");
                // 返回Promis
                return Promise.reject(new Error("非系统接口"));
            }
            // 枚举code
            switch (code) {
                case 0:
                    // 本系统采用 code === 0 来表示没有业务错误
                    return apiData
                case 401:
                    // Token 过期时
                    // return logout()
                default:
                    // 不是正确的 code
                    ElMessage.error(apiData.message || "Error")
                    return Promise.reject(new Error("Error"))
            }
        },

        (error) => {
            // status 是 HTTP 状态码
            const status = get(error, "response.status")
            switch (status) {
                case 400:
                    error.message = "请求错误"
                    break
                case 401:
                    // Token 过期时
                    // logout()
                    break
                case 403:
                    error.message = "拒绝访问"
                    break
                case 404:
                    error.message = "请求地址出错"
                    break
                case 408:
                    error.message = "请求超时"
                    break
                case 500:
                    error.message = "服务器内部错误"
                    break
                case 501:
                    error.message = "服务未实现"
                    break
                case 502:
                    error.message = "网关错误"
                    break
                case 503:
                    error.message = "服务不可用"
                    break
                case 504:
                    error.message = "网关超时"
                    break
                case 505:
                    error.message = "HTTP 版本不受支持"
                    break
                default:
                    break
            }
            ElMessage.error(error.message)
            return Promise.reject(error)
        }
    )

    return service;
}

// 创建请求方法

function createRequest(service: AxiosInstance){
    return function <T> (config:AxiosRequestConfig) : Promise<T> {

        const token = getToken();
        // 默认配置对象
        const defaultConfig = {
            header: {
                // 携带token
                Authorization: token ? `Bearer ${token}` : undefined,
                "Content-Type": "application/json"
            },
            timeout: 5000,
            // *import.meta.env是Vite框架的特殊对象,这个暂时不去理解
            baseURL: import.meta.env.VITE_BASE_API,
            data: {}
        }
        // 将默认配置 defaultConfig 和传入的自定义配置 config 进行合并成为 mergeConfig
        const mergeConfig = merge(defaultConfig, config)
        return service(mergeConfig)
    }
}

/** 用于网络请求的实例 */
const service = createService()
/** 用于网络请求的方法 */
export const request = createRequest(service)