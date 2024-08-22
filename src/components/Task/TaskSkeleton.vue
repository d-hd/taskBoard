<script setup>
const props = defineProps({
  cardCount: {
    type: Number,
    desc: 'Количество отображаемых карточек-скелетонов',
    default: 1
  }
})
</script>

<template>
  <div class="taskSkeleton">
    <div 
      v-for="i in cardCount"
      :key="i"
      class="taskSkeleton__card" />
  </div>
</template>