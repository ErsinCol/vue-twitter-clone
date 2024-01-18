<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  more: {
    type: [String, Boolean],
    default: false,
  }
})
</script>

<template>
  <div class="mb-4 bg-[color:var(--background-secondary)] border border-[color:var(--background-secondary)] overflow-hidden rounded-2xl flex flex-col">
    <div class="py-3 px-4">
      <h2 class="text-xl font-extrabold leading-6 overflow-hidden">
        {{title}}
      </h2>
    </div>
    <slot />
    <RouterLink
        v-if="more"
        :to=more
        class="h-[3.25rem] p-4 transition-colors hover:bg-[color:var(--background-third)] text-[color:var(--color-primary)] leading-5 text-[15px]"
    >
      Show more
    </RouterLink>
  </div>
</template>

<style scoped>

</style>