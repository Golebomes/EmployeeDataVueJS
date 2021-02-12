import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from '@/router/router'
import resource from '@/resource/resource'
Vue.config.productionTip = false

new Vue({
  resource,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
