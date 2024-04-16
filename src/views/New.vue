<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input id="title" type="text">
    </div>

    <div class="form-control">
      <label for="tag">Тег</label>
      <input id="tag" type="text">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input id="date" type="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" />
    </div>

    <AppButton type="primary">
      Создать
    </AppButton>
  </form>
</template>