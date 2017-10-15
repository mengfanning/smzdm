import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home.vue'
import notFound from '../pages/notFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '*',
      component: notFound
    }
  ],
  scrollBehavior(to, from, savePosition){
    if(savedPosition){
      return savePosition
    }  
    return {x:0,y:0}
  }
}) 

export default router
