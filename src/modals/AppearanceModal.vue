<script setup>
import {useAppearance} from "@/store/appearance.js";
import BaseButton from "@/components/BaseButton.vue";
import {colors, fontSizes} from "@/helpers/consts.js";
import {watch, nextTick, ref, onMounted} from "vue";
import VerifiedAccountIcon from "@/assets/icons/verifiedAccount.svg";
import CheckIcon from "@/assets/icons/check.svg";

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
    name: 'lights-out',
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

const fontSizePercent = ref(0)

onMounted(()=>{
  fontSizePercent.value = document.querySelector('.active-font-size').offsetLeft + 3;
})

watch(
    () => appearance.fontSize
    , async(newValue, oldValue) => {
      await nextTick()
      fontSizePercent.value = document.querySelector('.active-font-size').offsetLeft + 3
    })

const setFontSize = (size) => {
  appearance.$patch({
    fontSize: size
  })
}
</script>

<template>
  <div>
    <h3 class="mt-8 mb-3 text-[1.438rem] leading-7 font-extrabold text-center">Display</h3>
    <div class="p-8 pt-0">
      <p class="text-center text-[color:var(--color-base-secondary)] text-[0.938rem] leading-5 mb-5">These settings affect
        all the X accounts on this browser.</p>
      <div class="mx-8 mb-4">
        <div class="border border-[color:var(--background-third)] px-4 py-3 flex gap-3 rounded-2xl">
          <img
              src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_x96.jpg"
              alt="x-image"
              class="w-10 h-10 rounded-full object-cover"
          >
          <div class="flex-1 flex flex-col">
            <div class="mb-0.5 leading-5 flex items-center">
              <div class="font-bold flex items-center">
                X
                <VerifiedAccountIcon class="w-[18.75px] h-[18.75px] text-[#1d9bf0] ml-0.5"/>
              </div>
              <div class="ml-1 flex items-center text-[color:var(--color-base-secondary)]">
                @X . 31d
              </div>
            </div>
            <div class="flex flex-col leading-5">
              <div>At the heart of X are short messages called posts — just like this one — which can include photos,
                videos, links, text, hashtags, and mentions like
              </div>
              <a href="https://twitter.com/" target="_blank" class="text-[#1d9bf0] font-bold hover:underline">@X</a>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Font size</h6>
        <div class="bg-[color:var(--background-secondary)] p-4 mb-3 rounded-2xl flex items-center gap-5">
          <div class="text-[0.813rem]">Aa</div>
          <div class="h-1 flex-1 bg-[color:var(--color-secondary)] rounded-full relative">
            <div
                class="absolute top-0 left-0 rounded-full bg-[color:var(--color-primary)] h-full"
                :style="{width : fontSizePercent + 'px'}"
            />
            <div class="flex justify-between absolute w-[calc(100%+16px)] -top-3.5 -left-[8px]">
              <button
                  v-for="(fs, index) in fontSizes"
                  :key="index"
                  class="before:absolute before:inset-0 before:rounded-full before:hover:bg-[color:var(--color-primary)] before:opacity-10 w-8 h-8 rounded-full flex items-center justify-center relative"
                  :class="{
                'active-font-size' : fs === appearance.fontSize
              }"
                  type="button"
                  @click="setFontSize(fs)"
                  :data-index="index"
              >
                <div
                    class="w-3 h-3 rounded-full bg-[color:var(--color-secondary)]"
                    :class="{
                    '!w-4 !h-4' : fs === appearance.fontSize,
                    '!bg-[color:var(--color-primary)]' : fs <= appearance.fontSize
                  }"
                />
              </button>
            </div>
          </div>
          <div class="text-[1.25rem]">Aa</div>
        </div>
      </section>

      <section class="mb-3">
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Color</h6>
        <div class="bg-[color:var(--background-secondary)] py-2 rounded-2xl flex justify-around" role="radiogroup">
          <div
              v-for="(color, index) in colors"
              :key="index"
              role="radio"
              class="py-1 w-[40px] h-[40px] rounded-full cursor-pointer flex items-center justify-center"
              :style="{ 'background-color': color.primary }"
              @click="setColor(color)"
          >
            <CheckIcon v-if="color.primary === appearance.color.primary" class="w-[25px] h-[25px] text-white" />
          </div>
        </div>
      </section>

      <section class="mb-3">
        <h6 class="text-[color:var(--color-base-secondary)] mb-1 font-bold leading-5 text-[13px]">Background</h6>
        <div class="py-2 px-4 grid grid-cols-3 gap-2 bg-[color:var(--background-secondary)] rounded-2xl"
             role="radiogroup">
          <div
              role="radio"
              class="group pr-3 pl-2 h-[62px] inline-flex items-center justify-center gap-1.5 bg-white text-[#011449] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'default'
            }"
              @click="setDefault"
          >
            <div
                class="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-[20px] h-[20px] border-[2px] rounded-[32px] border-[#b9cad3] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'default'
                }"
              >
                <CheckIcon v-show="appearance.name === 'default'" class="h-[18px] w-[18px]"/>
              </div>
            </div>
            <div class="truncate">Default</div>
          </div>
          <div
              role="radio"
              class="group pr-3 pl-2 h-[62px] inline-flex items-center justify-center gap-1.5 bg-[#15202b] text-[#f7f9f9] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'dim'
            }"
              @click="setDim"
          >
            <div
                class="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-[20px] h-[20px] border-[2px] rounded-[32px] border-[#5c6e7e] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'dim'
                }"
              >
                <CheckIcon v-show="appearance.name === 'dim'" class="h-[18px] w-[18px]"/>
              </div>
            </div>
            <div class="truncate">Dim</div>
          </div>
          <div
              role="radio"
              class="group pr-3 pl-2 h-[62px] flex items-center justify-center gap-1.5 bg-black text-[#e7e9ea] rounded border border-white/10 cursor-pointer font-bold"
              :class="{
              '!border-[color:var(--color-primary)] !border-2' : appearance.name === 'lights-out'
            }"
              @click="setLightsOut"
          >
            <div
                class="w-[40px] h-[40px] rounded-full flex-shrink-0 group-hover:bg-[#8b98a11a] flex items-center justify-center">
              <div
                  class="w-[20px] h-[20px] border-[2px] rounded-[32px] border-[#3e4144] bg-transparent flex items-center justify-center"
                  :class="{
                  '!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] !text-white' : appearance.name === 'lights-out'
                }"
              >
                <CheckIcon v-show="appearance.name === 'lights-out'" class="h-[18px] w-[18px]"/>
              </div>
            </div>
            <div class="truncate">Lights out</div>
          </div>
        </div>
      </section>

      <div class="flex items-center justify-center pt-4">
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