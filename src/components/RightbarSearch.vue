<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const query = ref("");
const input = ref(null);
const searchContainer = ref(null)
const isFocus = ref(false);
const clearQuery = () => {
  query.value = ""
  input.value.focus()
}

onClickOutside(searchContainer, () => isFocus.value = false)
</script>

<template>
  <div
      ref="searchContainer"
      class="min-h-[32px] h-[53px] group mb-4 sticky top-0 bg-[color:var(--background-primary)] z-10 border-y-4 border-transparent"
  >
    <label class="h-[43px] w-full flex items-center relative bg-[color:var(--background-third)] rounded-full border border-transparent focus-within:border-[color:var(--color-primary)] focus-within:bg-[color:var(--background-primary)]">
      <button class="pl-3">
        <svg viewBox="0 0 24 24"
             class="text-[color:var(--color-base-secondary)] min-w-8 h-[18.75px] group-focus-within:text-[color:var(--color-primary)]"
        >
          <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          />
        </svg>
      </button>
      <input
          ref="input"
          type="text"
          placeholder="Search"
          autocomplete="off"
          class="p-3 bg-transparent w-full outline-0 text-left flex-1 leading-5 text-[15px]"
          v-model="query"
          @focus="isFocus = true"
      />
      <button
          v-show="query && isFocus"
          class="mr-3 bg-[color:var(--color-primary)] transition-colors min-w-[22px] min-h-[22px] rounded-full flex items-center justify-center text-black"
          type="button"
          @click.stop="clearQuery"
      >
        <svg viewBox="0 0 15 15" class="w-2.5 h-2.5 font-bold text-[15px]">
          <path fill="currentColor" d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
        </svg>
      </button>
    </label>
    <div
        v-show="isFocus"
        class="absolute top-full w-full mt-0.5 bg-[color:var(--background-primary)] shadow-box rounded-lg max-h-[calc(80vh-53px)] min-h-[100px] overflow-y-auto"
    >
      <p class="p-3 pt-5 text-center text-[color:var(--color-base-secondary)] leading-5 text-[15px]">
        Try searching for people, lists, or keywords
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>