import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import ElementUI from 'element-ui';
import 'mint-ui/lib/style.css'
import '@/assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from '@/stores/index'
Vue.use(Mint);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
