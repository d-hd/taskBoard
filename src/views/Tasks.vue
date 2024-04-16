<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import AppStatus from '../components/AppStatus.vue'
</script>

<template>
  <h1
    v-if="!tasks"
    class="text-white center">
    Задач пока нет
  </h1>
  <template v-else>
    <h3 class="text-white">
      Всего активных задач: 0
    </h3>
    <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date().toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <AppButton />
      <button class="btn primary">
        Посмотреть
      </button>
    </div>
  </template>
</template>
