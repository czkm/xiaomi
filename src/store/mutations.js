//  直接更新state的多个对象
/* eslint-disable */
import {
    RECEIVE_SLIDER,
    RECEIVE_IMGLIST
} from './mutation-types'
export default{
    [RECEIVE_SLIDER](state,{slider}){
        state.slider = slider
    },
    [RECEIVE_IMGLIST](state,{imglist}){
        state.imglist = imglist
    }
}