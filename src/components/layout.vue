<template>
  <div class="layout-page">
      <div class="aisde" v-show="loginRegisterShow">
          <aside-page></aside-page>
      </div>
      <aside-sec-page v-show="indexLoginRegisterShow"></aside-sec-page>
      <div class="content" :class="{'m-top':indexShow,'login':loginShow,'register':registerShow}">
        <Head v-show="indexLoginRegisterShow"></Head>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="index-right" :class="{'none-border-left':indexShow}" v-show="loginRegisterShow">
       <right-aside v-if="indexShow"></right-aside>
       <right-aside-simple v-else></right-aside-simple>
      </div>
  </div>
</template>
<script>
/*解决火狐侧边栏的滚动条*/
 import '_jquery.nicescroll@3.7.6@jquery.nicescroll/dist/jquery.nicescroll.min.js'
/*引用侧边栏的组件*/
 import asidePage from './navAside' //左边一级菜单
 import asideSecPage from './navSecondAside' //左边二级菜单
 import rightAside from '../components/rightAside' //右边只有首页时候才显示的
 import rightAsideSimple from '../components/rightAsideSimple' //右边除了主页的时候才显示
 import Head from '../components/head.vue' //头部
 export default {
    components:{
      rightAsideSimple,
      rightAside,
      asidePage,
      asideSecPage,
      Head
    },
    data() {
      return {

        }
    },
    methods:{
      
    },
    computed:{
      producted(){
        return this.$route.path;
      },
      // 如果本页面是首页，要改变一些样式和结构
      indexShow(){
        return this.producted == '/index';
      },
      loginShow(){
        return this.producted == '/login';
      },
      registerShow(){
        return this.producted == '/register';
      },
      // 如果是登录或者是注册页面或者是首页，让头部和二级菜单隐藏
      indexLoginRegisterShow(){
        return !this.indexShow && !this.loginShow &&!this.registerShow;
      },
      // 如果是登录或者是注册页面，让左边和右边的侧边栏隐藏
      loginRegisterShow(){
        if(this.loginShow || this.registerShow){
          return false;
        }else{
          return true;
        }
      }
    } 
  }
$(document).ready(function(){
  $('#aside').niceScroll({
    cursorcolor: "#ccc",//#CC0071 光标颜色
    cursoropacitymax: 0, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
    cursorwidth: "5px", //像素光标的宽度
    cursorborder: "0", // 游标边框css定义
    cursorborderradius: "5px",//以像素为光标边界半径
    autohidemode: true //是否隐藏滚动条
});
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-page{
    display: flex;
  }
  .aisde{
    position: fixed;
    left: 0;
    top: 0;
    min-width: 90px;
    height: 100%;
    background: #4B4646;
  }
  .content{
    margin-left: 0px;
    flex: 3;
    background: #f3f3f3;
  }
  .m-top, .login{
    margin-top: 70px;
    background: #fff;
    margin-left: 90px;
  }
  .m-top, .register{
    margin-top: 70px;
    background: #fff;
    margin-left: 90px;
  }
  .index-right{
    width: 240px;
    /*margin-right: 30px;*/
    margin-top: 70px;
    border-left: 1px solid #dfdfdf; 
  }
  .none-border-left{
    border-left: none;
    margin:70px 20px 0 10px;
  }
</style>
