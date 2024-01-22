<script setup>
import {inject} from "vue";

defineProps({
  id: {
    type: String,
    required: true
  }
})

const {activeTab, openTab} = inject('activeTab')
</script>

<template>
  <button
      type="button"
      class="flex-auto text-center hover:bg-[color:var(--background-secondary)] transition-color"
      @click="openTab(id)"
  >
    <div
        class="h-[3.313rem] relative inline-flex items-center"
        :class="{
          'font-bold': activeTab === id,
          'text-[color:var(--color-base-secondary)] font-medium': activeTab !== id
        }"
    >
      <slot />
      <div
          v-if="activeTab === id"
          class="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]"
      />
    </div>
  </button>
</template>

<style scoped>

</style>