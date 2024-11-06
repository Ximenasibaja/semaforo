import Vue from '.pnpm/vue@2.7.16/node_modules/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
