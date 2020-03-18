import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/base.css'
import router from './router'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(ElementUI)

const configOptions = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
