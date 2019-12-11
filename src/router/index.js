import Vue from 'vue'
import VueRouter from 'vue-router'
export const routes = [
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
    redirect:'/login'
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router