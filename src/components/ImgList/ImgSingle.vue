<template>
<div class="imgsingle">
<div class="container" v-for="(n, index) in imgtest.imgtest[0].single_img.length   " :key="index">
    <div class="row">
      <div class="col-12">
        <img  class="img_mian " :src="imgtest.imgtest[0].single_img[index].src" alt="">
      </div>
    </div>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
import imgtest from '@/mock/imgtest.json'

export default {
  /* eslint-disable */
  data: function () { 
    return { 
      imgtest
    }
 
  } 
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
/* eslint-disable */
@import "../../common/stylus/mixins.styl"
 .imgsingle
   box-sizing border-box
   display block
   width 100%
   height 100%
   margin 0 auto
   padding-top 10px
   padding-bottom 10px
   overflow hidden
   .container
     padding 0
     .img_mian
       width 100%
       height 100%
</style>
