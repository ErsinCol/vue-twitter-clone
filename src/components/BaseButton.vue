<script setup>
defineProps({
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'large', 'small'].includes(value),
  },
  severity: {
    type: String,
    default: 'secondary',
    validator: (value) => ['primary', 'secondary', 'danger-outlined'].includes(value),
  }
});
</script>

<template>
    <button
        class="transition-colors select-none cursor-pointer text-center rounded-full font-bold"
        :class="{
            'min-h-9 min-w-9 px-4 text-[15px]': size === 'normal',
            'min-w-[52px] min-h-[52px] px-8 text-[17px]': size === 'large',
            'text-sm px-4 min-h-8 min-w-8' : size === 'small',
            'bg-[#1d9bf0] text-white hover:bg-[#1a8cd8]' : severity === 'primary',
            'text-[#0f1419] bg-[#eff3f4] hover:bg-[#dadedf]' : severity === 'secondary',
            'border-[#536471] hover:border-[#67070f] bg-transparent hover:bg-[#df212e1a] text-[#eff3f4] hover:text-[#df212e]': severity === 'danger-outlined'
        }">
        <slot></slot>
    </button>
</template>

<style scoped></style>