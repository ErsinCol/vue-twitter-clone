import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        alias: '/home'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router