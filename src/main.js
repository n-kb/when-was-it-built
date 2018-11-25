import Vue from 'vue'
import App from './App.vue'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

Vue.use(VueNativeSock, 'wss://when-was-it-built.herokuapp.com', { format: 'json' })

new Vue({
  render: h => h(App),
}).$mount('#app')
