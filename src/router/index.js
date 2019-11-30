import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routePath'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// router.beforeEach((to, from, next) => {
//   let userId = document.cookie
//   //这里是对登录后的值进行判断，也可对token的值进行判断
//   console.log(userId);
//   next()
// }
// );

export default router
