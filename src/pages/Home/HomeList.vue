<template>
   <div class="homelist">
       <div class="home_list"><img class="list_img" src="./img/homelist1.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist2.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist3.jpg" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist4.png" alt=""></div>
       <div class="home_list"><img class="list_img" src="./img/homelist5.png" alt=""></div>
   </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .homelist
   height 75px
   top-border-1px(#f5f5f5)
   .home_list
     float left
     width 20%
     .list_img
       width 100%
       height 100%
</style>
