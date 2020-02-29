import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuemotion from './vuemotion.plugin'

Vue.config.productionTip = false

Vue.use(Vuemotion)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
