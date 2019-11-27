import Vue from './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.scss'

if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
