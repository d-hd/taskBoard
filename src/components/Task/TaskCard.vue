<script setup>
import AppStatus from '@/components/AppStatus.vue'
</script>

<template>
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

<style>

</style>