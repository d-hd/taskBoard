<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    desc: 'Плейсхолдер'
  }
});
</script>

<template>
  <div class="form-control">
    <label for="tag">Тег</label>
    <input id="tag" type="text">
  </div>
</template>

<style scoped>
.form-control input,
.form-control select,
.form-control textarea {
  font-family:
    Inter,
    Roboto,
    Oxygen,
    Fira Sans,
    Helvetica Neue,
    sans-serif;
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
  resize: none;
}

.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}

.form-checkbox {
  margin-bottom: 1rem;
}

.form-checkbox .label {
  display: block;
  margin: 0 0 0.3rem 0.3rem;
  font-weight: 500;
}

.form-checkbox .checkbox input {
  margin-right: 1rem;
}

.form-control label {
  display: block;
  margin: 0 0 0.3rem 0.3rem;
  font-weight: 500;
}

.form-control input:active,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}
</style>