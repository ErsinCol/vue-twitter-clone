<script setup>
import RightbarSearch from "@/components/RightbarSearch.vue";
import RightbarPremium from "@/components/RightbarPremium.vue";
import RightbarTrend from "@/components/RightbarTrendList.vue";
</script>
<template>
  <aside class="w-[350px] mr-2.5">
    <RightbarSearch/>
    <RightbarPremium/>
    <RightbarTrend />
  </aside>
</template>
<style scoped></style>