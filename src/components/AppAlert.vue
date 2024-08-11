<script setup>
import AppButton from '@/components/Inputs/AppButton.vue'
import { useAlertStore } from '@/stores/alert.js'

const { alert, closeAlert } = useAlertStore()
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
  padding: 10px 15px;
  border-radius: 0 16px 0 16px;
  border-style: solid;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: var(--color-primary);
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