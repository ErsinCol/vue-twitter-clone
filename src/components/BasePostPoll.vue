<script setup>
import VoteCheckIcon from "@/assets/icons/voteCheck.svg";
defineProps({
  poll: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['vote'])

function handleVote(answer){
  emit('vote', answer)
}
</script>

<template>
  <div class="mt-3 grid gap-1">
    <template v-for="answer in poll.answers" :key="answer.id">
      <button
          v-if="!poll.voted"
          class="h-8 border border-[color:var(--color-primary)] rounded-full font-bold text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-alpha)] transition-colors"
          @click="handleVote(answer)"
      >
        {{ answer.text }}
      </button>
      <div
          v-else
          class="h-8 flex items-center justify-between relative overflow-hidden rounded-md px-2 z-[1]"
      >
        <div
          :style="{width: ((answer.vote / poll.votes) * 100) + '%'}"
          class="absolute top-0 left-0 h-full bg-[color:var(--color-base-secondary)] opacity-50 z-[-1]"
        />
        <div class="flex items-center gap-0.5">
          {{answer.text}}
          <VoteCheckIcon  v-if="answer.voted"  class="h-[1.25rem]"/>
        </div>
        <div>{{ ((answer.vote / poll.votes)* 100).toFixed(1) + '%' }}</div>
      </div>
    </template>
    <div class="text-[color:var(--color-base-secondary)] mt-2">
      {{poll.votes}} oy · 6 gün kaldı
    </div>
  </div>
</template>

<style scoped>

</style>