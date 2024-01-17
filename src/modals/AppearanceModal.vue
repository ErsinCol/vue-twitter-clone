<script setup>
import {useAppearance} from "@/store/appearance.js";
import BaseButton from "@/components/BaseButton.vue";
import {colors} from "@/utils/consts.js";

const emit = defineEmits(['close']);

const appearance = useAppearance();

const setDefault = () => {
  appearance.$patch({
    name: 'default',
    backgroundColor: {
      primary: '#ffffff',
      secondary: '#f7f9f9',
      third: '#eff3f4',
      modal: '#00000066',
      rightBar: '#00000008'
    },
    color: {
      ...appearance.color,
      base: '#0f1419',
      baseSecondary: '#536471'
    },
    boxShadow: '0 0 15px rgba(101,119,134,0.2), 0 0 3px 1px rgba(101,119,134,0.15)',
  })
}

const setDim = () => {
  appearance.$patch({
    name: 'dim',
    backgroundColor: {
      primary: '#15202b',
      secondary: '#1e2732',
      third: '#263340',
      modal: '#5b708366'
    },
    color: {
      ...appearance.color,
      base: '#f7f9f9',
      baseSecondary: '#8b98a5'
    },
    boxShadow: 'rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px',
  })
}

const setLightsOut = () => {
  appearance.$patch({
    name:'lights-out',
    backgroundColor: {
      primary: '#000000',
      secondary: '#16181c',
      third: '#212327',
      modal: '#5b708366'
    },
    color: {
      ...appearance.color,
      base: '#e7e9ea',
      baseSecondary: '#71767b'
    },
    boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
  })
}

const setColor = (c) => {
  appearance.$patch({
    color: {
      ...appearance.color,
      primary: c.primary,
      secondary: c.secondary,
    }
  })
}
</script>

<template>
  <div>
    <h3 class="mt-8 mb-3 text-[23px] leading-7 font-extrabold text-center">Display</h3>
    <div class="p-8 pt-0">
      <p class="text-center text-[color:var(--color-base-secondary)] text-[15px] leading-5 mb-5">These settings affect all the X accounts on this browser.</p>
      <div class="mx-8 mb-4">
        <div class="border border-[color:var(--background-third)] px-4 py-3 flex gap-3 rounded-2xl">
          <img
              src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_x96.jpg"
              alt="x-image"
              class="w-10 h-10 rounded-full object-cover"
          >
          <div class="flex-1 flex flex-col">
            <div class="mb-0.5 leading-5 text-[15px] flex items-center">
              <div class="font-bold flex items-center">
                X
                <svg viewBox="0 0 22 22" class="w-[18.75px] h-[18.75px] text-[#1d9bf0] ml-0.5">
                  <path
                      fill="currentColor"
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  />
                </svg>
              </div>
              <div class="ml-1 flex items-center text-[color:var(--color-base-secondary)]">
                @X . 31d
              </div>
            </div>
            <div class="flex flex-col leading-5 text-[15px]">
              <div>At the heart of X are short messages called posts — just like this one — which can include photos, videos, links, text, hashtags, and mentions like</div>
              <a href="https://twitter.com/" target="_blank" class="text-[#1d9bf0] font-bold hover:underline">@X</a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Font size</h6>
        <div class="bg-[color:var(--background-secondary)] p-4 mb-3 rounded-2xl flex items-center gap-5">
          <div class="text-[13px]">Aa</div>
          <div class="h-1 flex-1 bg-[color:var(--color-secondary)] rounded-full">

          </div>
          <div class="text-[20px]">Aa</div>
        </div>
      </section>

      <section class="mb-3">
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Color</h6>
        <div class="bg-[color:var(--background-secondary)] py-2 rounded-2xl flex justify-around" role="radiogroup">
          <div
              v-for="(color, index) in colors"
              :key="index"
              role="radio"
              class="py-1 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
              :style="{ 'background-color': color.primary }"
              @click="setColor(color)"
          >
            <svg v-if="color.primary === appearance.color.primary" viewBox="0 0 24 24" class="w-[25px] h-[25px] text-white">
              <path
                  fill="currentColor"
                  d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section class="mb-3">
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Background</h6>
        <div class="py-2 px-4 grid grid-cols-3 gap-2 bg-[color:var(--background-secondary)] rounded-2xl" role="radiogroup">
          <div
              role="radio"
              class="group pr-3 pl-2 h-16 inline-flex items-center justify-center gap-1.5 bg-white text-[#011449] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'default'
            }"
              @click="setDefault"
          >
            <div class="w-10 h-10 rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-5 h-5 border-2 rounded-[32px] border-[#b9cad3] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'default'
                }"
              >
                <svg v-show="appearance.name === 'default'" viewBox="0 0 24 24" class="h-[18px] w-[18px]">
                  <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                  />
                </svg>
              </div>
            </div>
            Default
          </div>
          <div
              role="radio"
              class="group pr-3 pl-2 h-16 inline-flex items-center justify-center gap-1.5 bg-[#15202b] text-[#f7f9f9] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'dim'
            }"
              @click="setDim"
          >
            <div class="w-10 h-10 rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-5 h-5 border-2 rounded-[32px] border-[#5c6e7e] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'dim'
                }"
              >
                <svg v-show="appearance.name === 'dim'" viewBox="0 0 24 24" class="h-[18px] w-[18px]">
                  <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                  />
                </svg>
              </div>
            </div>
            Dim
          </div>
          <div
              role="radio"
              class="group pr-3 pl-2 h-16 flex items-center justify-center gap-1.5 bg-black text-[#e7e9ea] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'lights-out'
            }"
              @click="setLightsOut"
          >
            <div class="w-10 h-10 rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-5 h-5 border-2 rounded-[32px] border-[#3e4144] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'lights-out'
                }"
              >
                <svg v-show="appearance.name === 'lights-out'" viewBox="0 0 24 24" class="h-[18px] w-[18px]">
                  <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                  />
                </svg>
              </div>
            </div>
            Lights out
          </div>
        </div>
      </section>

      <div class="flex items-center justify-center">
        <BaseButton
            severity="primary"
            @click="emit('close')"
        >
          Bitti
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>