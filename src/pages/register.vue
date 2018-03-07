<template>
  <div class="register-page">
    <div class="register-box">
        <div class="register-head">
            <img src="../assets/hy_logo.png" class="register-logo">
            <span class="hyoou-name">红柚</span>
            <span class="page-name">免费注册</span>
        </div>
        <div class="register-form">
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
            </p>
            <p class="form-list verifiy-list" :class="{ 'control': true }">
                <label for="verifiy">短信验证码</label>
                <input 
                    placeholder="请填写6位短信验证码" 
                    autocomplete="off" 
                    id="verifiy"
                    name="verifiy"
                    v-model="verifiyVal"
                    v-validate="'required|verifiy'"
                    :class="{'input': true, 'is-danger': errors.has('verifiy') }"
                    >
                <a href="javascript:;">获取验证码</a>
                <span v-show="errors.has('verifiy')" class="help is-danger">* {{ errors.first('verifiy') }}</span>
                <!-- <span class="help is-danger" v-show="verifiyShow">*验证码已过期 , 请重新获取</span> -->
            </p>
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
        </div>
        <div class="submit-box">
            <button class="submit-btn" @click="checkSatus" :class="{'pass':submitPass}">确认注册</button>
            <!-- <a href="">已有账号 , 立即登录</a> -->
            <router-link :to="'/login'" tag="a">已有账号 , 立即登录</router-link>
        </div>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        checked: false,
        verifiyVal:'',
        phoneVal:'',
        passwordVal:'',
        expired:false,
        isRouterAlive: true
      };
    },
    created(){
      this.verifiyVal = '';
      this.phoneVal = '';
      this.passwordVal = '';
    },
    methods: {
      open() {
        this.$confirm('注册成功 , 是否跳转到登录页面?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login'); 
        }).catch(() => {
          
        });
      },
      // 此方法是验证表单中所有的正确性。
      checkSatus(){
        this.$validator.validateAll().then((msg)=>{
          if(msg){
              this.open();
          }
        })
      }
    },
    computed: {
      // 表单验证正确才能跳转
      submitPass() {
          return this.phoneVal.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phoneVal) && this.verifiyVal.length == 6 && /\d{6}/.test(this.verifiyVal) && this.passwordVal.length >= 8 && this.passwordVal.length <= 20  && /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,20})$/.test(this.passwordVal)
        }
      }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register-page{
    width: 100%;
    margin-left: -50px;
  }
  .register-box{
    width: 470px;
    margin: 40px auto;
  }
  .register-head{
    padding-bottom: 20px;
    border-bottom: 1px solid #E2E2E2;
  }
  .register-head .register-logo{
    width: 34px;
    padding: 5px 10px;
    vertical-align: middle;
    background-color: #E8E8E8;
    border-radius: 6px;
  }
  .register-head .hyoou-name{
    vertical-align: middle;
    margin-left: 10px;
    font-size: 24px;
    color: #333;
  }
  .register-head .page-name{
    vertical-align: middle;
    margin-left: 30px;
    font-size: 18px;
    color: #333;
  }
  .register-form{
    padding: 10px 30px;
  }
  .register-form .form-list{
    position: relative;
    border-bottom: 1px solid #E2E2E2;
  }
  .register-form .form-list label{
    position: absolute;
    width: 80px;
    height: 50px;
    line-height: 50px;
  }
  .register-form .form-list span{
    padding-left: 80px;
    font-weight: bold;
  }
  .register-form .form-list input{
    width: 100%;
    height: 50px;
    padding-left: 80px;
    border: none;
    overflow: hidden;
  }
  .verifiy-list a{
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 50px;
    line-height: 50px;
    color: #FF992B;
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
