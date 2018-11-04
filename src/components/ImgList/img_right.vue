<template>
<div class="img_right">
<div class="container" v-for="(n, index) in imgtest.imgtest[0].right_img.length   " :key="index">
  <!-- <div class="container" > -->
<div class="row" >
 <div class="col-12">
   <img  class="col_img " :src="imgtest.imgtest[0].right_img[index].src" alt="">
 </div>
  <p class="col_txt"  > name:{{imgtest.imgtest[0].right_img[index].title}}</p>
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

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
@import "../../common/base/base.styl"
.img_right
  clearFix()
  maxwidth()
  width 100%
  box-sizing border-box
  padding-bottom 25px
  display block
  float right
  .col_img
    width 100%
    height 100%
    float left


 
//  .col-xl-6
//   width 50%

</style>
