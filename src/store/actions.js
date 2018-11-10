// 通过mmutation间接更新state对象
import {
  RECEIVE_SLIDER,
  RECEIVE_IMGLIST
} from './mutation-types'

import {
  reqImgList,
  reqSlider
} from '../api'
/* eslint-disable */
export default{
    
    async getImgList ({commit}){
        //发送异步ajax请求
        const result =  await reqImgList()
        const imglist = result.imgtest
        commit(RECEIVE_IMGLIST,{imglist})

    },
    async getSlidert ({commit}){
        //发送异步ajax请求
        const result =  await reqSlider()
        const Slider = result.imgtest
        commit(RECEIVE_SLIDER,{Slider})

    }

}