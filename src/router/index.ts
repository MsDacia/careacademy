import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
		name: 'Home',
		path: '/',
	},
	{
		component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
		name: 'About',
		path: '/about',
	},
]

export default new VueRouter({
	routes,
})
