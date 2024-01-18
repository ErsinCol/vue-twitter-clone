<script setup>
import RightbarTrendListItemButton from "@/components/RightbarTrendListItemButton.vue";
import {numberFormatter} from "@/utils/numberFormatter.js";

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
      to="/"
  >
    <div class="flex flex-col relative">
      <div class="text-[color:var(--color-base-secondary)] text-[0.813rem] leading-4 flex items-baseline">
        {{ item.title }}
      </div>
      <div class="mt-0.5 leading-5 font-bold">
        {{ item.topic.type === 'tag' ? `#${item.topic.value}` : item.topic.value }}
      </div>
      <div class="text-[color:var(--color-base-secondary)] text-[0.813rem] leading-4 mt-1">
        {{ numberFormatter(item.postCount) }} posts
      </div>
      <RightbarTrendListItemButton />
    </div>
  </RouterLink>
</template>

<style scoped>

</style>