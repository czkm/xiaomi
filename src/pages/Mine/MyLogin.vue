<template>
   <div class="mylogin maxwidth">
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
        <div class="login_main">
         <el-row class="function_list">
          <el-col :span="6">
            <div class="list_icon"><i class="el-icon-edit"></i></div>
          </el-col>
          <el-col :span="14">
            <div class="list_title ">
            会员中心
            </div>
          </el-col>
          <el-col :span="4">
            <div class="list_icon">
            <i class="el-icon-arrow-right"></i>
            </div>
          </el-col>
        </el-row>
          <el-row class="function_list">
          <el-col :span="6">
            <div class="list_icon"><i class="el-icon-edit"></i></div>
          </el-col>
          <el-col :span="14">
            <div class="list_title ">
            我的钱包
            </div>
          </el-col>
          <el-col :span="4">
            <div class="list_icon">
            <i class="el-icon-arrow-right"></i>
            </div>
          </el-col>
        </el-row>
          <el-row class="function_list">
          <el-col :span="6">
            <div class="list_icon"><i class="el-icon-edit"></i></div>
          </el-col>
          <el-col :span="14">
            <div class="list_title ">
            我的优惠
            </div>
          </el-col>
          <el-col :span="4">
            <div class="list_icon">
            <i class="el-icon-arrow-right"></i>
            </div>
          </el-col>
        </el-row>
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
   clearFix()
   maxwidth()
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
   .login_main
      width 100%
     .function_list
       height 50px
       line-height 50px
       text-align center
       border-bottom 1px  #99a9bf solid
       background-color #f5f5f5
       .list_title
         text-align left

</style>
