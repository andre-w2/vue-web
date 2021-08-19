import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Header.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Forms_reg.vue')
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: () => import('../views/Entrance.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
