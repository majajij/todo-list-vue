import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/auth/LoginPage.vue'
import RegisterPage from '../components/auth/RegisterPage.vue'
import BasicShell from '../shell/BasicShell.vue'
import AppShell from '../shell/AppShell.vue'

const routes = [
  {
    path: '/login',
    component: BasicShell,
    children: [
      {
        path: '',
        component: LoginPage
      }
    ]
  },
  {
    path: '/register',
    component: BasicShell,
    children: [
      {
        path: '',
        component: RegisterPage
      }
    ]
  },
  {
    path: '/',
    component: AppShell,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: HomeView
      },
      {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
