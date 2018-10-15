import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../pages/Mine/Mine.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Login from '@/pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Recommend from '../pages/HeadTabList/Tab_recommend.vue'
import Phone from '../pages/HeadTabList/Tab_phone.vue'
import Tv from '../pages/HeadTabList/Tab_tv.vue'
import Intelligent from '@/pages/HeadTabList/Tab_intelligent.vue'
import LapTop from '../pages/HeadTabList/Tab_laptop.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/recommend'
        },
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'phone',
          component: Phone
        },
        {
          path: 'tv',
          component: Tv
        },
        {
          path: 'intelligent',
          component: Intelligent
        },
        {
          path: 'lapTop',
          component: LapTop
        }
      ]
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
