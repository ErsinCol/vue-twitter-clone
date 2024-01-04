<script setup>
import TheSidebar from "@/components/TheSidebar.vue";
import TheRightbar from "@/components/TheRightbar.vue";
</script>
<template>
    <div class="w-[1265px] h-full mx-auto flex">
        <TheSidebar />
        <div class="flex-1 flex justify-between w-full">
            <main class="flex-1 max-w-[600px] border-x border-[#2f3336]">
                <RouterView />
            </main>
            <TheRightbar />
        </div>
    </div>
</template>
<style></style>
