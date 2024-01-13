<script setup>
defineProps({
  userId: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>Recommended Users Page - {{userId}}</h1>
</template>

<style scoped>

</style>