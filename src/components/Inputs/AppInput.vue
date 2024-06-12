<script setup>
import { ref, defineEmits, watch } from 'vue'
import FormInputRemark from '@/components/Inputs/FormInputRemark.vue'
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
  name: {
    type: String,
    desc: 'Атрибут name'
  },
  errorText: {
    type: String,
    desc: 'Текст ошибки',
    default: 'Введите значение'
  },
  modelValue: String,
})

const internalValue = ref(props.modelValue)
const focusClass = ref('')
const emit = defineEmits(['update:modelValue'])

const updateValue = () => {
  emit('update:modelValue', internalValue.value)
}

const changeFocusClass = (event) => {
  if (event.type === 'focus') {
    focusClass.value = event.type
  } else [
    focusClass.value = ''
  ]
}

watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})
</script>

<template>
  <div :class="['formInput', focusClass]">
    <FormInputRemark
      :placeholder="placeholder"
      :label="label"
      :errorText="errorText" />
    <label
      class="formInput__label"
      for="name">
      {{ label }}
    </label>
    <input
      id="name"
      v-model="internalValue"
      class="formInput__input"
      :placeholder="placeholder"
      :name="name"
      type="text"
      @input="updateValue"
      @focus="changeFocusClass"
      @blur="changeFocusClass">
  </div>
</template>

<style scoped>
.formInput__input {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  resize: none;
  transition: border 0.5s;
}
</style>