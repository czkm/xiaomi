<template>
  <div class="headshow">
         <div  class="">全部
             <div class="back_icon fr" @click="showToggle()" >^^^^</div>
             </div>
    <div class="container" v-if="show" >
        <div class="row" >
        <div class="col-12 show_col-12">
            <div  class="btn-wrap " >
                    <div  class="extra-btn col-3 " >推荐</div>
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
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
export default {
 data: function () { 
    return { 
        show : true
    }
 },

    methods:{
			showToggle:function(){
              
                console.log("1")
             this.show = !this.show
                 console.log(show)
			}
		}
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "~@/common/stylus/mixins.styl"
.headshow
  min-width 330px
  clearFix()
  bottom-border-1px(#FFCCCC)
  width 100%
//   height 100px
  background-color #ffffff
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
  

    

</style>
