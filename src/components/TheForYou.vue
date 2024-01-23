<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import BasePost from "@/components/BasePost.vue";
import {posts} from "@/mock/posts.js";

const allPost = ref(posts)

function handleScroll(){
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 1;

  if(bottomOfWindow){
    allPost.value = allPost.value.concat(posts)
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
    <BasePost
        v-for="(post, index) in allPost"
        :key="index"
        :post="post"
    />
</template>

<style scoped>

</style>