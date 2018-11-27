<template>
   <div class="footer_guide">
      <a href="javascript:;" class="guide_item" :class="{on: '/home/recommend'===$route.path}" @click="goto('/home')">
          <span class="item_icon">
              <i class="iconfont icon-shouye" ></i>
          </span>
          <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/classify'===$route.path}" @click="goto('/classify')">
          <span class="item_icon">
              <i class="iconfont icon-fenlei"></i>
          </span>
            <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/shopping'===$route.path}" @click="goto('/shopping')">
          <span class="item_icon">
              <i class="iconfont icon-gouwuche"></i>
          </span>
             <el-badge :value="12" class="item">
            <span>购物车</span>
               </el-badge>
      </a>
      <a href="javascript:;" class="guide_item" :class="{on: '/mine'===$route.path}" @click="goto('/mine')">
          <span class="item_icon">
              <i class="iconfont icon-yonghu"></i>
          </span>
            <span>我的</span>
      </a>
   </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
export default {
    methods:{
        goto(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      color #999999
      &.on
        color #ff6700
      span
        font-size 12px
        .iconfont
          font-size 22px
</style>
