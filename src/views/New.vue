<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive, ref, watch } from 'vue'
import AppInput from '@/components/AppInput.vue'
import AppTextarea from '@/components/AppTextarea.vue'

const titleValue = ref('')
const tagValue = ref('')
const descriptionValue = ref('')
const elementsClasses = reactive({
  title: null,
  tag: null,
  description: null,
})

const validateInput = (value) => {
  return value.trim().length > 0 ? 'success' : 'invalid'
}

watch([titleValue, tagValue, descriptionValue], (newValues, oldValues) => {
  newValues.forEach((element, i) => {
    if (element === oldValues[i]) {
      return
    }

    switch (i) {
      case 0:
        elementsClasses.title = validateInput(element)
        break
      case 1:
        elementsClasses.tag = validateInput(element)
        break
      case 2:
        elementsClasses.description = validateInput(element)
        break
    }
  })
})
</script>

<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <AppInput
      v-model="titleValue"
      :class="elementsClasses.title"
      name="title"
      placeholder="Введите название"
      label="Название" />

    <AppInput
      v-model="tagValue"
      name="tag"
      :class="elementsClasses.tag"
      placeholder="Введите тег"
      label="Тег" />

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input
        id="date"
        type="date">
    </div>

    <AppTextarea
      id="description"
      v-model="descriptionValue"
      :class="elementsClasses.description"
      placeholder="Описание"
      label="Описание" />

    <AppButton type="primary">
      Создать
    </AppButton>
  </form>
</template>