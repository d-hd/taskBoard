<script setup>
const props = defineProps({
  type: {
    type: String,
    desc: 'Тип кнопки',
    validator: (value) => ['primary', 'danger', 'warning'].includes(value)
  },
  disabled: {
    type: Boolean,
    desc: 'Включает/отключает дизейбл'
  }
})
</script>

<template>
  <button
    class="btn"
    :class="type"
    :disabled="disabled">
    Взять в работу
  </button>
</template>

<style scoped>
.btn {
  color: var(--color-primary);
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid var(--color-primary);
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: var(--color-white);
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1;
  background: #eee;
  border-color: #ddd;
  color: #999;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.primary {
  background: var(--color-primary);
  color: var(--color-white);
}

.danger {
  background: var(--color-error);
  color: var(--color-white);
  border-color: var(--color-error);
}

.warning {
  background: var(--color-warning);
  color: var(--color-white);
  border-color: var(--color-warning);
}
</style>