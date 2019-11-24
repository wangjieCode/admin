import Vue from './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
