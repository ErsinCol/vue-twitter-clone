<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router';
import LeftSidebarMenuMore from "@/components/LeftSidebarMenuMore.vue";
import ProfileActiveIcon from "@/assets/icons/profileActive.svg";
import ProfilePassiveIcon from "@/assets/icons/profilePassive.svg";
import {useAuthStore} from "@/store/auth.js";
import {leftSidebarMenuItems} from "@/helpers/leftSidebarMenuItems.js";

const route = useRoute();
const authStore = useAuthStore();

const currentAccount = computed(() => authStore.currentAccount)

const isCurrentRoute = (path) => {
  return route.path === path
}
const getCurrentIcon = (item) => {
  return isCurrentRoute(item.path) ? item.activeIcon : item.passiveIcon;
}
</script>

<template>
  <nav role="navigation" class="mt-0.5 mb-1 flex flex-col">
    <RouterLink
        v-for="(item, index) in leftSidebarMenuItems"
        :key="index"
        :to="item.path"
        class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[color:var(--background-secondary)]"
    >
      <div class="relative">
        <div v-if="item.notification"
             class="absolute -right-1 -top-1 bg-[color:var(--color-primary)] text-[color:var(--background-primary)] rounded-lg w-[1.125rem] h-[1.125rem] text-[0.688rem] flex items-center justify-center border border-[color:var(--background-primary)]">
          {{ item.notification }}
        </div>
        <component :is="getCurrentIcon(item)" class="w-[1.641rem] h-[1.614rem]"/>
      </div>
      <div class="text-xl pr-4 pl-5">{{ item.label }}</div>
    </RouterLink>

    <RouterLink :to="{
          name: 'profile',
          params: {
            username: currentAccount.username
          }
      }">
      <div
          class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[color:var(--background-secondary)]">
        <div class="relative">
          <component :is="isCurrentRoute(`/${currentAccount.username}`) ? ProfileActiveIcon : ProfilePassiveIcon" class="w-[1.641rem] h-[1.614rem]"/>
        </div>

        <div class="text-xl pr-4 pl-5">Profile</div>
      </div>
    </RouterLink>

    <LeftSidebarMenuMore/>
  </nav>
</template>

<style scoped></style>