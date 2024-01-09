<script setup>
import SidebarLogo from '@/components/SidebarLogo.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import BaseButton from './BaseButton.vue';
</script>

<template>
    <aside class="w-[275px] min-h-screen px-2 flex justify-between">
        <div class="w-full flex flex-col">
            <SidebarLogo />
            <SidebarMenu />
            <div class="my-1 w-[90%]">
                <BaseButton size="large">Post</BaseButton>
            </div>
        </div>

        <div></div>
    </aside>
</template>

<style scoped></style>