import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/store'

Vue.use(VueRouter)

// -- Routes
const routes = [
  // -- Main App Routes --
  {
    path: '/',
    name: 'Main',
    meta: { requiresAuth: true },
    component: () => import('@/views/main/Main.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/main/Home.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/main/Settings.vue')
      },
      {
        path: 'help',
        name: 'help',
        component: () => import('@/views/main/Help.vue')
      }
    ]
  },

  // -- Unparented Routes --
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    name: 'not-found',
    redirect: '/home'
  }
]
// -- End of Routes

const router = new VueRouter({
  base: '',
  mode: 'history',
  routes: routes
})

// -- Authentication guard
router.beforeEach(async (to, from, next) => {
  window.document.title = 'ODIN Desktop'
  const loggedIn = await store.dispatch('auth/checkIsAuthenticated')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // If accessing a protected route but not logged in, redirect to /login
    if (loggedIn) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  } else {
    // If logged in and trying to access /login, redirect to home
    if (loggedIn && to.path === '/login') {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  }
})

export default router