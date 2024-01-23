<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import { VList } from "virtua/vue";
import BasePost from "@/components/BasePost.vue";
import {posts} from "@/mock/posts.js";

const allPost = ref(posts)
let nextPostId = allPost.value.length + 1;

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 200) {
    allPost.value = allPost.value.concat(
        posts.map((post) => ({ ...post, id: nextPostId++ }))
    );
  }
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <VList :data="allPost" class="custom-virtual-list">
    <template #default="post">
      <BasePost
          :key="post.id"
          :post="post"
      />
    </template>
  </VList>
</template>

<style scoped>

</style>