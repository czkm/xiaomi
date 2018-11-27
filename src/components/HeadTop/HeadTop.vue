<template>
    <div class="headguide">
        <router-link tag="div" to="/home" >
          <div class="item_icon left_icon">
            <i class="iconfont iconfont_left icon-jiantou1" ></i>
        </div>
        </router-link>
            <div class="middle">
                <div class="head_txt">{{title}}</div>
            </div>
         <div class="item_icon right_icon" >
            <i class="iconfont iconfont_right icon-sousuo" ></i>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: String
  },
  methods: {
    // back () {
    //   this.$router.go(-1)
    // }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
   .headguide
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
      height 100%
      margin-left 50%
    .iconfont_right
      width 100%
      height 100%
      margin-right  50%
    .left_icon
      display block
      float left
      line-height 45px
      width 10%
      margin 0 auto
    .right_icon
      display block
      float right
      line-height 45px
      width 10%
    .middle
      float left
      display flex
      align-items center
      text-align center
      vertical-align inherit
      // float left
      width 80%
      height 45px
      margin 0 auto
      border 0
      background-color #f2f2f2
      .head_txt
        text-align center
        margin 0 auto
</style>
