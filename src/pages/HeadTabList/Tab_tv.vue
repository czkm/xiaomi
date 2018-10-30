<template>
   <div class="body">
       <div class="wrap">
           <div class="item">xx1</div>
           <div class="item">xx2</div>
           <div class="item">xx3</div>
           <div class="item">xx4</div>
           <div class="item">xx5</div>
           <div class="item">xx6</div>
           <div class="item">xx7</div>
           <div class="item">xx18</div>
           <div class="item">xx9</div>
           <div class="item">xx00</div>
       </div>

   </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import BScroll from 'better-scroll'

export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
  .wrap
    width 200px
    overflow-y scroll
    white-space nowrap
    width 100%
    clearFix()
    .item
      float left
      width 200px
</style>
