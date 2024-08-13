<script setup>
import { computed, reactive, ref, watch } from 'vue'
import AppInput from '@/components/Inputs/AppInput.vue'
import AppTextarea from '@/components/Inputs/AppTextarea.vue'
import AppDate from '@/components/Inputs/AppDate.vue'
import AppLoader from '@/components/AppLoader.vue'
import { useCreateTaskStore } from '@/stores/createTask.js'

const titleValue = ref('')
const tagValue = ref('')
const descriptionValue = ref('')
const deadlineValue = ref('')
const elementsClasses = reactive({
  title: null,
  tag: null,
  description: null,
  date: null
})
const createTaskStore = useCreateTaskStore()
const { setTask } = createTaskStore
const isLoading = computed(() => createTaskStore.isLoading)

const validateInput = (value) => {
  return value.trim().length ? 'success' : 'invalid'
}

const validateSubmitHandler = () => {
  setTask({titleValue, tagValue, descriptionValue, deadlineValue})
}

const disableButton = computed(() => {
  return Object.values(elementsClasses).some(value => value === 'invalid' || value === null)
})

watch([titleValue, tagValue, descriptionValue, deadlineValue], (newValues, oldValues) => {
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
      case 3:
        elementsClasses.date = validateInput(element)
        break
    }
  })
})
</script>

<template>
  <form 
    class="card newTask"
    @submit.prevent="validateSubmitHandler">
    <h1 class="newTask__title">
      Создать новую задачу
    </h1>
    <div class="newTask__item">
      <AppInput
        v-model="titleValue"
        :class="elementsClasses.title"
        name="title"
        placeholder="Введите название"
        label="Название" />
    </div>

    <div class="newTask__item">
      <AppInput
        v-model="tagValue"
        name="tag"
        :class="elementsClasses.tag"
        placeholder="Введите тег"
        label="Тег" />
    </div>

    <div class="newTask__item">
      <AppDate
        label="Дедлайн"
        :class="elementsClasses.date"
        @updateDate="(date) => deadlineValue = date" />
    </div>

    <div class="newTask__item">
      <AppTextarea
        id="description"
        v-model="descriptionValue"
        :class="elementsClasses.description"
        placeholder="Описание"
        label="Описание" />
    </div>
    <div class="newTask__buttonWrap">
      <AppButton 
        color="primary"
        :disabled="disableButton"
        type="submit">
        Создать
      </AppButton>
      <AppLoader :isShow="isLoading" />
    </div>
  </form>
</template>

<style scoped>
.newTask__title {
  margin-bottom: 30px;
}

.newTask__item {
  margin-bottom: 20px;
}

.newTask__buttonWrap {
  display: flex;
}
</style>