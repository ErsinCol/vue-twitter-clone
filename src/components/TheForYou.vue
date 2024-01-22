<script setup>
import BasePost from "@/components/BasePost.vue";
import {posts} from "@/mock/posts.js";
</script>

<template>
  <BasePost
    v-for="post in posts"
    :key="post.id"
    :post="post"
  />
</template>

<style scoped>

</style>