<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import LeftSidebarMenuMoreIcon from "@/assets/icons/leftSidebarMore.svg";
import MonetizationIcon from "@/assets/icons/monetization.svg";
import {ChevronDownIcon} from "@heroicons/vue/20/solid/index.js";
import {useModal} from "@/store/modal.js";
import {leftSidebarMenuMoreItems} from "@/helpers/leftSidebarMenuMoreItems.js";

const modal = useModal()
</script>

<template>
  <Popover class="relative">
    <PopoverButton>
      <div
          class="inline-flex items-center p-3 rounded-full transition-colors hover:bg-[color:var(--background-secondary)]">
        <LeftSidebarMenuMoreIcon class="w-[1.641rem] h-[1.641rem]"/>
        <div class="text-xl pr-4 pl-5">More</div>
      </div>
    </PopoverButton>
    <PopoverPanel
        class="absolute z-10 shadow-box bottom-0 -left-2 bg-[color:var(--background-primary)] max-h-[calc(100vh - 24.75px)] max-w-[384px] min-w-[318px] overflow-y-auto overflow-x-hidden rounded-xl flex flex-col">
      <RouterLink
          :to="{ name: 'Home' }"
          class="flex p-4 items-center text-left hover:bg-[color:var(--background-secondary)] transition-colors w-full"
      >
        <MonetizationIcon class="w-[1.5rem] h-[1.5rem] mr-[1.5rem]"/>
        <div class="text-xl flex-1 font-bold">Monetization</div>
      </RouterLink>
      <div role="separator" class="my-[2px] bg-[color:var(--background-secondary)] h-[1px] w-[89%] self-center"></div>
      <Disclosure v-slot="{ open }" v-for="(item,index) in leftSidebarMenuMoreItems" :key="index">
        <DisclosureButton
            class="flex p-4 cursor-pointer items-center justify-between text-left hover:bg-[color:var(--background-secondary)] transition-colors w-full">
          <span class="font-bold">{{ item.label }}</span>
          <ChevronDownIcon
              :class="{
                  'rotate-180 transform !text-[color:var(--color-primary)]': open,
                  'text-current': !open
              }"
              class="h-[1.172rem] ml-3 cursor-pointer"
          />
        </DisclosureButton>
        <DisclosurePanel class="w-full">
          <template v-for="(subItem, index) in item.panel" :key="index">

            <template v-if="subItem.path">
              <RouterLink
                  :to="subItem.path"
                  class="flex items-center hover:bg-[color:var(--background-secondary)] transition-colors p-3"
              >
                <component :is="subItem.icon" class="w-[1.172rem] h-[1.172rem] mr-3"/>
                <div class="flex-1 font-medium">{{ subItem.label }}</div>
              </RouterLink>
            </template>

            <template v-else>
              <button
                  @click="modal.setModal('appearance')"
                  class="w-full flex items-center hover:bg-[color:var(--background-secondary)] transition-colors p-3 text-left"
              >
                <component :is="subItem.icon" class="w-[1.172rem] h-[1.172rem] mr-3"/>
                <div class="flex-1 font-medium">{{ subItem.label }}</div>
              </button>
            </template>

          </template>

        </DisclosurePanel>
      </Disclosure>
    </PopoverPanel>
  </Popover>
</template>

<style scoped>

</style>