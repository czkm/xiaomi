<template>
   <div class="classifylist">
    <!-- 左侧的菜单选项-->
    <div class="menu-wrapper" ref="menuWrapper">
    	<!-- 菜单对应的是食物分类列表-->
        <ul>
            <li>新品</li>
            <li>手机</li>
            <li>电视</li>
            <li>电脑</li>
            <li>家电</li>
            <li>路由</li>
            <li>出行</li>
            <li>穿戴</li>
            <li>智能</li>
            <li>电源</li>
            <li>健康</li>
            <li>灯具</li>
            <li>儿童</li>
            <li>插线板</li>
            <li>音频</li>
            <li>穿戴</li>
            <li>智能</li>
            <li>电源</li>
            <li>健康</li>
            <li>灯具</li>
            <li>儿童</li>
            <li>插线板</li>
            <li>音频</li>
        </ul>
    </div>
    <!-- 右侧的食物列表-->
    <div class="shops-wrapper" ref="shopsWrapper">
    	<!-- 右侧的食物列表是根据左侧的分类列表展现的-->
        <!-- 所以右侧是在一个分类标题列表里面嵌套着各类食物列表-->
        <ul>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>南瓜粥</li>
              <li>红豆薏米美肤粥</li>
            </ul>
            <ul>
           	  <li>南瓜粥</li>
              <li>红豆薏米美肤粥</li>
            </ul>
            <ul>
           	  <li>南瓜粥</li>
              <li>红豆薏米美肤粥</li>
            </ul>
            
          </li>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>aaaaa</li>
              <li>红豆薏米美肤粥</li>
            </ul>
          </li>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>bbbbb</li>
              <li>红豆薏米美肤粥</li>
            </ul>
          </li>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>ccccc</li>
              <li>红豆薏米美肤粥</li>
            </ul>
          </li>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>dddddd</li>
              <li>红豆薏米美肤粥</li>
            </ul>
          </li>
          <li class="shop-list-hook">
            <h1 class="title">折扣</h1>
            <ul>
           	  <li>eeee</li>
              <li>红豆薏米美肤粥</li>
            </ul>
          </li>
          <li>其他分类...</li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scrollY: 0, // 右侧 Y 轴滑动的坐标(越往下数值越小)
      tops: [], // 包含右侧所有分类小列表的 top 值
      food: {} // 需要显示的food
    }
  },
  mounted () {
   new BScroll('.menu-wrapper'),
   new BScroll('.shops-wrapper')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
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
    .shops-wrapper
      flex: 1
</style>
