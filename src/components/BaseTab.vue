<script setup>
import {provide, ref} from "vue";

const props = defineProps({
  initialTab: {
    type: String,
    required: true
  }
})

const activeTab = ref(props.initialTab);

function openTab(tabName) {
  activeTab.value = tabName
}

provide('activeTab', {
  activeTab,
  openTab,
})
</script>

<template>
  <slot :activeTab="activeTab"/>
</template>

<style scoped>

</style>