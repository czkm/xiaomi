<template>
   <div class="slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(n, index) in slider_img.length  " :key="index">
                    <img class="slide_img" :src="slider_img[index].src" alt="">
                    </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
/* eslint-disable */
export default {
data: function () { 
    return { 
      slider_img :[
   
         { "title": "123", "src":"../../../static/img/bg.jpg" },
         { "title": "123", "src":"../../../static/img/bg2.jpg" },
         { "title": "453", "src":"../../../static/img/bg5.jpg" },
        //  { "title": "123", "src":"../../../static/img/bg.jpg" },    
    ]
   }
 
  }, 
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
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
