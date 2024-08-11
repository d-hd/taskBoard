import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const alert = reactive({
    type: '',
    title: '',
    text: ''
  })

  const closeAlert = () => {
    alert = {
      type: '',
      title: '',
      text: ''
    }
  }

  const showAlert = (type, title, text) => {
    alert.value = { type, title, text }
  }

  return { alert, closeAlert, showAlert }
})
