<script setup>
import {ref} from 'vue';

const activeTab = ref('for-you');
function openTab(tabName){
  activeTab.value = tabName
}

</script>

<template>
    <h2>Home Page</h2>
    <!-- Tab Links -->
    <div class="overflow-hidden border border-[#ccc] bg-[#f1f1f1]">
      <button
          class="bg-inherit float-left border-none outline-0 cursor-pointer py-[14px] px-4 transition-colors hover:bg-[#ddd] active:bg-[#ccc]"
          :class="{
            'active': activeTab === 'for-you'
          }"
          @click="openTab('for-you')"
      >
        For your
      </button>
      <button
          class="bg-inherit float-left border-none outline-0 cursor-pointer py-[14px] px-4 transition-colors hover:bg-[#ddd] active:bg-[#ccc]"
          :class="{
            'active': activeTab === 'following'
          }"
          @click="openTab('following')"
      >
        Following
      </button>
    </div>
    <!-- Tab Contents-->
    <div id="for-you"
         class="py-1.5 px-3 border-t-0"
         :class="{
           'hidden': activeTab !== 'for-you'
         }"
    >
      <h3>For you section</h3>
    </div>

    <div
        id="following"
        class="py-1.5 px-3 border-t-0"
        :class="{
          'hidden': activeTab !== 'following'
        }"
    >
      <h3>Following section</h3>
    </div>
</template>

<style></style>