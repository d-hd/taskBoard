<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TaskList from '@/components/Task/TaskList.vue'
</script>

<template>
  <h1
    v-if="!tasks"
    class="text-white center">
    Задач пока нет
  </h1>
  <TaskList />
</template>
