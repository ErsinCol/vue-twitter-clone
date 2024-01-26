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
let prevScrollTop = window.scrollY;
let topPositionAtWhichElementBecomesStickyFromTop = 0
let offset;

const scrollHandler = () => {
  const elementBoundingRect = stickySidebarEl.value.getBoundingClientRect();
  const elementBoundingRectTop = Math.ceil(elementBoundingRect.top);
  const elementBoundingRectBottom = Math.ceil(elementBoundingRect.bottom);
  const topDistanceOfElementRelativeToPageTop = Math.ceil(stickySidebarEl.value.offsetTop);
  const topDistanceAtWhichElementBecomesStickyFromBottom = elementBoundingRectTop;

  const scrollYOffset = window.scrollY;
  const isScrollingUp = scrollYOffset < prevScrollTop;
  const isScrollingDown = scrollYOffset > prevScrollTop;
  const windowHeight = document.documentElement.clientHeight;

  const topEndPosition = elementBoundingRectTop - topPositionAtWhichElementBecomesStickyFromTop
  const bottomEndPosition = elementBoundingRectBottom;

  const isTopEndAboveViewport = topEndPosition < 0;
  const isTopEndBelowViewport = topEndPosition > windowHeight;
  const isBottomEndBelowViewport = bottomEndPosition > windowHeight;
  const isBottomEndAboveViewport = bottomEndPosition < 0;

  const isTopEndBetweenViewport = !isTopEndAboveViewport && !isTopEndBelowViewport;
  const isBottomEndBetweenViewport = !isBottomEndAboveViewport && !isBottomEndBelowViewport;

  const areBothTopAndBottomEndsOnOppositeEndsOfViewport = isTopEndAboveViewport && isBottomEndBelowViewport;
  const areBothTopAndBottomEndsBetweenViewport = isTopEndBetweenViewport && isBottomEndBetweenViewport;

  if (isTopEndBelowViewport || isBottomEndAboveViewport) {
    position.value = 'relative';
    top.value = scrollYOffset
    prevScrollTop = scrollYOffset;
    return;
  }
  if (areBothTopAndBottomEndsOnOppositeEndsOfViewport) {
    position.value = 'relative'
    top.value = topDistanceOfElementRelativeToPageTop - offset;
    prevScrollTop = scrollYOffset;
    return;
  }

  if (areBothTopAndBottomEndsBetweenViewport) {
    position.value = 'sticky'
    top.value = topPositionAtWhichElementBecomesStickyFromTop
    prevScrollTop = scrollYOffset;
    return;
  }

  if (isScrollingUp) {
    if (isTopEndBetweenViewport) {
      position.value = 'sticky'
      top.value = topPositionAtWhichElementBecomesStickyFromTop
    } else if (isBottomEndBetweenViewport) {
      position.value = 'relative'
      top.value = topDistanceOfElementRelativeToPageTop - offset
    }
  } else if (isScrollingDown) {
    if (isTopEndBetweenViewport) {
      position.value = 'relative'
      top.value = topDistanceOfElementRelativeToPageTop - offset
    } else if (isBottomEndBetweenViewport) {
      position.value = 'sticky'
      top.value = topDistanceAtWhichElementBecomesStickyFromBottom
    }
  }
  prevScrollTop = scrollYOffset;
};

onMounted(()=>{
  window.addEventListener('scroll', scrollHandler);
  offset = Math.ceil(stickySidebarEl.value.offsetTop);
})

onUnmounted(()=>{
  window.removeEventListener('scroll', scrollHandler)
})
</script>
<template>
  <aside
      ref="stickySidebarEl"
      class="w-[350px] self-start"
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