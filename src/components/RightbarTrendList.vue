<script setup>
import RightbarTrendListItem from "@/components/RightbarTrendListItem.vue";
import {trends} from "@/utils/consts.js";
</script>

<template>
  <ul>
    <li v-for="trend in trends" :key="trend.id" class="px-4 py-3 cursor-pointer hover:bg-white/[0.03] transition-colors">
      <RightbarTrendListItem :item="trend"/>
    </li>
  </ul>
</template>

<style scoped>

</style>