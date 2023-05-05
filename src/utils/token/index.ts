import Cookies from 'js-cookie'

// ↓cookie 中保存 token 的键
export const tokenKey = 'token'

// ↓获取token
export const getToken = (): Object | undefined => {
    return Cookies.get(tokenKey)
}

// ↓设置token
export const setToken = (token: Object): Object | undefined => {
    return Cookies.set(tokenKey, <string>token)
}

// ↓删除token
export const removeToken = (): void => {
    return Cookies.remove(tokenKey)
}

// ↓判断token是否存在
export const existToken = (): boolean => {
    return getToken() !== undefined
}
