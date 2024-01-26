<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";
import SearchIcon from "@/assets/icons/search.svg";
import CancelIcon from "@/assets/icons/cancel.svg";

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
      class="min-h-[2rem] h-[3.313rem] group mb-4 sticky top-0 bg-[color:var(--background-primary)] z-10 border-y-4 border-transparent"
  >
    <label class="h-[2.688rem] w-full flex items-center relative bg-[color:var(--background-third)] rounded-full border border-transparent focus-within:border-[color:var(--color-primary)] focus-within:bg-[color:var(--background-primary)]">
      <button class="pl-3">
        <SearchIcon class="text-[color:var(--color-base-secondary)] h-[1.172rem] min-w-[2rem] group-focus-within:text-[color:var(--color-primary)]"/>
      </button>
      <input
          ref="input"
          type="text"
          placeholder="Search"
          autocomplete="off"
          class="p-3 bg-transparent w-full outline-0 text-left flex-1 leading-5"
          v-model="query"
          @focus="isFocus = true"
      />
      <button
          v-show="query && isFocus"
          class="mr-3 bg-[color:var(--color-primary)] transition-colors min-w-[22px] min-h-[22px] rounded-full flex items-center justify-center text-black"
          type="button"
          @click.stop="clearQuery"
      >
        <CancelIcon class="w-2.5 h-2.5 font-bold"/>
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