<template>
<div class="shopcart">
      <div class="container">
        <div class="row">
          <div class="col-12" v-if="shopcart.shopcart.length==0">
             <p>购物车为空</p>
          </div>
               <div class="col-12" v-else>
                    <h3 class="panel-title">购物车</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" v-model="allcheck" @click="selectall()">
                                </th>
                                <th>名称</th>
                                <th>价格</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="(item,index) in shopcart.shopcart" :key="index">
                                <td class="col-1">
                                <input type="checkbox" :id="'check'+index" name="checkboxs" v-model="checkeds[index]" />
                                </td>
                                <td class="col-5 shop-min"><img class="shopimg" :src="item.subimage1Filename" /></td>
                                <td class="col-5">
                                  <p>{{item.goodsTitle}} {{item.specifications}}</p>
                                  <p>售价：￥{{item.unitPrice}}</p>
                                  <button @click="redus(index)" >-</button>
                                  <input type="text" v-model="item.num" style="width:30px"  >
                                  <button @click="plus(index)" >+</button>
                                </td>
                                <td class="col-1">
                                    <button type="button" class="btn btn-danger" @click="del(index)">删除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      <div class="foot">
        <div class="container">
          <div class="row">
            <div class="col-4 ">共件<p>{{totalprice}}元</p></div>
            <div class="col-4 btn-default center">
                继续购物
              </div>
            <div class="col-4 btn-primary center">
                去结算
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script type="text/ecmascript-6">
import shopcart from '@/mock/shopcart.json'
/* eslint-disable */
export default {
  data () {
    return {
      shopcart: shopcart,
      allcheck: false,
      checkeds: new Array(shopcart.length),
      //商品选中
      allselectitrm : []
    }
  },
  methods:{
    plus(index){
      console.log(index)
      this.shopcart.shopcart[index].num++
    },
    redus(index){
    if (this.shopcart.shopcart[index].num === 1) return;
      this.shopcart.shopcart[index].num--
    },
    del(index){
      this.shopcart.shopcart.splice(index,1)
    },
   
  },
  computed:{
      totalprice(){
        // let total = 0
        // this.shopcart.shopcart.forEach((shopcart,index) => {
        //   total += shopcart.num * shopcart.unitPrice
        // })
        //   return total
        let total = 0
        for (let i in this.shopcart.shopcart) {
          if (this.checkeds[i])  //如果checkeds[i]的结果为truth，则进行累加
            total += this.shopcart.shopcart[i].num * this.shopcart.shopcart[i].unitPrice;
        }
        return total
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'

.shopcart
    display: block
    position: absolute
    top 45px
    // bottom 50px
    width 100%
    background #fff
    overflow hidden
    .shop-min
      min-width 50px
      min-height 50px
      .shopimg
        width 100%
        height 100%
.foot
  height 50px
  .center
    text-align center
    line-height 50px


</style>
