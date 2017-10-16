import 'babel-polyfill'
import Vue from 'vue'
import VueHead from 'vue-head'

import App from './components/app.vue'
import router from './router'
import store from './store'

Vue.use(VueHead)

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
