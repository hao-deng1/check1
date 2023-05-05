import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from "./config/route";
import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
// 从 popmotion 中按需导入 animate 动画函数
import { animate } from 'popmotion'
import '../src/assets/style/iconfont.css'
import {getToken} from "./utils/token";
import {storage} from "./utils/token/store";
import 'qiniu-js/dist/qiniu.min.js'



const router = VueRouter.createRouter({
// 创建路由实例并传递 `routes` 配置
    linkActiveClass: 'active',
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
app.use(AntDesignVue)
// @ts-ignore
app.use(animate)
app.mount('#app')

// 路由守卫
router.beforeEach((to,from,next)=>{
    // to要跳转到的路径
    // from从哪个路径来
    // next往下执行的回调
    // 在localStorage中获取token
    const token = storage.get('token')
    // 判断该页面是否需要登录
    if (to.path === "/login") {
        next();
    } else {
        if (to.meta.auth) {
            // 如果token存在直接跳转
            if (token) {
                next()
            } else {
                // 否则跳转到login登录页面
                alert("请先登录");
                next({
                    path: '/login',
                    // 跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
                    // query:{
                    //     redirect:to.fullPath
                    // }
                })
            }
        } else {
            // 如果不需要登录，则直接跳转到对应页面
            next()
        }
    }
})

// export const permissionRouter = function(router, roleType) {
//     return router.filter(item => {
//         if(item.children)
//             item.children = permissionRouter(item.children)
//         return item.meta.permission.includes(roleType)
//     })
// }


