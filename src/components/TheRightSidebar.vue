<script setup>
import TheSearch from "@/components/TheSearch.vue";
import RightSidebarPremium from "@/components/RightSidebarPremium.vue";
import RightSidebarTrend from "@/components/RightSidebarTrend.vue";
import RightSidebarRecommendedUsers from "@/components/RightSidebarRecommendedUsers.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
<template>
  <aside class="w-[350px] mr-2.5">
    <TheSearch/>
    <RightSidebarPremium/>
    <RightSidebarTrend />
    <RightSidebarRecommendedUsers />
    <TheFooter />
  </aside>
</template>
<style scoped></style>