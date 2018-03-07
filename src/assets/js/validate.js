import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate 
const dictionary = {
   zh_CN: {
      messages: {
        required: ( field )=> "请输入正确的" + field + "格式"
      },
      attributes:{
        email:'邮箱',
        password:'密码',
        name: '账号',
        phone: '手机',
        verifiy:'手机验证码'
      }
  }
};

Validator.updateDictionary(dictionary);

// 手机号码的验证
Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

// 手机号码的验证
Validator.extend('verifiy', {
  messages: {
    required: ( field )=> field + "不能为空",
    zh_CN:field => field + '必须是6位数字',
  },
  validate: value => {
    return value.length == 6 && /\d{6}/.test(value)
  }
});

// 手机号码的验证
Validator.extend('password', {
  messages: {
    zh_CN:field => field + '应该8~20字母和数字',
  },
  validate: value => {
    return  value.length >= 8 && value.length <= 20  && /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,20})$/.test(value)
  }
});