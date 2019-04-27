import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import cart from './cart'
import order from './order'
import category from './category'
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
    category
  }
})

export default store
