<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header
    class="sticky border-b border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
  >
    <h3 class="px-4 h-[3.313rem] flex items-center text-xl font-bold">
      {{title}}
    </h3>
    <slot />
  </header>
</template>

<style scoped>

</style>