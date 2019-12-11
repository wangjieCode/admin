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
  state: {
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 历史记录到航 */
    historyList: [{name:'index',title:'综合值班值班系统'}]
  },
  mutations: {
    toggleNavCollapse(state) {
      state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    sethistoryList: (state,list) => {
      state.historyList.push(list)
    },
    removeHis(state,index){
      state.historyList.splice(index,1)
      return new Promise( res => {
        res(state.historyList[index-1])
      })
    }
  },
  namespace: true,
  getters,
  strict: process.env.NODE_ENV === "development",  //判断在开发模式使用严格模式， 会有深度的警告（不能直接改变state的值等）
  modules,
})
