<script setup>
import {computed} from "vue";
import {useModal} from "@/store/modal.js";
import modals from "@/routes/modals.js";

const modal = useModal();

const currentModal = computed(()=>{
  return modals.find(m => m.name === modal.modal.name).element
})

</script>

<template>
  <div v-if="currentModal" class="fixed inset-0 flex items-center justify-center bg-[color:var(--background-modal)] z-20">
    <div class="bg-[color:var(--background-primary)] max-w-[600px] max-h-[90vh] min-w-[600px] overflow-auto rounded-2xl">
      <currentModal @close="modal.removeModal()"/>
    </div>
  </div>
</template>

<style scoped>

</style>