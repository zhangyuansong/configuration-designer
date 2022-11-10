// 路由配置文件
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
       component: () => import('@/views/home/home.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/home/vuex.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/home/axios.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
