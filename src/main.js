//使用在plugins文件中注入elementui的vue基类
import Vue from './plugins/element'
// 入口文件
import App from './App.vue'
// router配置文件
import router from './router'
// vuex配置
import store from './store'
// element-UI的全部样式文件 可更改主题颜色等
import './styles.scss'
import cookie from 'js-cookie';
Vue.prototype.$cookie = cookie; 
// 模拟数据入口文件
// import './mock/index'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入
NProgress.inc(0.4)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
// 根据开发环境开启浏览器中的vue开发插件
if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}

Vue.config.productionTip = false

// 示例初始化
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
