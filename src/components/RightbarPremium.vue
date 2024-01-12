<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <div class="mb-4 bg-[#16181c] border border-[#16181c] overflow-x-hidden overflow-y-hidden rounded-2xl">
    <div role="complementary" class="px-4 py-3 flex flex-col gap-2.5 items-start text-[#e7e9ea]">
      <div class="text-xl font-extrabold leading-6">
        Subscribe to Premium
      </div>
      <div class="leading-5 text-[15px]">
        Subscribe to unlock new features and if eligible, receive a share of ads revenue.
      </div>
      <RouterLink to="/">
        <BaseButton severity="primary">Subscribe</BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>