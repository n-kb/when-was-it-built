import Vue from 'vue'
import App from './App.vue'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

var ws_url = process.env.NODE_ENV === 'production' ? 'wss://when-was-it-built.herokuapp.com' : 'ws:localhost:3000'

Vue.use(VueNativeSock, ws_url, { format: 'json' })

new Vue({
  render: h => h(App),
}).$mount('#app')
