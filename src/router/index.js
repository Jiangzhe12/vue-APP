import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/MovieView.vue') },
  { path: '/ListView', component: () => import('../views/ListView.vue') },
  { path: '/BookView', component: () => import('../views/BookView.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
