<template>
  <div class="HeaderGuide">
    <div class=" left_icon">
            <img class="iconfont_left" src="./img/logo.png" alt="">
          </div>
    <div class="header_middle item_icon">
            <i class="iconfont  icon-sousuo search_img" ></i>
        <input class="header_search"  placeholder="搜索商品名称">
    </div>
    <div class=" right_icon" >
            <img class="iconfont_right" src="./img/user.png" alt="">
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .HeaderGuide
    overflow hidden
    background-color #fff
    bottom-border-1px(#f5f5f5)
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    background-color #f2f2f2
    .iconfont_left
      width 100%
      height 50%
      max-width 100px
    .iconfont_right
      width 50%
      height 50%
      max-width 100px
    .left_icon
      display block
      float left
      line-height 45px
      width 10%
      margin 0 auto
      height 45px
      padding-left 10px
    .right_icon
      display block
      float right
      line-height 45px
      width 10%
      height 45px
    .header_middle
      float left
      display block
      align-items center
      text-align center
      vertical-align inherit
      // float left
      width 80%
      height 45px
      margin 0 auto
      padding 0 10px 0 10px
      background-color #f2f2f2
      position relative
      .search_img
        width 20px
        height 20px
        position absolute
        top 30%
        padding-left 10px
      .header_search
        width 100%
        height 100%
        padding-left 30px
</style>
