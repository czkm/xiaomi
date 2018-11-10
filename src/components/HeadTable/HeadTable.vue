<template>
  <div class="headtab">
    <div v-if="show===false">
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
            <span class="tab-link">笔记</span>
        </router-link>

        <div class="show_item fr" @click="showToggle()" >vvvvv</div>
    </div>

      <div class="isitem" v-if="show">
          <div  class="">全部
             <div class="back_icon fr" @click="showToggle()" >^^^^</div>
             </div>
            <div class="container"  >
                <div class="row" >
                <div class="col-12 show_col-12">
                    <div  class="btn-wrap " >
                        <router-link to="/home/recommend">
                            <div  class="extra-btn col-3 " >推荐</div>
                        </router-link>
                            <div  class="extra-btn col-3 ">手机</div>
                            <div  class="extra-btn col-3 ">智能</div>
                            <div  class="extra-btn col-3 ">电视</div>
                            <div  class="extra-btn col-3">笔记本</div>
                            <div  class="extra-btn  col-3">家电</div>
                            <div  class="extra-btn  col-3">新款游戏本</div>
                            <div  class="extra-btn col-3">双摄</div>
                            <div  class="extra-btn  col-3">全面屏</div>
                            <div  class="extra-btn  col-3">生活周边</div>
                            <div  class="extra-btn  col-3">影音娱乐</div>
                    </div>
                </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
export default { 
    data: function () { 
    return { 
        show : false
    }
 },

    methods:{
			showToggle:function() {
             this.show = !this.show
             console.log(this.show)       
            }
    }
 }
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
    position fixed
    clearFix()
    bottom-border-1px(#FFCCCC)
    .isitem
      background-color #ffffff
      z-index 10
      position absolute
      width 100%
      min-width 330px
      clearFix()
      width 100%
      .show_col-12
        padding 0
        .extra-btn
          text-align center
          float left
          height 40px
          line-height 40px
          font-size 14px
          padding-right 5px  
          padding-left 5px   
    .tab-item
      flex 1
      text-align center
      float left
      width 15%
      .tab-link
        padding-bottom: 5px
        color $color-text-l
      &.router-link-active
        .tab-link
          color #CC9999
          border-bottom: 2px solid #CC9999
</style>
