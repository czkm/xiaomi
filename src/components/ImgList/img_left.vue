<template>
<div class="img_left">
<div class="container" v-for="(n, index) in 3   " :key="index">
<div class="row" >
 <div class="col-12">
   <img  class="col_img " :src="json[0].b[n].src" alt="">
 </div>
  <p class="col_txt"  > name:{{json[0].b[n].title}}</p>
 </div>
 </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  /* eslint-disable */
  data: function () { 
    return { json :[{
      'a': [ 
         { "title": "123", "src":"../../../static/img/bg15.jpg" },
         { "title": "123", "src":"../../../static/img/bg15.jpg" },
         { "title": "456", "src":"../../../static/img/bg16.jpg" },
         { "title": "453", "src":"../../../static/img/bg17.jpg" },
     ],
     'b': [ 
        { "title": "666", "src":"../../../static/img/bg21.jpg" },
        { "title": "666", "src":"../../../static/img/bg21.jpg" },
        { "title": "7777", "src":"../../../static/img/bg22.jpg" },
        { "title": "666", "src":"../../../static/img/bg23.jpg" },
        { "title": "7777", "src":"../../../static/img/bg24.jpg" },
     ]  
    }]
   }
 
  } 
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
@import "../../common/base/base.styl"
.img_left
  width 50%
  box-sizing border-box
  padding-bottom 25px
  display block
  float left
  padding-top 10px
  .col_img
    width 100%
    height 100%
    float left


 
//  .col-xl-6
//   width 50%

</style>
