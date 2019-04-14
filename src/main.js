import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import router from './router'
import store from '@/stores/index'
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')