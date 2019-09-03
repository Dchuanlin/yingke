import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from "@/components/doubapp"
import film from "@/components/doubapp/film"
import group from "@/components/doubapp/group"
import guangbo from "@/components/doubapp/guangbo"
import my from "@/components/doubapp/my"

import footers from "@/components/doubapp/footer/footers"

import vueX from "@/components/vueX"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/film',
      name: 'film',
      component: film
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/guangbo',
      name: 'guangbo',
      component: guangbo
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
    	path: '/footers',
      name: 'footers',
      component: footers
    }
  ]
})
