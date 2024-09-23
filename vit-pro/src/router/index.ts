import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";

import Login from "../views/login/index.vue"

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/', 
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
})

export default router;