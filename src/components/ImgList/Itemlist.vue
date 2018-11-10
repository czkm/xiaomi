<template>
   <div class="">
     <!-- <div>{{imglist[0].lmglist[0].title}}</div> -->
     <div v-for="(j, index) in imgtest.imgtest.length" :key="index">
       <div class="imgsingle">
            <div class="container" v-for="(n, index) in imgtest.imgtest[j-1].single_img.length   " :key="index">
                <div class="row">
                <div class="col-12">
                    <img  class="img_mian " :src="imgtest.imgtest[j-1].single_img[index].src" alt="">
                </div>
                </div>
            </div>
      </div>
       <div class="img_list">
          <!-- <div class="row " > -->
          <div class="col-6 fl" v-for="(n, index) in imgtest.imgtest[j-1].imglist.length   " :key="index" >
          <img  class="col_img " :src="imgtest.imgtest[j-1].imglist[index].src" alt="">
          <h6 > name:{{imgtest.imgtest[j-1].imglist[index].title}}</h6>
            <h6 > name:{{imgtest.imgtest[j-1].imglist[index].title}}</h6>
          </div>
          <!-- </div> -->
      </div>
        <!-- <div class="img_right">
            <div class="container" v-for="(n, index) in imgtest.imgtest[j-1].right_img.length   " :key="index">
            <div class="row" >
            <div class="col-12">
            <img  class="col_img " :src="imgtest.imgtest[j-1].right_img[index].src" alt="">
            </div>
            <p class="col_txt"  > name:{{imgtest.imgtest[j-1].right_img[index].title}}</p>
            </div>
            </div>
        </div> -->
    </div>
   </div>
</template>

<script type="text/ecmascript-6">
import imgtest from '@/mock/imgtest.json'
export default {
  /* eslint-disable */
  data () { 
    return { 
      imgtest
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
/* eslint-disable */
@import "../../common/stylus/mixins.styl"
@import "../../common/base/base.styl"
 .imgsingle
   box-sizing border-box
   display block
   width 100%
   height 100%
   margin 0 auto
   padding-top 10px
   overflow hidden
   .container
     padding 0
     .img_mian
       width 100%
       height 100%
      
 .img_list
   clearFix()
   maxwidth()
   box-sizing border-box
   display block
   float left
   padding-top 10px
   .fl
     float left
     .col_img
       width 100%
       height 100%
//  .img_right
//   clearFix()
//   maxwidth()
//   width 50%
//   box-sizing border-box
//   padding-bottom 25px
//   display block
//   float right
//   .col_img
//     width 100%
//     height 100%
//     float left        
</style>
