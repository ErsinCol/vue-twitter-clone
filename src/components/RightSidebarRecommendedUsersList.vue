<script setup>
import RightSidebarRecommendedUsersListItem from "@/components/RightSidebarRecommendedUsersListItem.vue";
import {recommendedUsers} from "@/helpers/consts.js";
</script>

<template>
  <div
      v-for="user in recommendedUsers"
      :key="user.id"
      role="button"
      class="px-4 py-3 hover:bg-[color:var(--background-third)] transition-colors cursor-pointer"
  >
    <RightSidebarRecommendedUsersListItem :user="user" />
  </div>
</template>

<style scoped>

</style>