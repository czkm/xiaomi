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
   <!-- <div class="img_list">
     <div class="container">
       <div class="row">
         <div class="col-12">
            <div class="col-6 list_left">
              <img class="img_left" src="@/components/ImgList/img/img01.jpg" alt="">
            </div>
            <div class="col-6 list_righ">
               <img class="img_right" src="./img/img02.jpg" alt="">
               <img class="img_right" src="./img/img03.jpg" alt="">
            </div>
          </div>
       </div>
     </div>
   </div> -->
</template>

<script type="text/ecmascript-6">
// import mapState from  'vuex'
export default {
  // computed:{
  //   ...mapState(['imglist'])
  // }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .img_list
   min-height 200px
   width 100%
   padding-top 5px
   padding-bottom 5px
   clearFix()
   maxwidth()
   .list_left
     width 50%
     height 100%
     display block
     float left
     padding-left  1px
     .img_left
       padding-bottom 0
       width 100%
       height 100%
   .list_righ
     width 50%
     height 100%
     display block
     float right
     padding-right 1px
     .img_right
       width 100%
       height 100%
       padding-bottom 0px
      .list_right
       width 50%
       height 100%
       display block
       float right
</style>
