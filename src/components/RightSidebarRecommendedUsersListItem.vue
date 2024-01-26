<script setup>
import {ref} from "vue";
import {vElementHover} from '@vueuse/components'
import BaseButton from "@/components/BaseButton.vue";
import VerifiedAccountIcon from "@/assets/icons/verifiedAccount.svg";

defineProps({
  user: {
    type: Object,
    required: true
  }
})

const isFollow = ref(false);
const isHovered = ref(false);

function onHover(state) {
  isHovered.value = state
}
</script>

<template>
  <div class="flex items-center">
    <img :src="user.avatar" :alt="user.username" class="w-10 h-10 mr-3 rounded-full"/>
    <div class="grow flex items-center justify-between">
      <div class="flex flex-col">
        <div class="flex items-center">
          <span class="truncate leading-5 font-bold text-[15px]">
            {{ user.fullname }}
          </span>
          <VerifiedAccountIcon v-if="user.verified" class="ml-2 max-w-5 max-h-5 h-[18.75px] w-[18.75px] text-[#1d9bf0]"/>
        </div>
        <div
            class="text-[color:var(--color-base-secondary)] leading-5 max-w-full text-[15px whitespace-nowrap] overflow-y-hidden overflow-x-hidden">
          @{{ user.username }}
        </div>
      </div>
      <BaseButton
          size="small"
          :severity="isFollow ? 'danger-outlined': 'secondary'"
          @click="isFollow = !isFollow"
          v-element-hover="onHover"
      >
        <div v-if="!isFollow">Follow</div>
        <div v-if="isFollow">{{ isHovered ? 'Unfollow' : 'Following' }}</div>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>

</style>