import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alertStore.js'
import { useRouter } from 'vue-router'
import errorMessages from '@/constants/errorMessages.js'

export const useTaskStore = defineStore('task', () => {
  const alertStore = useAlertStore()
  const router = useRouter()
  const isLoading = ref(false)

  // Creating a new task
  async function setTask(task) {
    const { titleValue, tagValue, descriptionValue, deadlineValue } = task

    if (!titleValue || !descriptionValue || !deadlineValue || !tagValue) {
      alertStore.showAlert('warning', errorMessages.SUCCESS, errorMessages.FIELDS_REQUIRE)
      return
    }

    const newTask = {
      title: titleValue.value,
      description: descriptionValue.value,
      deadline: deadlineValue.value,
      dateCreated: new Date().toLocaleDateString('ru-RU'),
      status: 'inbox',
      tags: tagValue.value
    }

    try {
      isLoading.value = true

      const respons = await fetch(import.meta.env.VITE_APP_FIREBASE_DATABASE_URL, {
        method: 'POST',
        body: JSON.stringify(newTask)
      })

      if (!respons || respons.status !== 200) {
        alertStore.showAlert('danger', errorMessages.ERROR, errorMessages.UPLOAD_FAILED)

        isLoading.value = false
        return
      }
      isLoading.value = false

      router.push('/tasks')

      alertStore.showAlert('primary', errorMessages.SUCCESS, errorMessages.TASK_CREATED)
    } catch (error) {
      alertStore.showAlert('danger', errorMessages.ERROR, errorMessages.UPLOAD_FAILED)

      isLoading.value = false
    }
  }

  // Getting all tasks as an array
  async function getTaskList() {
    try {
      isLoading.value = true

      const respons = await fetch(import.meta.env.VITE_APP_FIREBASE_DATABASE_URL)

      if (!respons || respons.status !== 200) {
        alertStore.showAlert('danger', errorMessages.ERROR, errorMessages.UPLOAD_FAILED)

        isLoading.value = false
        return
      }

      const data = await respons.json()

      if (data === null) {
        isLoading.value = false
        return null
      }

      await new Promise((resolve) => setTimeout(resolve, 3000))

      const arrayDataWithIds = Object.entries(data).map(([id, value]) => ({
        id,
        ...value
      }))

      isLoading.value = false

      return arrayDataWithIds
    } catch (error) {
      alertStore.showAlert('danger', errorMessages.ERROR, errorMessages.UPLOAD_FAILED)

      isLoading.value = false
    }
  }

  return { getTaskList, setTask, isLoading }
})
