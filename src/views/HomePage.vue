<script setup>
import TheHeader from "@/components/TheHeader.vue";
import BaseTab from "@/components/BaseTab.vue";
import TabLinks from "@/components/TabLinks.vue";
import TabLinkItem from "@/components/TabLinkItem.vue";
import TabContent from "@/components/TabContent.vue";
import TheForYou from "@/components/TheForYou.vue";
</script>

<template>
  <BaseTab v-slot="slotProps" initialTab="for-you">
    <TheHeader title="Home">
      <!-- Tab Links -->
      <TabLinks>
        <TabLinkItem id="for-you">For you</TabLinkItem>
        <TabLinkItem id="following">Following</TabLinkItem>
      </TabLinks>
    </TheHeader>
    <!-- Tab Contents -->
    <TabContent v-if="slotProps.activeTab === 'for-you'">
      <TheForYou />
    </TabContent>
    <TabContent v-if="slotProps.activeTab === 'following'">
      Following section
    </TabContent>
  </BaseTab>
</template>

<style></style>