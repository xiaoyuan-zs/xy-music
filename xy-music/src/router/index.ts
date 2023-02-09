import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
// @ts-ignore
import nprogress from "nprogress";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
})

router.afterEach((to, from) => {
    nprogress.done()
})

export default router