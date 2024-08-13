<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import AppAlert from './components/AppAlert.vue'
</script>

<template>
  <div class="wrapper">
    <TheNavbar />
    <AppAlert />
    <div class="container with-nav">
      <RouterView />
    </div>
  </div>
</template>