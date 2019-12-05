import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routePath'
import store from '../store'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  next()
  const {path,meta} = to;
  store.commit('getRouterHistory',{path,meta })
}
);

export default router
