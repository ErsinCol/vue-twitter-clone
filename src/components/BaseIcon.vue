<script setup>
import {defineAsyncComponent} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const IconComponent = defineAsyncComponent(() => import(`@/assets/${props.name}.svg?component`))
</script>

<template>
  <IconComponent />
</template>

<style scoped>

</style>