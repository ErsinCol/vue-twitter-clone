<script setup>
import { useAuth } from '@/store/auth.js'
import { computed } from 'vue';

const authStore = useAuth();

const currentAccount = computed(() => authStore.currentAccount)
</script>

<template>
    <div class="my-3">
        <div aria-label="account menu" role="button"
            class="cursor-pointer p-3 flex items-center rounded-full bg-black text-[15px] hover:bg-[#eff3f41a] transition-colors">
            <img :src="currentAccount.avatar" alt="avatar-image" class="w-10 h-10 rounded-full">
            <div class="max-w-full flex flex-col mx-3">
                <span class="font-bold text-[#e7e9ea]">{{ currentAccount.fullname }}</span>
                <span class="text-[#71767b]">@{{ currentAccount.username }}</span>
            </div>
            <div class="grow flex justify-end">
                <svg viewBox="0 0 24 24" class="w-[18.75px] h-[18.75px]">
                    <path fill="currentColor"
                        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped></style>