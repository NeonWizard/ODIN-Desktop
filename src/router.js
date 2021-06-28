import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/store'

Vue.use(VueRouter)

// -- Routes
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { requiresAuth: true },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    name: 'not-found',
    redirect: '/'
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
    // If logged in and trying to access /login, redirect to root
    if (loggedIn && to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router