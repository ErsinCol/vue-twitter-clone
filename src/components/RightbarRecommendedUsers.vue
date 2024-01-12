<script setup>
import RightbarSection from "@/components/RightbarSection.vue";
import RightbarRecommendedUsersList from "@/components/RightbarRecommendedUsersList.vue";
import {useAuthStore} from "@/store/auth.js";
import {computed} from "vue";
const authStore = useAuthStore();

const currentUserId = computed(() => authStore.currentAccount.id)
</script>

<template>
  <RightbarSection title="Who to follow" :more="`/connect_people?user_id=${currentUserId}`">
    <RightbarRecommendedUsersList />
  </RightbarSection>
</template>

<style scoped>

</style>