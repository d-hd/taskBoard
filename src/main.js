import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppButton from './components/Inputs/AppButton.vue'
import AppStatus from '@/components/AppStatus.vue'

const app = createApp(App)

app.component('AppButton', AppButton)
app.component('AppStatus', AppStatus)
app.use(createPinia())
app.use(router)

app.mount('#app')
