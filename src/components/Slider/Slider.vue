<template>
   <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(n, index) in imgList[0].sildeImg.length  " :key="index">
                    <img class="slide_img" :src="baseurl+imgList[0].sildeImg[index].src" alt="">
                    </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
// import {reqImgList} from '@/api'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
/* eslint-disable */
export default {
 
data () { 
    return { 
       baseurl :'http://134.175.86.105:8080/XiaoMi',
       imgList : []
   }
 
  }, 
  // async mounted(){
  // const result =  await reqImgList()
  // console.log(result)
  // this.img = result
  // }
  mounted () {
    // const result =   reqImgList()
    // // console.log(result)
    // // this.imgList = result
    // console.log(result)

    axios.get('http://134.175.86.105:8080/XiaoMi/img'+'/imglist')
      .then(res =>  {
        console.log(res.data);
        this.imgList = res.data
        // console.log(imgList);
      })
      
    
       
  },
  watch:{
      imgList(value){
      this.$nextTick(()=>{
        //界面更新立即调用
       new Swiper('.swiper-container', {
          autoplay: true,
          loop: true, // 循环模式选项
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"

 .swiper-container
    .swiper-slide
      position relative
      overflow hidden
      display block
      max-width 100%
      height auto
      .slide_img
        width 100%
        height 100%
</style>
