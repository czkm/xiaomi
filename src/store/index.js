import Vue from 'vue'
import Vuex from 'vuex'

// // 引入四个基本模块
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

// // 一定要声明使用插件
Vue.use(Vuex)

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
  state: {
    bseurl: 'https://www.easy-mock.com/mock/5c0c79f91b4f006bfb76b9b5/example',
    testurl: 'https://192.168.43.96:8085'
  }

})
export default store
