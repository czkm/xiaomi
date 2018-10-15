<template>
   <div class="recommend">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="slide_img" src="@/components/Slider/img/bg.jpg" alt=""></div>
                <div class="swiper-slide"><img class="slide_img" src="@/components/Slider/img/bg2.jpg" alt=""></div>
                <div class="swiper-slide"><img class="slide_img" src="@/components/Slider/img/bg5.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <HomeList></HomeList>
        <ImgList></ImgList>
        <ImgSingle></ImgSingle>
   </div>
</template>

<script type="text/ecmascript-6">
import ImgSingle from '@/components/ImgList/ImgSingle'
import HomeList from '@/pages/Home/HomeList'
import ImgList from '@/components/ImgList/ImgList'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
/* eslint-disable */
export default {
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  components: {
    HomeList,
    ImgList,
    ImgSingle
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
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
