export const routes = [
	{
		path: '/index/',
		name: 'index',
		component: () => import('../layout/layout.vue'),
		redirect: '/index/home',
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: 'about',
				name: 'about',
				component: () => import('../views/About.vue'),
			},
			{
				path: 'check',
				name: 'check',
				component: () => import('../views/check.vue'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/login.vue')
	},
	{
		path: '/404',
		name: '404',
		component: () => import('../views/404.vue')
	},
	{
		path: '*',
		redirect: '/login'
	},
]