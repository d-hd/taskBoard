import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const alert = reactive({
    type: '',
    title: '',
    text: ''
  })

  const closeAlert = () => {
    alert.type = ''
    alert.title = ''
    alert.text = ''
  }

  const showAlert = (type, title, text) => {
    console.log('showAlert', type, title, text)
    alert.type = type
    alert.title = title
    alert.text = text
  }

  return { alert, closeAlert, showAlert }
})
