<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router';
import SidebarMenuMore from "@/components/SidebarMenuMore.vue";
import {navMenuItems} from '@/utils/consts.js'
import {useAuthStore} from "@/store/auth.js";

const route = useRoute();
const authStore = useAuthStore();

const currentAccount = computed(() => authStore.currentAccount)

const isCurrentRoute = (path) => {
  return route.path === path
}
</script>

<template>
  <nav role="navigation" class="mt-0.5 mb-1 flex flex-col">
    <RouterLink
        v-for="menuItem in navMenuItems"
        :key="menuItem.label"
        :to="{ name: menuItem.name }"
        class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[color:var(--background-secondary)]"
    >
        <div class="relative">
          <div v-if="menuItem.notification"
               class="absolute -right-1 -top-1 bg-[color:var(--color-primary)] text-[color:var(--background-primary)] rounded-lg w-[1.125rem] h-[1.125rem] text-[0.688rem] flex items-center justify-center border border-[color:var(--background-primary)]">
            {{ menuItem.notification }}
          </div>
          <svg v-if="!isCurrentRoute(menuItem.path)" viewBox="0 0 24 24" class="w-[1.641rem] h-[1.614rem]">
            <path fill="currentColor" :d="menuItem.icons.passive"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" class="w-[1.641rem] h-[1.614rem]">
            <path fill="currentColor" :d="menuItem.icons.active"/>
          </svg>
        </div>

        <div class="text-xl pr-4 pl-5">{{ menuItem.label }}</div>
    </RouterLink>

    <RouterLink :to="{
          name: 'profile',
          params: {
            username: currentAccount.username
          }
      }">
      <div class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[color:var(--background-secondary)]">
        <div class="relative">
          <svg v-if="!isCurrentRoute(`/${currentAccount.username}`)" viewBox="0 0 24 24"
               class="w-[26.25px] h-[26.25px]">
            <path fill="currentColor"
                  d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" class="w-[26.25px] h-[26.25px]">
            <path fill="currentColor"
                  d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"/>
          </svg>
        </div>

        <div class="text-xl pr-4 pl-5">Profile</div>
      </div>
    </RouterLink>

    <SidebarMenuMore />
  </nav>
</template>

<style scoped></style>