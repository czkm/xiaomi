<template>
   <div class="login">
     <div class="container">
         <el-button icon="el-icon-arrow-left" circle @click="goto('/home')"></el-button>
        <div class="row">
         <form class="col-12">
           <div class="form-group">
             <label >用户名</label>
              <input type="text" v-model="UserName" class="form-control">
           </div>
           <div class="form-group">
             <label >登录密码</label>
              <input type="password" v-model="Password" class="form-control">
           </div>
           <!-- <div class="form-group">
             <label >验证码</label>
              <div class="input-group">
                <input type="text" class="form-control">
                <div class="input-group-btn">
                  <div class="btn btn-default">获取验证码</div>
                </div>
              </div>
           </div> -->
           <div class="form-group">
             <button class="btn btn-primary btn-block " type="submit" @click="UserLogin()">立即登录</button>
           </div>
           <div class="form-group">
             <button class="btn btn-default btn-block " type="submit"  @click="goto('/Sign')">注册账号</button>
           </div>
         </form>
        </div>
   </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  /* eslint-disable */ 
  data(){ 
    return{
      UserName:'',
      Password:'',
      isLogin:''
    }
  },
  methods:{ 
   
    goto(path){
            this.$router.replace(path)
      },
    UserLogin(){  
        const url ='http://134.175.86.105:8080/XiaoMi/useres/iflogin';
        var params = new URLSearchParams();
        params.append('username', this.UserName);       //你要传给后台的参数值 key/value
        params.append('password', this.Password);
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
                //获取用户的userid 存入缓存
                  localStorage.setItem("userid",result.userid);
                  this.$router.replace('/home')
                }
              });
            }else{
                this.$alert(result.message, '状态', {
                confirmButtonText: '确定',            
              });
            }

        });
      
     
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
 .el-message-box
   width 320px !important 
 .login
   width 100%
   height 100%
   background #fff
   .btn-primary
     background-color #ff6700
     border-color #ea6c16
     &:hover
     .btn-primary
       background-color #4c94dc
       border-color #125599
</style>
