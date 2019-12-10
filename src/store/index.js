import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  getters,
  strict: process.env.NODE_ENV === "development",  //判断在开发模式使用严格模式， 会有深度的警告（不能直接改变state的值等）
  modules,
})
