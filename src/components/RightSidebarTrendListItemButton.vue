<script setup>
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import MoreHorizontalIcon from "@/assets/icons/moreHorizontal.svg";
import BadFaceIcon from "@/assets/icons/badFace.svg";
</script>

<template>
  <Popover>
    <PopoverButton
        class="w-[34.75px] h-[34.75px] flex items-center justify-center rounded-full hover:bg-[#1d9bf01a] text-[color:var(--color-base-secondary)] hover:text-[#1d9bf0] absolute -top-1 right-0 ml-5 leading-5 transition-colors text-[15px]"
    >
      <MoreHorizontalIcon class="w-[1.172rem] h-[1.172rem]"/>
    </PopoverButton>
    <PopoverPanel role="menu" class="absolute top-0 right-0 z-10 shadow-box max-w-[24rem] bg-[color:var(--background-primary)] rounded-xl overflow-x-hidden overflow-y-hidden">
      <div role="menuitem" class="px-4 py-3 w-full flex transition-colors hover:bg-[color:var(--background-third)]">
        <div class="pr-3">
          <BadFaceIcon class="w-[1.172rem] h-[1.172rem]"/>
        </div>
        <div class="flex-1 leading-5 font-bold text-[15px]">
          Not interested in this
        </div>
      </div>
      <div role="menuitem" class="px-4 py-3 w-full flex transition-colors hover:bg-[color:var(--background-third)]">
        <div class="pr-3">
          <BadFaceIcon class="w-[1.172rem] h-[1.172rem]"/>
        </div>
        <div class="flex-1 leading-5 font-bold text-[15px]">
          This trend is harmful or spammy
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<style scoped>

</style>