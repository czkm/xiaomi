<template>
   <div class="recommend  ">
        <slider/>
        <HomeList></HomeList>
        <ImgList></ImgList>
        <ImgSingle></ImgSingle>
        <!-- <ImgDouble></ImgDouble> -->
        <imgleft></imgleft>
        <imgright></imgright>
   </div>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/Slider/Slider'
import ImgSingle from '@/components/ImgList/ImgSingle'
import HomeList from '@/pages/Home/HomeList'
import ImgList from '@/components/ImgList/ImgList'
import imgleft from '@/components/ImgList/img_left'
import imgright from '@/components/ImgList/img_right'
/* eslint-disable */
export default {
 
  components: {
    HomeList,
    ImgList,
    ImgSingle,
    Slider,
    imgleft,
    imgright


  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
.recommend
  padding-bottom 50px
  width 100%
  clearFix()
  maxwidth()

</style>
