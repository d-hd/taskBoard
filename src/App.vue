<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="container with-nav">
    <RouterView />
  </div>
</template>

<style scoped></style>
