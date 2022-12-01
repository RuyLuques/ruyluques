import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RuyLuques from '../views/RuyLuques.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ruyluques',
    component: RuyLuques
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
