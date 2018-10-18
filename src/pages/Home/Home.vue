<template>
   <div>
        <bHead></bHead>
        <HeadTable></HeadTable>
        <router-view></router-view>
   </div>
</template>

<script type="text/ecmascript-6">
import HeadTable from '@/components/HeadTable/HeadTable'
import HeadGuide from '@/components/HeadGuide/HeadGuide'
import bHead from '@/components/HeadGuide/bHead'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
/* eslint-disable */ 
export default {
  mounted () {
    //创建swiper对象
    new Swiper(".swiper-container", {
      autoplay:true,  
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
  components: {
    HeadTable,
    HeadGuide,
    bHead
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