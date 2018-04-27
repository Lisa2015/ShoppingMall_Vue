import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'
import axios from 'axios'
import jquery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
Vue.prototype.$http = axios

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

const app = new Vue({
  router,
  store
}).$mount('#app')
// const app = new Vue({
//   router,
//   store,
//   render: h => h('.app', App)
// })

export default app
