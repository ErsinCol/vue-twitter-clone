<script setup>
import {useAuthStore} from '@/store/auth.js'
import {computed} from 'vue';
import {Popover, PopoverPanel, PopoverButton} from "@headlessui/vue";
import MoreHorizontalIcon from "@/assets/icons/moreHorizontal.svg";
import AccountCheckIcon from "@/assets/icons/accountCheck.svg";

const authStore = useAuthStore();

const currentAccount = computed(() => authStore.currentAccount)

const accounts = computed(() => authStore.accounts)
</script>

<template>
  <div class="my-3">
    <Popover class="relative">
      <PopoverButton
          class="w-full cursor-pointer text-left p-3 flex items-center rounded-full bg-[color:var(--background-primary)] text-[15px] hover:bg-[color:var(--background-third)] transition-colors"
      >
        <img :src="currentAccount.avatar" alt="avatar-image" class="w-10 h-10 rounded-full flex-shrink-0">
        <div class="max-w-full flex flex-col mx-3">
          <span class="font-bold leading-[1.25rem]">{{ currentAccount.fullname }}</span>
          <span class="text-[color:var(--color-base-secondary)]">@{{ currentAccount.username }}</span>
        </div>
        <div class="grow flex justify-end">
          <MoreHorizontalIcon class="w-[1.172rem] h-[1.172rem]"/>
        </div>
      </PopoverButton>
      <PopoverPanel class="absolute z-10 py-3 bottom-full mb-2 left-0 shadow-box rounded-2xl w-[300px] bg-[color:var(--background-primary)]">
        <ul>
          <li
              v-for="account in accounts"
              :key="account.username"
              class="px-4 py-3"
              :class="{
                  'hover:bg-[color:var(--background-secondary)]': account.id !== currentAccount.id
                }"
          >
            <button
                class="w-full flex items-center"
                :disabled="account.id === currentAccount.id"
                @click="authStore.setCurrentAccount(account)"
            >
              <img :src="account.avatar" alt="avatar" class="rounded-full mr-3 w-10 h-10">
              <div class="grow flex items-center justify-between">
                <div>
                  <div class="font-bold leading-[1.25rem]">{{ account.fullname }}</div>
                  <div class="text-[color:var(--color-base-secondary)]">{{ account.username }}</div>
                </div>
                <AccountCheckIcon v-if="account.id === currentAccount.id" class="w-[1.172rem] h-[1.172rem] mr-2 ml-3 shrink-0"/>
              </div>
            </button>
          </li>
        </ul>
        <div role="separator" class="my-3 bg-[color:var(--background-third)] h-px"></div>
        <button class="text-left w-full px-4 py-3 hover:bg-[color:var(--background-secondary)] font-bold leading-[1.25rem]">
          Add an existing account
        </button>
        <button class="text-left w-full px-4 py-3 hover:bg-[color:var(--background-secondary)] font-bold leading-[1.25rem]">
          Manage accounts
        </button>
        <button class="w-full px-4 py-3 text-left font-bold hover:bg-[color:var(--background-secondary)] leading-[1.25rem]">
          Logout @{{ currentAccount.username }}
        </button>
      </PopoverPanel>
    </Popover>
  </div>
</template>

<style scoped></style>