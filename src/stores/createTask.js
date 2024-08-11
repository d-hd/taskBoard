import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert.js'
import { useRouter } from 'vue-router'

export const useCreateTaskStore = defineStore('createTask', () => {
  const alertStore = useAlertStore()
  const router = useRouter()

  async function setTask(task) {
    console.log(task)
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
      const respons = await fetch(
        'https://task-board-b30d0-default-rtdb.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify(newTask)
        }
      )

      if (!respons || respons.status !== 200) {
        alertStore.showAlert(
          'danger',
          'Ошибка',
          'Данные не были загружены на сервер. Попробуйте позже или обратитесь к администратору.'
        )
        return
      }
      console.log(respons)
      router.push('/tasks')

      alertStore.showAlert('primary', 'Успешно', 'Задача создана')
    } catch (error) {
      alertStore.showAlert(
        'danger',
        'Ошибка',
        'Данные не были загружены на сервер. Попробуйте позже или обратитесь к администратору.'
      )
    }
  }

  return { setTask }
})
