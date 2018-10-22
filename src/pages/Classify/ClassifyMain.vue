<template>
<div class="classifylist ">
  <!-- 左侧的菜单选项-->
  <div class="menu-wrapper" ref="menuWrapper">
    <!-- 菜单对应的是食物分类列表-->
     <ul>
         <!--current-->
          <li class="menu-item" v-for="(item, index) in classifytest.classifyinfo"  :key="index">
            <span class="text bottom-border-1px">
              <!-- <img class="icon" :src="good.icon" v-if="good.icon"> -->
              {{item.name}}
            </span>
          </li>
      </ul>
  </div>
  <!-- 右侧的食物列表-->
  <div class="shops-wrapper" ref="shopsWrapper">
    <!-- 右侧的食物列表是根据左侧的分类列表展现的-->
    <!-- 所以右侧是在一个分类标题列表里面嵌套着各类食物列表-->
    <ul>
         <div class="container"  v-for="(item, index) in classifytest.classifyinfo" :key="index">
            <h5 class="title">{{item.name}}</h5>
            <div class="row" >
            <div class="col-4" v-for="(info, index) in classifytest.classifyinfo[index].info" :key="index">
                <img width="57" height="57" :src="info.img">
                <h6>{{info.txt}}</h6>
            </div>
          </div>
          </div>
    </ul>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import classifytest from '@/mock/classifytest.json'
/* eslint-disable */ 
export default {
  data () {
    return { 
     classifytest
   }
  },
  mounted () {
   new BScroll('.menu-wrapper'),
   new BScroll('.shops-wrapper')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

@import "../../common/stylus/mixins.styl"

  .classifylist
    display: flex
    position: absolute
    top: 45px
    bottom: 50px
    width: 100%
    background: #fff
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        height 30px
        text-align center
        line-height 30px
        overflow hidden
    .shops-wrapper
      flex: 1
      .bottom-border-1px
        clearFix()
        bottom-border-1px(#f5f5f5)
</style>
