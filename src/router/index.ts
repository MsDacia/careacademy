import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
		name: 'Home',
		path: '/',
	},
]

export default new VueRouter({
	routes,
})
