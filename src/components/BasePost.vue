<script setup>
import {numberFormatter} from "../helpers/numberFormatter.js";
import BasePostPhoto from "@/components/BasePostPhoto.vue";
import BasePostPoll from "@/components/BasePostPoll.vue";
import VerifiedAccountIcon from "@/assets/icons/verifiedAccount.svg";
import IOSShareIcon from "@/assets/icons/iosShare.svg";
import {stats} from "@/helpers/stats.js";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
})

function handleVote(answer){
  props.post.poll = {
    ...props.post.poll,
    voted: true,
    votes: props.post.poll.votes + 1,
    answers: props.post.poll.answers.map(a=> {
      if(a.id === answer.id) {
        return {
          ...a,
          vote: a.vote + 1,
          voted: true
        }
      }
      return a
    })
  }
}
</script>

<template>
  <div class="px-4 py-3 gap-3 border-b border-[color:var(--background-third)] flex relative before:inset-0 before:absolute before:z-[-1] before:hover:bg-[color:var(--background-secondary)] before:transition-colors before:opacity-50">
    <img
        :src="post.account.avatar"
        :alt="post.account.username"
        class="w-10 h-10 rounded-full object-cover"
    >
    <div class="flex-1">
      <header class="leading-5 flex items-center gap-2 mb-0.5">
          <a
              href="#"
              class="hover:underline flex items-center font-bold"
          >
            {{post.account.fullName}}
            <VerifiedAccountIcon v-if="post.account.verified" class="text-[#1d9bf0] w-[1.172rem] h-[1.172rem] ml-0.5"/>
          </a>
          <div class="text-[color:var(--color-base-secondary)] flex items-center gap-1.5">
            <div>@{{post.account.username}}</div>
            <div class="w-0.5 h-0.5 rounded-full bg-[color:var(--color-base-secondary)]"></div>
            <div>17s</div>
          </div>
      </header>
      <div>
        <div v-html="post.content.replace(/\n/g, '<br />')"></div>

        <BasePostPhoto v-if="post.type === 'photo'" :photos="post.photos"/>

        <BasePostPoll v-if="post.type === 'poll'" :poll="post.poll" @vote="handleVote"/>

        <div class="flex justify-between -ml-1.5 mt-1.5">
          <div
              v-for="(stat, index) in stats"
              :key="index"
              class="group flex items-center gap-px cursor-pointer"
          >
            <div class="w-[2.172rem] h-[2.172rem] flex items-center justify-center text-[color:var(--color-base-secondary)] group-hover:bg-[#1d9bf01a] rounded-full group-hover:text-[#1d9bf0] transition-colors">
              <component :is="stat.icon" class="w-[1.172rem] h-[1.172rem]"/>
            </div>
            <span class="text-[0.813rem] text-[color:var(--color-base-secondary)] group-hover:text-[#1d9bf0] transition-colors">{{numberFormatter(post.stats[stat.name])}}</span>
          </div>

          <div class="w-[2.172rem] h-[2.172rem] transition-colors flex items-center justify-center cursor-pointer text-[color:var(--color-base-secondary)] hover:bg-[#1d9bf01a] rounded-full hover:text-[#1d9bf0]">
            <IOSShareIcon class="w-[1.172rem] h-[1.172rem]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>