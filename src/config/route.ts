import Home from '../pages/home.vue'
import Lost from '../pages/lost/lostPage.vue'
import Register from '../pages/login/register.vue'
// @ts-ignore
import FindPage from '../pages/find/findPage.vue'
import MyPage from '../pages/myPage/myPage.vue'
import Login from '../pages/login/login.vue'
import Intro from '../pages/introPage.vue'
import Order from '../pages/order/orderInfo.vue'
import notFound from '../pages/404.vue'
import Test from '../pages/test.vue'
import Er from '../pages/erweima.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/lost', component: Lost ,meta:{
            auth:true
        }},
    { path: '/find', component: FindPage,meta:{
            auth:true
        } },
    { path: '/my', component: MyPage,
        meta:{
            auth:true
        }
    }, { path: '/test', component: Test,
        meta:{
            auth:true
        }
    },

    { path: '/order', component: Order,meta:{
            auth:true
        }},
    { path: '/intro', component: Intro,meta:{
            showNav: true
        }},
    { path: '/login', component: Login,meta:{
            showNav: true
        }},
    { path: '/register', component: Register,meta:{
            showNav: true
        }},
    {
       path: '/404',
       component: notFound,
       hidden: true},
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
]

export default routes;
