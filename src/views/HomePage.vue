<script setup>
import {ref, provide} from 'vue';
import TheHeader from "@/components/TheHeader.vue";
import BaseTab from "@/components/BaseTab.vue";
import TabLinks from "@/components/TabLinks.vue";
import TabLinkItem from "@/components/TabLinkItem.vue";
import TabContent from "@/components/TabContent.vue";

const activeTab = ref('for-you');

function openTab(tabName) {
  activeTab.value = tabName
}

provide('activeTab', {
  activeTab,
  openTab,
})
</script>

<template>
  <BaseTab >
    <TheHeader title="Home">
      <!-- Tab Links -->
      <TabLinks>
        <TabLinkItem id="for-you">For you</TabLinkItem>
        <TabLinkItem id="following">Following</TabLinkItem>
      </TabLinks>
    </TheHeader>
    <!-- Tab Contents -->
    <TabContent v-if="activeTab === 'for-you'">
      For you section
    </TabContent>
    <TabContent v-if="activeTab === 'following'">
      Following section
    </TabContent>
  </BaseTab>
</template>

<style></style>