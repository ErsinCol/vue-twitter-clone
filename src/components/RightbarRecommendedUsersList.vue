<script setup>
import RightbarRecommendedUsersListItem from "@/components/RightbarRecommendedUsersListItem.vue";
import {recommendedUsers} from "@/utils/consts.js";
</script>

<template>
  <div
      v-for="user in recommendedUsers"
      :key="user.id"
      role="button"
      class="px-4 py-3 hover:bg-[color:var(--background-third)] transition-colors cursor-pointer"
  >
    <RightbarRecommendedUsersListItem :user="user" />
  </div>
</template>

<style scoped>

</style>