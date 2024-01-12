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
            {
                path: 'messages',
                name: 'messages',
                component:  () => import('@/views/MessagesPage.vue'),
            },
            {
                path: 'lists',
                name: 'lists',
                component: () => import('@/views/ListsPage.vue'),
            },
            {
                path: 'trends',
                name: 'trends',
                component: () => import('@/views/TrendsPage.vue'),
            },
            {
                path: 'connect_people',
                name: 'connect-people',
                component: () => import('@/views/RecommendedUsersPage.vue'),
                props: route => ({
                    userId: route.query.user_id
                })
            },
            {
                path: ':username',
                name: 'profile',
                component: () => import('@/views/ProfilePage.vue')
            }
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
    linkExactActiveClass: "custom-link-active"
})

export default router