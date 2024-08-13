<script setup>
import AppButton from '@/components/Inputs/AppButton.vue'
import { useAlertStore } from '@/stores/alert.js'
import { watch } from 'vue'

const { alert, closeAlert } = useAlertStore()

watch(
  alert, (oldValue, newValue) => {
    console.log(oldValue, newValue)
  },
  { deep: true }
)
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
</style>