import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        alias: '/home'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundPage.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router