<script setup>
import TheLeftSidebar from "@/components/TheLeftSidebar.vue";
import TheRightSidebar from "@/components/TheRightSidebar.vue";
import TheModal from "@/modals/TheModal.vue";
import {useModal} from "@/store/modal.js";
import {useAppearance} from "@/store/appearance.js";
import {onMounted} from "vue";

const modal = useModal();
const appearance = useAppearance();

appearance.$subscribe(()=> appearance.applyStyles())

onMounted(()=>{
  appearance.applyStyles();
})
</script>
<template>
    <div class="w-[1265px] h-full mx-auto flex">
        <TheModal v-if="modal.modal"></TheModal>
        <TheLeftSidebar />
        <div class="flex-1 flex justify-between w-full">
            <main class="flex-1 max-w-[600px] border-x border-[color:var(--background-third)]">
                <RouterView />
            </main>
            <TheRightSidebar />
        </div>
    </div>
</template>
<style></style>
