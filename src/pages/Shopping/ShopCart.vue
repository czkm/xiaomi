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
                        <!-- <thead>
                            <tr> -->
                                <!-- <th>
                                    <input type="checkbox" v-model="allcheck" @click="selectall()">
                                </th> -->
                                <!-- <th>名称</th>
                                <th>价格</th>
                                <th>操作</th> -->
                            <!-- </tr>
                        </thead> -->
                        <tbody >
                            <tr v-for="(item,index) in shopcart.shopcart" :key="index">
                              <div class="col-12 pd">
                                <td class="col-1 pd">
                                <!-- <input type="checkbox" :id="'check'+index" name="checkboxs" v-model="checkeds[index]" /> -->
                                  <el-checkbox :id="'check'+index" name="checkboxs" v-model="checkeds[index]"></el-checkbox>
                                </td>
                                <td class="col-5 shop-min pd"><img class="shopimg" :src="item.subimage1Filename" /></td>
                                <td class="col-5 pd">
                                  <div>{{item.goodsTitle}} {{item.specifications}}</div>
                                  <small>售价：￥{{item.unitPrice}}</small>
                                  <p class="tmp" style=" display:block min; min-width:100px">
                                  <!-- <button @click="redus(index)" >-</button> -->
                                     <el-button icon="el-icon-minus" circle @click="redus(index)"></el-button>
                                  <input type="text" v-model="item.num" style="width:30px">
                                  <!-- <el-input v-model="item.num" tyle="width:30px"></el-input> -->
                                  <!-- <button @click="plus(index)" >+</button> -->
                                     <el-button icon="el-icon-plus" circle @click="plus(index)" ></el-button>
                                  </p>
                                </td>
                                <td class="col-2 pd">
                                    <el-button type="danger" icon="el-icon-delete"  @click="del(index)">删除</el-button>
                                    <!-- <button type="button" class="btn btn-danger" @click="del(index)">删除</button> -->
                                </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      <div class="foot">
        <div class="foot_container">
          <div class="row">
            <div class="col-4 ">共{{count}}件<p>{{totalprice}}元</p></div>
            <div class="col-4 btn-danger center" @click="goto('/classify')">
                继续购物
              </div>
            <div class="col-4 btn-primary center" @click="goto('/ShopCount')" >
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
      // allselectitrm : []
    }
  },
  methods:{
    //  ToShopcount(){
    //   console.log(1)
    //   this.$router.push({name:'ShopCount'})
    // },
    goto(path){
            this.$router.replace(path)
        },
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
      },
      count (){
         var num = 0;
        for(var i in this.shopcart.shopcart){
           if (this.checkeds[i])
           num += this.shopcart.shopcart[i].num;
          }
        return num;
         }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'

.shopcart
    display: block
    position: relative
    top 45px
    // bottom 50px
    width 100%
    background #fff
    overflow hidden
    .pd
      padding 0
      .shop-min
        min-width 100px
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
