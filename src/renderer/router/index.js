import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import second from '@/pages/second'

Vue.use(Router)

export default new Router({
	routes: 
	[
		{
			path: '/',
			name: 'index',
			component: index,
		}, {
			path: '/second',
			name: 'second',
			component: second,
		}
	]
})