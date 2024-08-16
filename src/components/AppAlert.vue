<script setup>
import AppButton from '@/components/Inputs/AppButton.vue'
import { useAlertStore } from '@/stores/alert.js'
import { watch, ref, onBeforeUnmount, computed  } from 'vue'

const { alert, closeAlert } = useAlertStore()
const defaultTimeToShow = 10
const timer = ref(defaultTimeToShow)
let interval = null

const startTimer = () => {
  timer.value = defaultTimeToShow

  interval = setInterval(() => {
    timer.value -= 0.1
    if (timer.value <= 0) {
      clearInterval(interval)
      closeAlert()
    }
  }, 100)
}

const getProgressWidth = computed(() => (timer.value / defaultTimeToShow) * 100)

watch(
  alert, (newValue) => {
    if (newValue.text) {
      startTimer()
    }
  },
  { deep: true }
)

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div 
    v-if="alert.text"
    class="alert"
    :class="alert.type">
    <h3 class="alert__title">
      {{ alert.title }}
    </h3>
    <p class="alert__text">
      {{ alert.text }}
    </p>
    <AppButton
      :color="alert.type"
      @click="closeAlert">
      Закрыть
    </AppButton>
    <div class="alert__timer">
      <div
        class="alert__progressBar"
        :class="alert.type"
        :style="{ width: getProgressWidth + '%' }" />
    </div>
  </div>
</template>

<style scoped>
.alert {
  width: 400px;
  padding: 10px 15px;
  border-radius: 15px;
  border-style: solid;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 10;
  border: 1px solid var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 15px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7); /* Добавлено для улучшения читаемости текста */
}

.alert.primary {
  border-color: var(--color-primary);
}

.alert.danger {
  border-color: var(--color-error);
}

.alert.warning {
  border-color: var(--color-warning);
}

.alert__title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: -0.4rem;
  color: var(--main-black);
}

.alert__text {
  color: var(--main-black);
  line-height: 1.7;
}

.alert__timer {
  width: 100%;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.alert__progressBar {
  height: 100%;
  background-color: var(--color-primary);
  transition: width 0.1s linear;
}

.alert__progressBar.primary {
  background-color: var(--color-primary);
}

.alert__progressBar.danger {
  background-color: var(--color-error);
}

.alert__progressBar.warning {
  background-color: var(--color-warning);
}
</style>