import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";

import Login from "../components/index.vue"

export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login', 
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
})

export default router;