<script setup>
import {useAuthStore} from '@/store/auth.js'
import {computed} from 'vue';
import {Popover, PopoverPanel, PopoverButton} from "@headlessui/vue";

const authStore = useAuthStore();

const currentAccount = computed(() => authStore.currentAccount)

const accounts = computed(() => authStore.accounts)
</script>

<template>
  <div class="my-3">
    <Popover class="relative">
      <PopoverButton
          class="w-full cursor-pointer text-left p-3 flex items-center rounded-full bg-black text-[15px] hover:bg-[#eff3f41a] transition-colors">
        <img :src="currentAccount.avatar" alt="avatar-image" class="w-10 h-10 rounded-full">
        <div class="max-w-full flex flex-col mx-3">
          <span class="font-bold text-[#e7e9ea]">{{ currentAccount.fullname }}</span>
          <span class="text-[#71767b]">@{{ currentAccount.username }}</span>
        </div>
        <div class="grow flex justify-end">
          <svg viewBox="0 0 24 24" class="w-[18.75px] h-[18.75px]">
            <path fill="currentColor"
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
        </div>
      </PopoverButton>
      <PopoverPanel class="absolute z-10 py-3 bottom-full mb-2 left-0 shadow-more rounded-2xl w-[300px] bg-black">
        <ul>
          <li
              v-for="account in accounts"
              :key="account.username"
              class="px-4 py-3"
              :class="{
                  'hover:bg-[#16181c]': account.id !== currentAccount.id
                }"
          >
            <button
                class="w-full flex items-center"
                :disabled="account.id === currentAccount.id"
                @click="authStore.setCurrentAccount(account)"
            >
              <img :src="account.avatar" alt="avatar" class="rounded-full mr-3 w-10 h-10">
              <div class="grow flex items-center justify-between">
                <div class="text-[15px]">
                  <div class="text-[#e7e9ea] font-bold">{{ account.fullname }}</div>
                  <div class="text-[#71767b]">{{ account.username }}</div>
                </div>
                <svg v-if="account.id === currentAccount.id" viewBox="0 0 24 24"
                     class="w-[18.75px] h-[18.75px] mr-2 ml-3 shrink-0">
                  <path fill="#00ba7c"
                        d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"/>
                </svg>
              </div>
            </button>
          </li>
        </ul>
        <div role="separator" class="my-3 bg-[#2f3336] h-px"></div>
        <button class="text-left w-full px-4 py-3 hover:bg-[#eff3f41a] font-bold text-[#e7e9ea]">
          Add an existing account
        </button>
        <button class="text-left w-full px-4 py-3 hover:bg-[#eff3f41a] font-bold text-[#e7e9ea]">
          Manage accounts
        </button>
        <button class="w-full px-4 py-3 text-left font-bold text-[#e7e9ea] hover:bg-[#eff3f41a]">
          Logout @{{ currentAccount.username }}
        </button>
      </PopoverPanel>
    </Popover>
  </div>
</template>

<style scoped></style>