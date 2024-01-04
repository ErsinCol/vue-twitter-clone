import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: HomePage,
                alias: 'home'
            },
            {
                path: 'explore',
                name: 'explore',
                component: () => import('@/views/ExplorePage.vue'),
            },
            {
                path: 'notifications',
                name: 'notifications',
                component: () => import('@/views/NotificationsPage.vue'),
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundPage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "custom-link-active"
})

export default router