<script setup>
const props = defineProps({
  id: { 
    type: String, 
    desс: 'Идентификатор задачи' 
  },
  dateCreated: { 
    type: String, 
    desс: 'Дата создания задачи' 
  },
  deadline: { 
    type: String, 
    desс: 'Срок выполнения задачи' 
  },
  description: { 
    type: String, 
    desс: 'Описание задачи' 
  },
  status: { 
    type: String, 
    desс: 'Статус задачи' 
  },
  tags: { 
    type: String, 
    desс: 'Теги задачи' 
  },
  title: { 
    type: String, 
    desс: 'Название задачи' 
  },
})
</script>

<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
    </h2>
    <AppStatus :type="'done'" />
    <p>{{ description }}</p>
    <p>
      Дедлайн: {{ deadline }}
    </p>
    <AppButton 
      color="primary">
      Посмотреть
    </AppButton>
    <p>
      {{ dateCreated }}
    </p>
  </div>
</template>

<style>

</style>