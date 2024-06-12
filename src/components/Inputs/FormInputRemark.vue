<script setup>
import '@/assets/inputs.css'

const props = defineProps({
  placeholder: {
    type: String,
    desc: 'Плейсхолдер'
  },
  label: {
    type: String,
    desc: 'Текст лейбла'
  },
  errorText: {
    type: String,
    desc: 'Текст ошибки',
    default: 'Введите значение'
  },
})
</script>

<template>
  <div class="formInput__remark">
    <div class="formInput__error">
      {{ errorText }}
    </div>
    <div class="formInput__placeholder">
      {{ placeholder }}
    </div>
  </div>
</template>