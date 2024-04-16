import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'
import New from '../views/New.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: Tasks
    },
    {
      path: '/tasks',
      name: 'Задачи',
      component: Tasks
    },
    {
      path: '/task',
      name: 'Задача',
      component: Task
    },
    {
      path: '/new',
      name: 'Новая задача',
      component: New
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
