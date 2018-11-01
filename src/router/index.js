import Vue from 'vue'
import Router from 'vue-router'
import Mine from '../pages/Mine/Mine.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Recommend from '../pages/HeadTabList/Tab_recommend.vue'
import Phone from '../pages/HeadTabList/Tab_phone.vue'
import Tv from '../pages/HeadTabList/Tab_tv.vue'
import Intelligent from '../pages/HeadTabList/Tab_intelligent.vue'
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
      meta: {
        showfooter: true
      },
      children: [
        {
          path: '',
          redirect: '/home/recommend',
          meta: {
            showfooter: true
          }
        },
        {
          path: 'recommend',
          component: Recommend,
          meta: {
            showfooter: true
          }
        },
        {
          path: 'phone',
          component: Phone,
          meta: {
            showfooter: true
          }
        },
        {
          path: 'tv',
          component: Tv,
          meta: {
            showfooter: true
          }
        },
        {
          path: 'intelligent',
          component: Intelligent,
          meta: {
            showfooter: true
          }
        },
        {
          path: 'lapTop',
          component: LapTop,
          meta: {
            showfooter: true
          }
        }
      ]
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/Shopping',
      component: Shopping
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
