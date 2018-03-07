<template>
  <div class="login-page">
    <div class="login-box">
        <div class="login-head">
            <img src="../assets/hy_logo.png" class="login-logo">
            <span class="hyoou-name">红柚</span>
            <span class="page-name">登录</span>
        </div>
        <div class="login-form">
            <p class="form-list phone-list" :class="{ 'control': true }">
                <label for="phone">手机号码</label>
                <input 
                    placeholder="今后使用手机号登录" 
                    autocomplete="off" 
                    id="phone"
                    name="phone"
                    v-model="phoneVal"
                    v-validate="'required|phone'"
                    :class="{'input': true, 'is-danger': errors.has('phone') }"
                    >
                <span v-show="errors.has('phone')" class="help is-danger">* {{ errors.first('phone') }}</span>
            <p class="form-list password-list" :class="{ 'control': true }">
                <label for="password">设置密码</label>
                <input 
                    placeholder="请输入密码" 
                    autocomplete="off" 
                    id="password"
                    name="password"
                    v-model="passwordVal"
                    v-validate="'required|password'"
                    :class="{'input': true, 'is-danger': errors.has('password') }" 
                    >
                <span v-show="errors.has('password')" class="help is-danger">* {{ errors.first('password') }}</span>
            </p>
            <!-- <p class="form-list verifiy-list">
                <span>验证码</span>
                <input placeholder="请输入验证码" autocomplete="off">
            </p> -->
            <p class="form-list">
                <el-checkbox v-model="checked">三天内自动登录</el-checkbox>
                <a href="" class="forget-pwd">忘记密码?</a>
            </p>
        </div>
        <div class="submit-box">
            <button class="submit-btn" @click="checkSatus" :class="{'pass':submitPass}">登录</button>
            <router-link :to="'/register'" tag="a">免费注册 , 轻松开店</router-link>
        </div>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        checked: false,
        phoneVal:'',
        passwordVal:''
      };
    },
    methods: {
      // 此方法是验证表单中所有的正确性。
      checkSatus(){
        this.$validator.validateAll().then((msg)=>{
          if(msg){
              this.$router.push('/index'); 
          }
        })
      }
    },
    computed: {
      // 表单验证正确才能跳转
      submitPass() {
          return this.phoneVal.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phoneVal) && this.passwordVal.length >= 8 && this.passwordVal.length <= 20  && /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,20})$/.test(this.passwordVal)
        }
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-page{
    width: 100%;
    margin-left: -50px;
  }
  .login-box{
    width: 470px;
    margin: 40px auto;
  }
  .login-head{
    padding-bottom: 20px;
    border-bottom: 1px solid #E2E2E2;
  }
  .login-head .login-logo{
    width: 34px;
    padding: 5px 10px;
    vertical-align: middle;
    background-color: #E8E8E8;
    border-radius: 6px;
  }
  .login-head .hyoou-name{
    vertical-align: middle;
    margin-left: 10px;
    font-size: 24px;
    color: #333;
  }
  .login-head .page-name{
    vertical-align: middle;
    margin-left: 30px;
    font-size: 18px;
    color: #333;
  }
  .login-form{
    padding: 10px 30px;
  }
  .login-form .form-list{
    position: relative;
    border-bottom: 1px solid #E2E2E2;
  }
  .login-form .form-list:last-child{
    padding-top: 25px;
    color: #666;
    border-bottom: none;
  }
  .login-form .form-list label{
    position: absolute;
    width: 80px;
    height: 50px;
    line-height: 50px;
  }
  .login-form .form-list:last-child label{
    width: auto;
    height: 30px;
    line-height: 12px;
  }
  .login-form .form-list span{
    padding-left: 80px;
    font-weight: bold;
  }
  .login-form .form-list input{
    width: 100%;
    height: 50px;
    padding-left: 80px;
    border: none;
    overflow: hidden;
  }
  .forget-pwd{
    float: right;
    color: #666;
  }
  .submit-box{
    padding: 0 30px;
  }
  .submit-box .submit-btn{
    width: 100%;
    height: 50px;
    margin-top: 60px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
  .submit-box .submit-btn.pass{
    background-color: red;
  }
  .submit-box a{
    margin-top: 10px;
    float: right;
    color: #FF992B;
  }

</style>
