export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../layout/layout.vue'),
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: '/about',
				name: 'home',
				component: () => import('../views/About.vue'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/login.vue')
	}
]