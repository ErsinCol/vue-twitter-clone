<script setup>
import RightbarTrendListItem from "@/components/RightbarTrendListItem.vue";
import {trends} from "@/utils/consts.js";
</script>

<template>
  <div class="mb-4 bg-[#16181c] border border-[#16181c] overflow-y-hidden overflow-x-hidden rounded-2xl flex flex-col">
    <div class="py-3 px-4">
      <h2 class="text-[#e7e9ea] text-xl font-extrabold leading-6 overflow-hidden">
        Trends for you
      </h2>
    </div>
    <RightbarTrendListItem v-for="trend in trends" :key="trend.id" :item="trend"/>
  </div>
</template>

<style scoped>

</style>