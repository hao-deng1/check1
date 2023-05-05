import axios, {AxiosInstance} from "axios";
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";
import {getToken, removeToken} from "../utils/token";
import {storage} from "../utils/token/store";
const router = useRouter();

// @ts-ignore
const myAxios: AxiosInstance = axios.create({
    // baseURL: 'http://localhost:7529/api',
    baseURL: 'http://43.142.109.127:7529/api',
});

myAxios.defaults.withCredentials = true; // 配置为true

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦', config)
    // @ts-ignore
    // config.headers['tokenName'] = getToken() ;
    if (storage.get('token')) {
        config.headers.token = storage.get('token');
    }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response)
    // Do something with response data
    // 全局拦截错误
    if(response.data.message=='用户名或密码错误'){
        alert(response.data.message)
        //跳转到登录页
        router.push('/login')
    }

    return response.data;
}, function (error) {
    // Do something with response error
    if(error.response.status == 403){
        removeToken()
    }
    return Promise.reject(error);
});

export default myAxios;
