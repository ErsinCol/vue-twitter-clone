<script setup>
import {Popover, PopoverPanel, PopoverButton} from "@headlessui/vue";
</script>

<template>
    <nav class="mb-4 flex flex-wrap px-4" aria-label="Footer" role="navigation">
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Terms of Service
      </RouterLink>
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Privacy Policy
      </RouterLink>
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Cookie Policy
      </RouterLink>
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Imprint
      </RouterLink>
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Accessibility
      </RouterLink>
      <RouterLink to="/" class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 hover:underline whitespace-nowrap">
        Ads info
      </RouterLink>
      <Popover class="relative leading-4">
        <PopoverButton class="my-0.5 pr-3 inline-flex items-center outline-0 text-[#71767b] text-[13px] leading-4 hover:underline">
          More
          <svg viewBox="0 0 24 24" class="h-[1em] px-0.5">
            <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </PopoverButton>
        <PopoverPanel class="flex flex-col absolute bottom-0 right-0 z-10 shadow-more max-h-[calc(100vh-132.164px)] max-w-[384px] w-[176px] bg-black overflow-y-auto overflow-x-hidden rounded-xl">
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[#16181c] whitespace-nowrap">
            About
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[#16181c] whitespace-nowrap">
            Download the X app
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[#16181c] whitespace-nowrap">
            Status
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[#16181c] whitespace-nowrap">
            X for Business
          </RouterLink>
          <RouterLink to="/" class="transition-colors px-4 py-3 hover:bg-[#16181c] whitespace-nowrap">
            Developers
          </RouterLink>
        </PopoverPanel>
      </Popover>
      <div class="text-[#71767b] text-[13px] pr-3 leading-4 my-0.5 whitespace-nowrap">
        &copy; 2024 ErsinCol
      </div>
    </nav>
</template>

<style scoped>

</style>