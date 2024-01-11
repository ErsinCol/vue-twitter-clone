<script setup>
import {defineProps} from 'vue';
import RightbarTrendListItemButton from "@/components/RightbarTrendListItemButton.vue";
import {numberFormatter} from "@/utils/numberFormatter.js";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
      to="/"
      class="px-4 py-3 cursor-pointer hover:bg-white/[0.03] transition-colors"
  >
    <div class="flex flex-col relative">
      <div class="text-[#71767b] text-[13px] leading-4 flex items-baseline">
        {{ item.title }}
      </div>
      <div class="mt-0.5 text-[#e7e9ea] leading-5 font-bold text-[15px]">
        {{ item.topic.type === 'tag' ? `#${item.topic.value}` : item.topic.value }}
      </div>
      <div class="text-[#71767b] text-[13px] leading-4 mt-1">
        {{ numberFormatter(item.postCount) }} posts
      </div>
      <RightbarTrendListItemButton />
    </div>
  </RouterLink>
</template>

<style scoped>

</style>