// 通过mmutation间接更新state对象
import {
  RECEIVE_SLIDER,
  //   RECEIVE_SINGLEIMG,
  RECEIVE_IMGLIST
} from './mutation-types'

import {
  reqImgList,
  reqSlider
} from '../api'
/* eslint-disable */
export default{
    
  
    async getSlidert ({commit}){
        //发送异步ajax请求
        const result =  await reqSlider()
        const Slider = result.imgtest
        commit(RECEIVE_SLIDER,{Slider})

    }, 
     async getImgList ({commit}){
        //发送异步ajax请求
        const result =  await reqImgList()
        const imglist = result
        commit(RECEIVE_IMGLIST,{imglist})

    },
    // async getSingleimg ({commit}){
    //     //发送异步ajax请求
    //     const result =  await reqImgList()
    //     const singleimg = result.singleImg
    //     commit(RECEIVE_SINGLEIMG,{singleimg})

    // },

}