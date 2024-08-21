<script setup>
import TaskCard from '@/components/Task/TaskCard.vue'
import { useTaskStore  } from '@/stores/taskStore.js'
import { onMounted, ref } from 'vue'

const { getTaskList } = useTaskStore()
const taskList = ref([])

onMounted(async () => {
  taskList.value = await getTaskList()
})

</script>

<template>
  <h3 class="text-white">
    Всего активных задач: 0
  </h3>
  <TaskCard
    v-for="(task, index) in taskList"
    :key="index" />
</template>