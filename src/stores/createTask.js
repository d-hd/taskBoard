import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCreateTaskStore = defineStore('createTask', () => {
  const task = reactive('')

  function setTask(value) {
    task = value
  }

  return { task, setTask }
})
