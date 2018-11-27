//  直接更新state的多个对象
/* eslint-disable */
import {
    RECEIVE_SLIDER,
    // RECEIVE_SINGLEIMG,
    RECEIVE_IMGLIST,
    RECEIVE_SHOPID
} from './mutation-types'
export default{
    [RECEIVE_SLIDER](state,{slider}){
        state.slider = slider
    },
    // [RECEIVE_SINGLEIMG](state,{singleimg}){
    //     state.singleimg = singleimg
    // },
    [RECEIVE_IMGLIST](state,{imglist}){
        state.imglist = imglist
    },
    [RECEIVE_SHOPID](state,{shopid}){
        state.shopid = shopid
    }
}