import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../pages/Mine/Mine.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Login from '@/pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/Shopping',
      component: Shopping
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
