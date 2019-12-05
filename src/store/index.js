import Vue from 'vue'
import Vuex from 'vuex'
import checkData from './checkData'
import user from './user'
import router from './router'
import tagsViews from './modules/tagsViews'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",  //判断在开发模式使用严格模式， 会有深度的警告（不能直接改变state的值等）
  // 每个模块数据单独存放
  modules: {
    tagsViews,
    permission,
    user,
    checkData, // 信息收集模块(各种检查增删改查)
    router,
  }
})
