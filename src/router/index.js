import Vue from 'vue'
import Router from 'vue-router'
import Random from '@/components/Random'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Random',
      component: Random
    }
  ]
})
