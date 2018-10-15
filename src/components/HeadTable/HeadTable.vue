<template>
  <div class="headtab">
    <router-link  tag="div" class="tab-item" to="/home/recommend">
        <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/phone">
        <span class="tab-link">手机</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/tv">
        <span class="tab-link">电视</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/intelligent">
        <span class="tab-link">智能</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/home/laptop">
        <span class="tab-link">笔记本</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"

.headtab
    display block
    width 100%
    height 30px
    line-height 30px
    background-color #FFCCCC
    margin-top 45px
    .tab-item
      flex 1
      text-align center
      width 20%
      float left
      .tab-link
        padding-bottom: 5px
        color $color-text-l
      &.router-link-active
        .tab-link
          color #CC9999
          border-bottom: 2px solid #CC9999
</style>
