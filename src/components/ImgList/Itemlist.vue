<template>

   <div class="">
     <!-- <div>{{imglist[0].lmglist[0].title}}</div> -->
     <div v-for="(j, index) in 4" :key="index">
  <div class="imgsingle">
          <div class="container" v-for="(n, index) in imgList[0].singleImg.length   " :key="index">
              <div class="row">
              <div class="col-12">
                <img  class="img_mian " :src="baseurl+imgList[0].singleImg[index].src" alt="">
              </div>
              </div>
          </div>
  </div>
       <div class="img_list">
          <div class="col-6 fl" v-for="(n, index) in imgList.length" :key="index" >
           <router-link tag="div" :to="{ name:'detail', params: {id: imgList[0].imgList[index].id} }" >
          <img  class="col_img " :src="baseurl+imgList[0].imgList[index].src" alt="" @click="godetail(imgList[0].imgList[index].id)">
            </router-link>
          <!-- <span>{{imgList[0].imgList[index].id}}</span> -->
          <h6 > name:{{imgList[0].imgList[index].title}}</h6>
          <h6 > name:{{imgList[0].imgList[index].price}}</h6>
          </div>
      </div>
    </div>
   </div>
</template>

<script type="text/ecmascript-6">
// import imgtest from '@/mock/imgtest.json'
// import{mapState}from 'vuex'
// import {reqImgList} from '@/api'
import axios from 'axios'
export default {
  /* eslint-disable */
  data () { 
    return { 
      baseurl :'http://134.175.86.105:8080/XiaoMi',
      imgList : []
    }
  },

  mounted(){
    // this.$store.dispatch('getImgList')
    axios.get('http://134.175.86.105:8080/XiaoMi/img'+'/imglist')
      .then(res =>  {
        console.log(res.data);
        this.imgList = res.data
        // console.log(imgList);    
      })    
  },
  methods:{
    godetail(id){
    //获取商品id查看详情
    console.log(id)
  
     
    }
  }


}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
/* eslint-disable */
@import "../../common/stylus/mixins.styl"
@import "../../common/base/base.styl"
 .imgsingle
   box-sizing border-box
   display block
   width 100%
   height 100%
   margin 0 auto
   padding-top 10px
   overflow hidden
   .container
     padding 0
     .img_mian
       width 100%
       height 100%
      
 .img_list
   clearFix()
   maxwidth()
   box-sizing border-box
   display block
   float left
   padding-top 10px
   .fl
     float left
     .col_img
       width 100%
       height 100%
//  .img_right
//   clearFix()
//   maxwidth()
//   width 50%
//   box-sizing border-box
//   padding-bottom 25px
//   display block
//   float right
//   .col_img
//     width 100%
//     height 100%
//     float left        
</style>
