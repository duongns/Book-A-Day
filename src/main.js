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
  apiKey: 'AIzaSyCgdQYjiQQakdwbM7Xr-HRETrKw7Fe6v_0',
  authDomain: 'book-a-day.firebaseapp.com',
  databaseURL: 'https://book-a-day.firebaseio.com',
  projectId: 'book-a-day',
  storageBucket: 'book-a-day.appspot.com',
  messagingSenderId: '643102434331',
  appId: '1:643102434331:web:1b0f981de344c8cc3b84be',
  measurementId: 'G-RTNXR72XMT'
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
