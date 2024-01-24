<script setup>
defineProps({
  photos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div v-if='photos.length === 1' class="mt-3">
    <img :src="photos[0]" alt="" class="max-h-[510px] border border-[color:var(--background-third)] rounded-2xl object-cover">
  </div>
  <div v-else-if="photos.length === 2" class="mt-3 h-[288px] overflow-hidden grid grid-cols-2 gap-0.5 rounded-2xl border border-[color:var(--background-third)]">
    <img :src="photos[0]" alt="" class="h-full w-full object-cover">
    <img :src="photos[1]" alt="" class="h-full w-full object-cover">
  </div>
  <div v-else-if="photos.length === 3" class="mt-3 h-[288px] overflow-hidden grid grid-cols-2 gap-0.5 rounded-2xl border border-[color:var(--background-third)]">
    <img :src="photos[0]" alt="" class="object-cover h-full w-full">
    <div class="h-full flex flex-col gap-0.5">
      <div class="flex-1 flex-shrink-0 relative">
        <img :src="photos[1]" alt="" class="h-full w-full absolute inset-0 flex-shrink-0 object-cover">
      </div>
      <div class="flex-1 flex-shrink-0 relative">
        <img :src="photos[2]" alt="" class="h-full w-full absolute inset-0 flex-shrink-0 object-cover">
      </div>
    </div>
  </div>
  <div v-else-if="photos.length === 4" class="mt-3 h-[286px] overflow-hidden grid grid-cols-2 grid-rows-2 gap-0.5 rounded-2xl border border-[color:var(--background-third)]">
    <img :src="photos[0]" alt="" class="h-full w-full object-cover">
    <img :src="photos[1]" alt="" class="h-full w-full object-cover">
    <img :src="photos[2]" alt="" class="h-full w-full object-cover">
    <img :src="photos[3]" alt="" class="h-full w-full object-cover">
  </div>
</template>

<style scoped>

</style>