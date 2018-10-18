<template>
<div class="img_double">
<div class="container" v-for="(n, index) in 2" :key="index">
<div class="row" >
 <div class="col-6">
   <img  class="col_img " :src="a[0].src" alt="">
 </div>
 <div class="col-6">
   <img  class="col_img " :src="a[0].src" alt="">
      <img  class="col_img " :src="a[1].src" alt="">

 </div>
  <p class="col_txt" v-for="(ob, index) in a" :key="index" > name:{{ob.title}}</p>
 </div>
 </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  /* eslint-disable */
  data: function () { 
    return { 
      'a': [ 
         { "title": "123", "src":"../../../static/img/bg15.jpg" },
         { "title": "456", "src":"../../../static/img/bg16.jpg" },
     ],
     'b': [ 
         { "title": "666", "src":"../../../static/img/bg17.jpg" },
         { "title": "7777", "src":"../../../static/img/bg18.jpg" },
     ]  
   } 
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
    float left


 
//  .col-xl-6
//   width 50%

</style>
