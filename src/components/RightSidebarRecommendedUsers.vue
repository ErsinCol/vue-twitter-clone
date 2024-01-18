<script setup>
import BaseSection from "@/components/BaseSection.vue";
import RightSidebarRecommendedUsersList from "@/components/RightSidebarRecommendedUsersList.vue";
import {useAuthStore} from "@/store/auth.js";
import {computed} from "vue";
const authStore = useAuthStore();

const currentUserId = computed(() => authStore.currentAccount.id)
</script>

<template>
  <BaseSection title="Who to follow" :more="`/connect_people?user_id=${currentUserId}`">
    <RightSidebarRecommendedUsersList />
  </BaseSection>
</template>

<style scoped>

</style>