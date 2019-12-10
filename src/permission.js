import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/util/token'

NProgress.configure({ showSpinner: false })
let flag = false;
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if(!flag){
      flag = true
      init()
    }
    if (to.path == '/login') {
      Message.success("你已经登录，即将前往首页")
      next('/index')
    } else {
      next()
    }
  } else {
    if(to.path == '/index'){
      next('/login')
    }else{
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
/**
 * 初始化对应路由
 */
// eslint-disable-next-line no-unused-vars
async function init() {
  const routerList = await store.dispatch('user/initRouter')
  router.addRoutes([
    {
      path: "/index/",
      name: "index",
      meta: {
        title: "综合值班系统"
      },
      component: () => import("@/layout/layout.vue"),
      children: routerList
    },
    {
      path:'*',
      redirect: '/404'
    }
  ])
}