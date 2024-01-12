<script setup>
import {trends} from "@/utils/consts.js";
import RightbarTrendList from "@/components/RightbarTrendList.vue";
</script>

<template>
  <div class="mb-4 bg-[#16181c] border border-[#16181c] overflow-hidden rounded-2xl flex flex-col">
    <div class="py-3 px-4">
      <h2 class="text-[#e7e9ea] text-xl font-extrabold leading-6 overflow-hidden">
        Trends for you
      </h2>
    </div>
    <RightbarTrendList />
    <RouterLink :to="{name: 'trends'}" class="p-4 transition-colors hover:bg-white/[0.03] text-[#1d9bf0] leading-5 text-[15px]">
      Show more
    </RouterLink>
  </div>
</template>

<style scoped>

</style>