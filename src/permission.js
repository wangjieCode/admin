import router from './router'
// import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/util/token'
import {transFromRouter} from '@/util/transfrom'


let flag = false;
NProgress.configure({ showSpinner: false })
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if(!flag){
    flag = true;
    const routerList = JSON.parse(localStorage.getItem('router'))
    if(routerList) {
      const rou = await transFromRouter(routerList)
      await init(rou)
      router.push('/index')
    }
  }
  if (hasToken) {
    if (to.path == '/login') {
      Message.success("你已经登录，即将前往首页")
      next('/index')
    } else {
      next()
    }
  } else {
    if (to.path == '/index') {
      next('/login')
    } else {
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
export async function init(routerList) {
  router.addRoutes([
    {
      path: "/index/",
      name: "index",
      meta: {
        title: "综合值班系统"
      },
      redirect: "/index/home",
      component: () => import("@/layout/layout.vue"),
      children: routerList.concat([
        {
          path: '*',
          redirect: '/404'
        }
      ])
    },
    {
      path: '*',
      redirect: '/404'
    }
  ])
}