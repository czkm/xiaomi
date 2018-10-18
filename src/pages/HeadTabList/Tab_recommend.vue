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
        <!-- <ImgDouble></ImgDouble> -->
        <imgleft></imgleft>
        <imgright></imgright>
   </div>
</template>

<script type="text/ecmascript-6">
import ImgSingle from '@/components/ImgList/ImgSingle'
import HomeList from '@/pages/Home/HomeList'
import ImgList from '@/components/ImgList/ImgList'
import ImgDouble from '@/components/ImgList/ImgDouble'
import imgleft from '@/components/ImgList/img_left'
import imgright from '@/components/ImgList/img_right'
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
    ImgSingle,
    ImgDouble,
    imgleft,
    imgright


  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
.recommend
  // padding-bottom 50px
  width 100%
  height auto
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
