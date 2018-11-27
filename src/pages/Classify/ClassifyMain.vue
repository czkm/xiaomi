<template>
<div class="classifylist ">
  <!-- 左侧的菜单选项-->
  <div  class="menu-wrapper" ref="menuWrapper">
    <!-- 菜单对应的是食物分类列表-->
     <ul>
         <!--current-->
          <li class="menu-item" v-for="(item, index) in classifyname"  :class="{current: index===currentIndex}"  @click="clickitem(index)" :key="index" >
            <span  class="text bottom-border-1px "  >
              <!-- <img class="icon" :src="good.icon" v-if="good.icon"> -->
              {{item.name}}
            </span >
          </li>
      </ul>
  </div>
  <!-- 右侧的商品列表-->
  <div class="shops-wrapper" ref="shopsWrapper">
    <!-- 右侧的商品列表是根据左侧的分类列表展现的-->
    <!-- 所以右侧是在一个分类标题列表里面嵌套着各类商品列表-->
    <ul ref="ShopsUl">
         <li class="container shop-list-hook"  v-for="(item, index) in classifyitem" :key="index" >
             <img   class="col-12 fd " :src="baseurl+item.singleImg[0].src">
            <!-- <div class="shoptitle" v-for="(item, index) in classifyname" :key="index" >
              {{item.name}}
               </div> -->
               <div class="row col-12" >
            <div class="col-4" v-for="(info, index) in classifyitem[index].imgList" :key="index">
                <img width="65" height="65" :src="baseurl+info.src">
                <h6 class="shoptitle">{{info.title}}</h6>
            </div>
            </div>
          </li>
    </ul>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
// import classifytest from '@/mock/classifytest.json'
import axios from 'axios'

/* eslint-disable */ 
export default {
  data () {
    return { 
     baseurl :'http://134.175.86.105:8080/XiaoMi',
     scrollY:0,//右侧滑动 y坐标
     tops:[], 
     classifyname:[],//存储商品
     classifyitem:[]
   }
  },
  beforeMount(){
    this.Ajaxcate()
    this.AjaxcateImg()  
  },
  mounted(){
         
        // this.$nextTick(() => {
           /* code */
           setTimeout(() => {
               this._initScroll()
                this._initTops ()
           }, 2000);
      
             
    // })
    // })
        
  },
   computed: {
    // 计算得到当前分类的下标
    currentIndex () { // 初始和相关数据发生了变化
      // 得到条件数据
      const {scrollY, tops} = this
      // 根据条件计算产生一个结果
      const index = tops.findIndex((top, index) => {
        // scrollY>=当前top && scrollY<下一个top
        return scrollY >= top && scrollY < tops[index + 1]
      })
      // 返回结果(也就是当前的scrollY值属于第几个li区间)
      return index
    }
  },
  
  // updated() {
  //   this._initTops()
  // },
  methods:{
    //初始化滚动 非事件回调函数相关加下划线
    _initScroll(){
      new BScroll('.menu-wrapper', {
        click: true
      })
      this.shopScroll= new BScroll('.shops-wrapper', {
        probeType: 2,
        click: true
    
      }) 
      this.shopScroll.on('scroll',({x,y})=>{
        console.log(x,y);
        this.scrollY=Math.abs(y)
      }),
      // 给右侧列表绑定scroll结束的监听
      this.shopScroll.on('scrollEnd', ({x, y}) => {
          console.log('scrollEnd', x, y)
          this.scrollY = Math.abs(y)
        })
      },
    
    _initTops () {
        // 1.初始化tops
        const tops = []
        let top = 0
        tops.push(top)
        // 2.收集
        // 找到所有分类的li
        // const lis = this.$refs.ShopsUl.children
        const lis = this.$refs.ShopsUl.getElementsByClassName('shop-list-hook')
        Array.prototype.slice.call(lis).forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })
        // 3.更新数据
        this.tops = tops
        console.log(tops);
        
      },
    clickitem (index) {
      // console.log(index)
      // 使用右侧列表滑动到对应的位置
      // 得到目标位置的scrollY
      const scrollY = this.tops[index]
      // 立即更新scrollY(让点击的分类项成为当前分类)
      this.scrollY = scrollY
      // 平滑滑动右侧列表 better-scroll里的方法
      this.shopScroll.scrollTo(0, -scrollY, 300)
    },
    Ajaxcate(){
      axios.get('http://134.175.86.105:8080/XiaoMi/img'+'/cate')
      .then(res =>  {
        console.log(res.data);
        this.classifyname = res.data
        // console.log(imgList);
      })
    },
    AjaxcateImg(){
       axios.get('http://134.175.86.105:8080/XiaoMi/img'+'/cateImg')
      .then(res =>  {
        console.log(res.data);
        this.classifyitem = res.data
        // console.log(imgList);
       
      })
    }

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
        height 80px
        text-align center
        line-height 80px
        border 1px solid red
        &.current
          position: relative
          margin-top: -1px
          background: #fff
          color: green
          font-weight: 700
    .shops-wrapper
      flex: 1
      .fd
        height 95px
      .shoptitle
        text-align center
</style>
