import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuemotion from './vuemotion.plugin'

Vue.config.productionTip = false

const light = {
  name: 'light',
  colors: {
    primary: '#8ff7a7',
    secondary: '#50808e',
    background: '#fff',
    foreground: '#2a2e45'
  }
}

Vue.use(Vuemotion, {
  theme: light
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
