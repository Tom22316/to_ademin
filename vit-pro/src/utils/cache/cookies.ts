// 统一处理处理Cookies,获取Token

import CacheKey from "../../constants/cache-key";
import Cookies from "js-cookie"

// 获取Token
export const getToken = () =>{
    return Cookies.get(CacheKey.TOKEN);
}

export const setToken = (token: string) =>{
    return Cookies.set(CacheKey.TOKEN, token);
}

export const removeToken = () =>{
    Cookies.remove(CacheKey.TOKEN);
}