<template>
   <div class="headguide">
        <div class="head_logo">
            <img class="logo" src="./img/logo.png" alt="">
        </div>
       <div class="head_search">
            <div class="head_middle">
                <div class="item_icon">
                    <i class="iconfont icon-sousuo" ></i>
                </div>
                <input type="text" placeholder="请输入关键字">
            </div>
       </div>
       <div class="head_user">
             <img class="user" src="./img/user.png" alt="">
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .headguide
    background-color #fff
    bottom-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .head_search
      position fixed
      width 200px
      height 30px
      float left
      margin-left 65px
      margin-top 13px
    .head_logo
      z-index 10
      position fixed
      float right
      margin-left 20px
      margin-top 14px
    .logo
      width 80%
      height 25px
    .user
      width 26px
      height 26px
      float right
      margin-right 20px
      margin-top 14px
    .head_middle
      display flex
      align-items: center
      border 1px solid #e5e5e5
      text-align left
      width 100%
      color rgba(0,0,0,.3)
      background-color #fff
    //   float left
    //   margin-left 80px
    //   .iconfont
    //     font-size 22px
    //     color #fff
    // .h
</style>
