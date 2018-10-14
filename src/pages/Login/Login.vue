<template>
   <div class="login">
     <div class="login_center">
       <div class="login_logo">
         <div class="item_icon ">
                    <i class="iconfont icon-xiaomi-white"></i>
                </div>
       </div>
       <div class="login_middle">
         <div class="login_input">
         <input class="item_account"  placeholder="手机号码">
         </div>
         <div class="login_input">
         <input class="item_account"  placeholder="短信验证码 ">
         </div>
         <div class="login_buttom">
         <input class="item_buttom"  type="button" value="立即登录/注册">
         </div>
         <div class="login_buttom">
         <input class="item_buttom"  type="button" value="用户名密码登录">
         </div>
       </div>
       <div class="login_type"></div>
       <div class="login_foot"></div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .login
   width 100%
   height 100%
   background #fff
   .login_logo

   .login_center
     padding-top 25%
     width 80%
     margin 0 auto
     display block
     background-color red
     .login_buttom
       border-radius: 6px
       width 100%
       height 30px
       margin 0 auto
       display block
       padding-bottom 2px
       text-align center
       margin-bottom 20px
       .item_buttom
         display block
         height 100%
         width 100%
         background-color #ff6700
     .login_input
       width 100%
       height 50px
       margin 0 auto
       display block
       padding-bottom 2px
       background-color green
       .item_account
         width 100%
         height 50px
         text-align left
         line-height 50px
         bottom-border-1px(#f5f5f5)
         border-bottom  2px solid #f5f5f5

</style>
