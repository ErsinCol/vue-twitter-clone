<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    size: {
        type: String,
        required: true,
        default: 'normal',
    }
});
</script>

<template>
    <button
        class="border-black bg-[#1d9bf0] hover:bg-[#1a8cd8] transition-colors select-none cursor-pointer border text-center rounded-full font-bold text-white w-full"
        :class="{
            'min-h-9 min-w-9 px-4 text-[15px]': size === 'normal',
            'min-w-[52px] min-h-[52px] px-8 text-[17px]': size === 'large'
        }">
        <slot></slot>
    </button>
</template>

<style scoped></style>