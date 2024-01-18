import { createRouter, createWebHistory } from "vue-router";
import routes from '@/routes/route.js'

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "custom-link-active"
})

export default router