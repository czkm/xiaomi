<template>
   <div class="homelist">
       <!-- <div class="home_list"><img class="list_img" src="./img/homelist1.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist2.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist3.jpg" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist4.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist5.png" alt=""></div> -->
        <div class="home_list"  v-for="(n, index) in home_list.length  " :key="index">
                    <img class="list_img" :src="home_list[index].src" alt="">
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */ 
export default { 
  data () {
    return {
      home_list :[
         { "title": "123", "src": "../../../static/img/list_img/homelist1.png" },
         { "title": "123", "src": "../../../static/img/list_img/homelist2.png" },
         { "title": "453", "src": "../../../static/img/list_img/homelist3.jpg" },
         { "title": "453", "src": "../../../static/img/list_img/homelist4.png" },
         { "title": "453", "src": "../../../static/img/list_img/homelist5.png" }
      ]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .homelist
   clearFix()
   maxwidth()
   height 75px
   top-border-1px(#f5f5f5)
   .home_list
     float left
     width 20%
     clearFix()
     .list_img
       width 100%
       height 100%
</style>
