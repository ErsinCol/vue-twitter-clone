<script setup>
import LeftSidebarLogo from '@/components/LeftSidebarLogo.vue';
import LeftSidebarMenu from '@/components/LeftSidebarMenu.vue';
import LeftSidebarPostBtn from '@/components/LeftSidebarPost.vue';
import LeftSidebarAccount from '@/components/LeftSidebarAccount.vue';
</script>

<template>
    <aside class="w-[275px] max-h-screen min-h-screen px-2 flex flex-col justify-between sticky z-[2] top-0">
        <div class="flex flex-col">
            <LeftSidebarLogo />
            <LeftSidebarMenu />
            <LeftSidebarPostBtn />
        </div>
        <LeftSidebarAccount />
    </aside>
</template>

<style scoped></style>