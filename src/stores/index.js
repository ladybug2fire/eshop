import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import cart from './cart'
import order from './order'
import article from './article'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  modules: {
    user,
    cart,
    order,
    article
  }
})

export default store
