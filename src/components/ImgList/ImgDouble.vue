<template>
<div class="img_double">
  <imgsingle/>
  <imgleft/>
  <imgright/>
</div>
</template>
<script type="text/ecmascript-6">
import imgleft from '@/components/ImgList/img_left'
import imgright from '@/components/ImgList/img_right'
import imgsingle from '@/components/ImgList/ImgSingle'
export default {
  /* eslint-disable */
  data: function () { 
    return {   
   } 
  },
    components :{
      imgsingle,
      imgleft,
      imgright
    }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
@import "../../common/base/base.styl"
.img_double
  box-sizing border-box
  padding-bottom 25px
  display block
  float left
  .col_img
    width 100%
    height 100%
    // float left


 
//  .col-xl-6
//   width 50%

</style>
