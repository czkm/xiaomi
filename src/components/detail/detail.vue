<template>
   <div class="detail_container">
    <div class="detail_main">
        <img class="detail_img" :src="baseurl+detail[0].src" alt="">
    </div>
    <div class="detail_info ">
        <div class="detail_info_txt">
            名称：{{detail[0].title}}
        </div>
         <div class="detail_info_imgdescribe">
            描述：{{detail[0].imgdescribe}}
        </div>
        <div class="detail_info_price">
            价格：{{detail[0].price}}
        </div>
          <el-button type="primary"  @click="goto('/home')">回到主页面</el-button>
    </div>
         <div v-if="isAdd" class="col-12 btn-primary addshop" @click="ControlAdd()">
                加入购物车
        </div>
        <div v-else class="col-12 btn-danger addshop" @click="ControlAdd()">
                已加入
        </div>
        <el-button class="col-12 toshopcount" type="success" @click="goto('/ShopCount')">去结算</el-button>
        <!-- <el-button>加入购物车</el-button> -->
    <div class="detail_show">
         <img class="detail_img" src="../../../static/img/bg17.jpg" alt="">
    </div>
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
/* eslint-disable */ 
export default {
  data () {
    return {
      baseurl :'http://134.175.86.105:8080/XiaoMi',
      id: this.$route.params.id,
      detail:[1],
      isAdd :true,
      // carts:[]
    }
  },
  methods:{
    goto(path){
       this.$router.replace(path)
    },
    ControlAdd(){
      this.isAdd = false
      //向后台发送ajax请求
      let userid = localStorage.getItem("userid")
      let title = this.detail[0].title
      let price = this.detail[0].price
      let imgdescribe = this.detail[0].imgdescribe
      let src = this.detail[0].src
      console.log(imgdescribe)
      //加入购物车
        if (!localStorage.getItem("userid")) {
              this.$alert('先登录再加入购物车吧~', '状态', {
              confirmButtonText: '确定',
                 callback: action => {
                //用户选择
                  this.$router.replace('/login')
                }
              });
        }


        const url ='http://134.175.86.105:8080/XiaoMi/cartAPi/edit';
        var params = new URLSearchParams();
        params.append('userid', localStorage.getItem("userid"));       //你要传给后台的参数值 key/value
        params.append('title', this.detail[0].title);
        params.append('price', this.detail[0].price);      
        params.append('imgdescribe', this.detail[0].imgdescribe);
        params.append('src', this.detail[0].src);
        this.$axios({
            method: 'post',
            url:url,
            data:params
        }).then((res)=>{
              console.log(res.data);
               let result = res.data;
          if(result.statusCode===1){
              //调用el弹窗
              this.$alert(result.message, '状态', {
              confirmButtonText: '确定',
                 callback: action => {
                //用户选择
                  localStorage.setItem("userid",result.userid);
                  this.$router.replace('/home')
                }
              });
            }
    });
      
    }
  },

  mounted() {
    // this.$store.dispatch('getImgList')
    let a = this.$route.params.id
    axios.get('http://134.175.86.105:8080/XiaoMi/img/postImgdescribe/'+a)
      .then(res => {
        console.log(res.data);
        this.detail = res.data
        // console.log(imgList);
      });
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
    .el-message-box
       width 320px !important 
    .detail_container
      width 100%
      clearFix()
      maxwidth()
      position relative
      .detail_img
        width 100%
        height 100%
      .detail_info
        width 100%
      .addshop
        height 50px
        text-align center
        line-height 50px
        position absolute
        bottom 0px
      .toshopcount
        height 50px
        text-align center
        line-height 30px
        position absolute
        bottom 50px

</style>
