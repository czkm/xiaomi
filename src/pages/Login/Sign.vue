<template>
   <div class="">
       <!-- eslint-disable -->
    <el-container>
        <el-header>   <el-button icon="el-icon-arrow-left" circle @click="goto('/login')"></el-button> </el-header>
        <el-main>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户姓名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
           
            <el-form-item label="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
             <el-form-item label="age">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.sex">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户生日">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>

              <el-form-item label="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
           
            <el-form-item label="详细地址">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goto('home')">取消</el-button>
            </el-form-item>
            </el-form>
            </el-main>
        <el-footer>主要区域容器</el-footer>
    </el-container>    
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  /* eslint-disable */ 
  data() {
    return {
      form: {
        username: "",
        password:"",
        email:"",
        sex: "",
        birthday: "",
        phone: "",
        age: "",
        address: ""
      }
    }
  },
  methods: {
    onSubmit() {
       
          if (this.form.username=='') {
            this.$alert('姓名不能为空', '状态', {
              confirmButtonText: '确定',
              })
            return false    
        } if (this.form.password=='') {
            this.$alert('密码不能为空', '状态', {
              confirmButtonText: '确定',
              })
            return false    
        }
        
        //  if () {
        //     this.$alert('密码不能为空', '状态', {
        //       confirmButtonText: '确定',
        //       })
        //     return false    
        // }
       const url ='http://134.175.86.105:8080/XiaoMi/useres/edit';
        var params = new URLSearchParams();
        params.append('username', this.form.username);       //你要传给后台的参数值 key/value
        params.append('password', this.form.password);
        params.append('email', this.form.email);      
        params.append('birthday', this.form.birthday);
        params.append('sex', this.form.sex);
        params.append('phone', this.form.phone);      
        params.append('age', this.form.age);
        params.append('address', this.form.address);
 
        this.$axios({
            method: 'post',
            url:url,
            data:params
        }).then((res)=>{
               let result = res.data;
              //调用el弹窗
              this.$alert(result.message, '状态', {
              confirmButtonText: '确定',
              });
               this.$router.replace('/login')
        })
    
    },
     goto(path){
            this.$router.replace(path)
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
     .el-message-box
       width 320px !important 
</style>
