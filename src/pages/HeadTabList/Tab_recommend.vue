<template>
   <div class="recommend  ">
        <slider/>
        <HomeList></HomeList>
        <ImgList></ImgList>
        <Itemlist/>
   </div>
</template>

<script type="text/ecmascript-6">
import Slider from '@/components/Slider/Slider'
import HomeList from '@/pages/Home/HomeList'
import ImgList from '@/components/ImgList/ImgList'
import Itemlist from '@/components/ImgList/Itemlist'
/* eslint-disable */
export default {
 
  components: {
    HomeList,
    ImgList,
    Slider,
    Itemlist
  },
     mounted () {
    // this.$store.dispatch('getImgList')
    

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
