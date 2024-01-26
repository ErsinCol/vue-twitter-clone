<script setup>
import TheSearch from "@/components/TheSearch.vue";
import RightSidebarPremium from "@/components/RightSidebarPremium.vue";
import RightSidebarTrend from "@/components/RightSidebarTrend.vue";
import RightSidebarRecommendedUsers from "@/components/RightSidebarRecommendedUsers.vue";
import TheFooter from "@/components/TheFooter.vue";
import {onMounted, onUnmounted, ref} from "vue";

const stickySidebarEl = ref(null);
const position = ref('relative')
const top = ref(0)
let lastScrollTop = 0;

function scrollHandler(){
  // scroll direction'u tespit etmek için önceki scroll top değerini saklayabilir ve anlık olan scroll top ile karşılaştırabilirsin.
  // Element.scrollTop, bir elementin içeriğinin dikey olarak kaydırıldığı pixel sayısı, öğenin üst kısmından en üstteki görünen içeriğine olan mesafe
  console.log(document.documentElement.scrollTop)
  let st = document.documentElement.scrollTop;
  if(st > lastScrollTop){
    console.log("aşağı kaydırıyorum.")
  }else if(st < lastScrollTop){
    console.log("yukarı kaydırıyorum.")
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

onMounted(()=>{
  window.addEventListener('scroll', scrollHandler);
})

onUnmounted(()=>{
  window.removeEventListener('scroll', scrollHandler)
})
</script>
<template>
  <aside
      ref="stickySidebarEl"
      class="w-[350px]"
      :style="{
        top: `${top}px`,
        position: position,
      }"
  >
    <TheSearch/>
    <RightSidebarPremium/>
    <RightSidebarTrend />
    <RightSidebarRecommendedUsers />
    <TheFooter />
  </aside>
</template>
<style scoped></style>