import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page from '@/components/Page'

var VueCookie = require('vue-cookie')
Vue.use(VueCookie)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page/:id',
      name: 'Page',
      component: Page
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
