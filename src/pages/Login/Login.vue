<template>
   <div class="login">
     <div class="container">
        <div class="row">
         <form class="col-12">
           <div class="form-group">
             <label >用户/手机/邮箱</label>
              <input type="text" class="form-control">
           </div>
           <div class="form-group">
             <label >登录密码</label>
              <input type="password" class="form-control">
           </div>
           <div class="form-group">
             <label >验证码</label>
              <div class="input-group">
                <input type="text" class="form-control">
                <div class="input-group-btn">
                  <div class="btn btn-default">获取验证码</div>
                </div>
              </div>
           </div>
           <div class="form-group">
             <button class="btn btn-primary btn-block " type="submit">立即登录/注册</button>
           </div>
           <div class="form-group">
             <button class="btn btn-default btn-block " type="submit">账号密码登录</button>
           </div>
         </form>
        </div>
   </div>
</div>
</template>

<script type="text/ecmascript-6">
export default { }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
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
