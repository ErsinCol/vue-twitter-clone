<script setup>
import { useRoute } from 'vue-router';
import { navMenuItems } from '@/utils/consts.js'

const route = useRoute();

const isCurrentRoute = (path) => {
    return route.path === path
}
</script>

<template>
    <nav role="navigation" class="mt-0.5 mb-1">
        <RouterLink v-for="menuItem in navMenuItems" :key="menuItem.label" :to="{ name: menuItem.name }">
            <div class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[#eff3f41a]">
                <div class="relative">
                    <div v-if="menuItem.notification"
                        class="absolute -right-1 -top-1 bg-[#1d9bf0] text-white rounded-lg min-w-4 h-4 text-[11px] flex items-center justify-center">
                        {{ menuItem.notification }}</div>
                    <svg v-if="!isCurrentRoute(menuItem.path)" viewBox="0 0 24 24" class="w-[26.25px] h-[26.25px]">
                        <path fill="#e7e9ea" :d="menuItem.icons.passive" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" class="w-[26.25px] h-[26.25px]">
                        <path fill="#e7e9ea" :d="menuItem.icons.active" />
                    </svg>
                </div>

                <div class="text-xl pr-4 pl-5 color-[#e7e9ea]">{{ menuItem.label }}</div>
            </div>
        </RouterLink>
    </nav>
</template>

<style scoped></style>