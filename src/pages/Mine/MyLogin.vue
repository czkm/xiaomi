<template>
   <div class="mylogin">
       <div class="login_top">
           <div class="login_box">
              <router-link to="/login">
                <div class="login_center">
                <img class="login_img" src="./img/login.png" alt="">
                </div>
                <div class="login_txt">登录/注册</div>
              </router-link>
            </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .mylogin
   overflow hidden
   bottom-border-1px(#f5f5f5)
   height 100%
   background-color #f5f5f5
   .login_top
     position relative
     height 80px
     width 100%
     background-color #f37d0f
     display block
     .login_box
       position absolute
       width 100%
       height 50px
       margin auto
       top 0
       bottom 0
       .login_center
         width 50px
         height 50px
         float left
         margin-left 20px
       .login_img
         width 100%
         height 100%
       .login_txt
         height 50px
         display block
         float left
         padding-left 20px
         text-align left
         line-height 50px
         color #fff
</style>
