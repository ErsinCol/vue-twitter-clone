<script setup>
import {ref, onMounted, onUnmounted, computed} from "vue";
import BasePost from "@/components/BasePost.vue";
import {posts} from "@/mock/posts.js";

const allPost = ref([])

onMounted(()=>{
  allPost.value = posts
})

function handleScroll() {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 1;

  if (bottomOfWindow) {
    addMorePost()
  }
}


function addMorePost(){
  const updatedPosts = posts.map((post) => {
    return {
      ...post,
      id: (parseInt(post.id) + allPost.value.length).toString(),
    };
  });
  allPost.value = [...allPost.value, ...updatedPosts];
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
  <!--
  <DynamicScroller
      :items="allPost"
      :min-item-size="1"
      class="scroller"
  >
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
          :item="item"
          :active="active"
          :data-index="index"
      >
        <BasePost :post="item" :key="item.id"></BasePost>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
  -->
</template>

<style>
.scroller {
  height: 100%;
}
</style>