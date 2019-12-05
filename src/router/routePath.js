export const routes = [
	{
		path: '/index/',
		name: 'index',
		meta:{
			title: '一期开发'
		},
		component: () => import('../layout/layout.vue'),
		redirect: '/index/home',
		children: [
			{
				path: 'home',
				name: 'home',
				meta:{
					title: '管理员中心'
				},
				component: () => import('../views/Home.vue'),
			},
			{
				path: 'about',
				name: 'about',
				meta:{
					title: '统计板块'
				},
				component: () => import('../views/About.vue'),
			},
			{
				path: 'check',
				name: 'check',
				meta:{
					title: '检查信息'
				},
				component: () => import('../views/check.vue'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		meta:{
			title: '登录'
		},
		component: () => import('../views/login/login.vue')
	},
	{
		path: '/404',
		name: '404',
		meta:{
			title: '404'
		},
		component: () => import('../views/404.vue')
	},
	{
		path: '*',
		redirect: '/login'
	},
]