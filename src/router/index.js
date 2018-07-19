import Vue from 'vue'
import Router from 'vue-router'
import Branches from '@/components/Branches'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Branches',
      component: Branches
    }
  ]
})
