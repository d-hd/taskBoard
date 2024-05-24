<script setup>
import { ref, defineEmits, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    desc: 'Плейсхолдер'
  },
  label: {
    type: String,
    desc: 'Текст лейбла'
  },
  id: {
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
  console.log(event)
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
  <div :class="['formSelect', focusClass]">
    <div class="formSelect__remark">
      <div class="formSelect__error">
        {{ errorText }}
      </div>
      <div class="formSelect__placeholder">
        {{ placeholder }}
      </div>
    </div>
    <label
      class="formSelect__label"
      for="id">
      {{ label }}
    </label>
    <textarea
      id="id"
      v-model="internalValue"
      class="formSelect__textarea"
      :placeholder="placeholder"
      @focus="changeFocusClass"
      @blur="changeFocusClass"
      @input="updateValue" />
  </div>
</template>

<style scoped>
.formSelect {
  position: relative;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formSelect__textarea {
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
  min-height: 100px;
}

.formSelect__remark {
  position: absolute;
  padding: 5px;
  background-color: var(--color-white);
  font-size: 10px;
  display: none;
  left: 12px;
  top: 16px;
}

.formSelect.invalid .formSelect__error, .formSelect.invalid .formSelect__remark {
  display: block;
}

.formSelect.formSelect.success .formSelect__placeholder, .formSelect.success .formSelect__remark {
  display: block;
}

.formSelect__error {
  display: none;
  color: #e53935;
}

.formSelect__placeholder {
  display: none;
  color: var(--main-textColor);
  
}

.formSelect.invalid .formSelect__textarea {
  border-color: #e53935;
}

.formSelect.success .formSelect__textarea {
  border-color: #42b983;
}

.formSelect.focus .formSelect__textarea {
  border-color: #a98307;
}

.formSelect__label {
  display: block;
  font-weight: 500;
}
</style>