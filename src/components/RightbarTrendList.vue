<script setup>
import RightbarTrendListItem from "@/components/RightbarTrendListItem.vue";
import {trends} from "@/utils/consts.js";
</script>

<template>
  <ul>
    <li v-for="trend in trends" :key="trend.id" class="px-4 py-3 cursor-pointer hover:bg-[color:var(--background-third)] transition-colors">
      <RightbarTrendListItem :item="trend"/>
    </li>
  </ul>
</template>

<style scoped>

</style>