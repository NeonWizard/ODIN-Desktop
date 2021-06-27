import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// -- Routes
const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { requiresAuth: true },
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		meta: { title: 'Login' },
		component: () => import('@/views/Login.vue')
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
	const loggedIn = false

	window.document.title = to.meta.title ?? 'ODIN Web'

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