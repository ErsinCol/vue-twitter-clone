<script setup>
import TheSidebar from "@/components/TheSidebar.vue";
import TheRightbar from "@/components/TheRightbar.vue";
import Modal from "@/modals/Modal.vue";
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
        <Modal v-if="modal.modal"></Modal>
        <TheSidebar />
        <div class="flex-1 flex justify-between w-full">
            <main class="flex-1 max-w-[600px] border-x border-[color:var(--background-third)]">
                <RouterView />
            </main>
            <TheRightbar />
        </div>
    </div>
</template>
<style></style>
