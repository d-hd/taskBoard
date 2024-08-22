<script setup>
const props = defineProps({
  isShow: {
    type: Boolean,
    desc: 'Показывать ли Лоадер'
  },
  size: {
    type: String,
    desc: 'Размер: S, L',
    default: 'S',
    validator: (value) => ['S', 'L'].includes(value)
  }
})
</script>

<template>
  <div
    v-if="isShow"
    class="loader"
    :class="`size${size}`" />
</template>

<style scoped>
.loader {
  aspect-ratio: 1;
  display: grid;
  border: 4px solid var(--color-white);
  border-radius: 50%;
  border-right-color: var(--color-primary);
  animation: l15 1s infinite linear;
}

.loader.sizeS {
  width: 50px;
}

.loader.sizeL {
  width: 80px;
}

.loader::before,
.loader::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}

.loader::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes l15{ 
  100%{transform: rotate(1turn)}
}
</style>