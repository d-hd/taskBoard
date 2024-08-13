import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert.js'
import { useRouter } from 'vue-router'

export const useCreateTaskStore = defineStore('createTask', () => {
  const alertStore = useAlertStore()
  const router = useRouter()
  const isLoading = ref(false)

  async function setTask(task) {
    const { titleValue, tagValue, descriptionValue, deadlineValue } = task

    if (!titleValue || !descriptionValue || !deadlineValue || !tagValue) {
      alertStore.showAlert('warning', 'Предупреждение', 'Пожалуйста, заполните все поля.')
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

      const respons = await fetch('https://task-board-137e2-default-rtdb.firebaseio.com/', {
        method: 'POST',
        body: JSON.stringify(newTask)
      })

      await new Promise((resolve) => setTimeout(resolve, 5000))

      if (!respons || respons.status !== 200) {
        alertStore.showAlert(
          'danger',
          'Ошибка',
          'Данные не были загружены на сервер. Попробуйте позже или обратитесь к администратору.'
        )

        isLoading.value = false
        return
      }
      isLoading.value = false

      router.push('/tasks')

      alertStore.showAlert('primary', 'Успешно', 'Задача создана')
    } catch (error) {
      alertStore.showAlert(
        'danger',
        'Ошибка',
        'Данные не были загружены на сервер. Попробуйте позже или обратитесь к администратору.'
      )

      isLoading.value = false
    }
  }

  return { setTask, isLoading }
})
