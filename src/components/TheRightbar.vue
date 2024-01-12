<script setup>
import RightbarSearch from "@/components/RightbarSearch.vue";
import RightbarPremium from "@/components/RightbarPremium.vue";
import RightbarTrend from "@/components/RightbarTrend.vue";
import RightbarRecommendedUsers from "@/components/RightbarRecommendedUsers.vue";
</script>
<template>
  <aside class="w-[350px] mr-2.5">
    <RightbarSearch/>
    <RightbarPremium/>
    <RightbarTrend />
    <RightbarRecommendedUsers />
  </aside>
</template>
<style scoped></style>