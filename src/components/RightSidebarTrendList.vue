<script setup>
import RightSidebarTrendListItem from "@/components/RightSidebarTrendListItem.vue";
import {trends} from "@/helpers/consts.js";
</script>

<template>
  <ul>
    <li v-for="trend in trends" :key="trend.id" class="px-4 py-3 cursor-pointer hover:bg-[color:var(--background-third)] transition-colors">
      <RightSidebarTrendListItem :item="trend"/>
    </li>
  </ul>
</template>

<style scoped>

</style>