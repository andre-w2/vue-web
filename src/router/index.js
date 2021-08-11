import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Header.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Forms_reg.vue')
  },
  {
    path: '/entrance',
    name: 'Entrance',
    component: () => import('../components/Entrance.vue')
  },
  {
    path: '/exit',
    name: 'Exit',
    component: () => import('../components/Exit.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../components/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
