import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/auth/LoginPage.vue'
import RegisterPage from '../components/auth/RegisterPage.vue'
import BasicShell from '../shell/BasicShell.vue'
import AppShell from '../shell/AppShell.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/login',
    component: BasicShell,
    children: [
      {
        path: '',
        name: 'login',
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
        name: 'register',
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
        name: 'home',
        component: HomeView
      },
      {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name == 'register') next()
  if (to.name == 'login' && store.getters.isAuthenticated) next({ name: 'home' })
  if (to.name !== 'login' && !store.getters.isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
