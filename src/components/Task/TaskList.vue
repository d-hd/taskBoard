<script setup>
import TaskCard from '@/components/Task/TaskCard.vue'
import { useTaskStore  } from '@/stores/taskStore.js'
import { onMounted, ref, computed } from 'vue'

const taskListStore = useTaskStore()
const { getTaskList } = taskListStore
const taskList = ref([])

const isLoading = computed(() => taskListStore.isLoading)

onMounted(async () => {
  taskList.value = await getTaskList()
})
</script>

<template>
  <div class="taskList">
    <template v-if="!isLoading">
      <h1
        v-if="!taskList.length"
        class="text-white center">
        Задач пока нет
      </h1>
      <h3
        v-else
        class="text-white">
        Всего активных задач: 0
      </h3>
      <TaskCard
        v-for="(task, index) in taskList"
        :key="index"
        v-bind="task" />
    </template>
  </div>
</template>