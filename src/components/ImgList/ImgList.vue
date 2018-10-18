<template>
   <div class="img_list">
     <div class="list_left">
       <img class="img_left" src="@/components/ImgList/img/img01.jpg" alt="">
     </div>
     <div class="list_righ">
         <div class="right_top">
             <img class="img_right" src="./img/img02.jpg" alt="">
         </div>
         <div class="right_bottom">
            <img class="img_right" src="./img/img03.jpg" alt="">
         </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    img: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .img_list
   min-height 200px
   width 100%
   height auto
   padding-top 5px
   padding-bottom 5px
   .list_left
     width 49%
     height 100%
     display block
     float left
     padding-left 1px
     .img_left
       width 100%
       height 100%
   .list_righ
     width 49%
     height 100%
     display block
     float right
     .img_right
       width 100%
       height 100%
     .right_bottom
      height 49%
      display block
     .right_top
      height 49%
      display block
      padding-bottom 1px
      .list_right
       width 50%
       height 100%
       display block
       float right
</style>
