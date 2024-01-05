<script setup>
import { useRoute } from 'vue-router';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
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

        <Popover class="relative">
            <PopoverButton>
                <div class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[#eff3f41a]">
                    <svg viewBox="0 0 24 24" class="w-[26.25px] h-[26.25px]">
                        <path fill="#e7e9ea" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                    </svg>
                    <div class="text-xl pr-4 pl-5 color-[#e7e9ea]">More</div>
                </div>
            </PopoverButton>
            <PopoverPanel class="fixed z-10 shadow-more top-[24.75px] right-[1026.5px] bg-black max-h-[calc(100vh - 24.75px)] max-w-[384px] min-w-[318px] overflow-y-auto overflow-x-hidden rounded-xl">
                <button class="flex p-4 items-center text-left hover:bg-[#eff3f41a] transition-colors w-full">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 mr-6">
                        <path fill="#e7e9ea" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    <div class="text-xl text-white flex-1 font-bold">Premium</div>
                </button>
                <button class="flex p-4 items-center text-left hover:bg-[#eff3f41a] transition-colors w-full">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 mr-6">
                        <path fill="#e7e9ea" d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                    </svg>
                    <div class="text-xl text-white flex-1 font-bold">Bookmarks</div>
                </button>
                <button class="flex p-4 items-center text-left hover:bg-[#eff3f41a] transition-colors w-full">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 mr-6">
                        <path fill="#e7e9ea" d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                    </svg>
                    <div class="text-xl text-white flex-1 font-bold">Communities</div>
                </button>
                <button class="flex p-4 items-center text-left hover:bg-[#eff3f41a] transition-colors w-full">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 mr-6">
                        <path fill="#e7e9ea" d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"></path>
                    </svg>
                    <div class="text-xl text-white flex-1 font-bold">Monetization</div>
                </button>
            </PopoverPanel>
        </Popover>
    </nav>
</template>

<style scoped></style>