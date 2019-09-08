import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/MainPage.vue'
import Count from './views/Count.vue'
import Array from './views/Array.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/test-count',
      name: 'count',
      component: Count
    },
    {
      path: '/test-array',
      name: 'array',
      component: Array
    }
  ]
})
