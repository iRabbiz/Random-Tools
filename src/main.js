// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/scss/bootstrap.scss'
import firebase from 'firebase/app'
import config from '@/config/firebase'

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  bootstrap,
  firebase,
  components: { App },
  template: '<App/>'
})
