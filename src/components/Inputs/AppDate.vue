<script setup>
import { ref, watch } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import FormInputRemark from '@/components/Inputs/FormInputRemark.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import '@/assets/inputs.css'


const props = defineProps({
  label: {
    type: String,
    desc: 'Текст лейбла'
  },
  placeholder: {
    type: String,
    desc: 'Плейсхолдер',
    default: 'Выберите дату'
  },
  errorText: {
    type: String,
    desc: 'Текст ошибки',
    default: 'Введите дедлайн'
  },
})
const emit = defineEmits(['updateDate'])

const date = ref()

const format = (date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

watch(
  date, 
  (newValue) => {
    emit('updateDate', format(newValue))
  }
)
</script>

<template>
  <div class="formInput">
    <FormInputRemark
      :placeholder="placeholder"
      :label="label"
      :errorText="errorText" />
    <div class="formDate__label">
      {{ label }}
    </div>
    <Datepicker
      v-model="date"
      :format="format"
      locale="ru"
      required
      position="left"
      select-text="Выбрать"
      cancel-text="Закрыть"
      :placeholder="placeholder"
      :min-date="new Date()"
      :enable-time-picker="false"
      input-class-name="dp-custom-input" />
  </div>
</template>

<style>
.dp-custom-input {
  border: 2px solid #ccc;
  color: #2c3e50;
  border-radius: 12px;
  font-size: 1rem;
}
</style>