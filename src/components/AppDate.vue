<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Дата дедлайна',
      desc: 'Текст лейбла'
    },
    inputId: {
      type: String,
      default: 'date',
      desc: 'Идентификатор инпута'
    },
    errorText: {
      type: String,
      desc: 'Текст ошибки',
      default: 'Назначьте дату дедлайна'
    },
  })
</script>

<template>
  <div class="formDate">
    <div class="formDate__remark">
      <div class="formDate__error">
        {{ errorText }}
      </div>
      <!-- <div class="formDate__placeholder">
        {{ placeholder }}
      </div> -->
    </div>
    <label
      сlass="formDate__label"
      for="date">
      {{ label }}
    </label>
    <input
      id="date"
      type="date">
  </div>
</template>

<style scoped>
.formDate {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formDate__remark {
  position: absolute;
  padding: 5px;
  background-color: var(--color-white);
  font-size: 10px;
  display: none;
  left: 12px;
  top: 16px;
}
</style>