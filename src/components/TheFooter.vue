<script setup>
import {Popover, PopoverPanel, PopoverButton} from "@headlessui/vue";
import MoreHorizontalIcon from "@/assets/icons/moreHorizontal.svg";
</script>

<template>
    <nav class="mb-4 flex flex-wrap px-4 text-[0.813rem]" aria-label="Footer" role="navigation">
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Terms of Service
      </RouterLink>
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Privacy Policy
      </RouterLink>
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Cookie Policy
      </RouterLink>
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Imprint
      </RouterLink>
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Accessibility
      </RouterLink>
      <RouterLink to="/" class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Ads info
      </RouterLink>
      <Popover class="relative leading-4">
        <PopoverButton class="my-0.5 pr-3 inline-flex items-center outline-0 text-[color:var(--color-base-secondary)] leading-4 hover:underline">
          More
          <MoreHorizontalIcon class="h-[1em] px-0.5"/>
        </PopoverButton>
        <PopoverPanel class="flex flex-col absolute bottom-0 right-0 z-10 shadow-box max-h-[calc(100vh-132.164px)] max-w-[24rem] w-[9.375rem] bg-[color:var(--background-primary)] overflow-y-auto overflow-x-hidden rounded-xl">
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[color:var(--background-secondary)] whitespace-nowrap">
            About
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[color:var(--background-secondary)] whitespace-nowrap">
            Download the X app
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[color:var(--background-secondary)] whitespace-nowrap">
            Status
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[color:var(--background-secondary)] whitespace-nowrap">
            X for Business
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[color:var(--background-secondary)] whitespace-nowrap">
            Developers
          </RouterLink>
        </PopoverPanel>
      </Popover>
      <div class="text-[color:var(--color-base-secondary)] pr-3 leading-4 my-0.5 whitespace-nowrap">
        &copy; 2024 ErsinCol
      </div>
    </nav>
</template>

<style scoped>

</style>