<script setup>
import SidebarLogo from '@/components/SidebarLogo.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import SidebarPostBtn from '@/components/SidebarPostBtn.vue';
import SidebarAccount from '@/components/SidebarAccount.vue';
</script>

<template>
    <aside class="w-[275px] min-h-screen max-h-screen px-2 flex flex-col justify-between sticky top-0">
        <div class="flex flex-col">
            <SidebarLogo />
            <SidebarMenu />
            <SidebarPostBtn />
        </div>
        <SidebarAccount />
    </aside>
</template>

<style scoped></style>