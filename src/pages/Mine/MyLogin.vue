<template>
   <div class="mylogin">
       <div class="login_top">
           <div class="login_box"><img class="login_img" src="./img/login.png" alt=""></div>
           <div class="login_txt"></div>
       </div>

   </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .mylogin
   top 0
   .login_top
     height 60px
     width 100%
     background-color #f37d0f
     .login_box
       width 80px
       height 80px
       .login_img
         width 100%
         height 100%
</style>
