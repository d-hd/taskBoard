<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <div class="card">
    <h2>Название задачи</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :type="'done'" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: Описание задачи</p>
    <div>
      <AppButton>
        Взять в работу
      </AppButton>
      <AppButton color="primary">
        Завершить
      </AppButton>
      <AppButton color="danger">
        Отменить
      </AppButton>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>