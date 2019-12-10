import Vue from 'vue'
import VueRouter from 'vue-router'
export const routes = [
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '登录'
    },
    component: () => import('@/layout/layout.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('../views/404.vue')
  },
  {
    path:'*',
    redirect: '/404'
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// router.addRoutes([
//   
// ])
export default router