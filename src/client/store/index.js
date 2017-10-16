import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

// creat store

export default new Vuex.Store({
  modules: {
    user
  }
})
