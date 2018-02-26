<template>
  <div id="page-aside">
    <div class="hy-logo">
      <h1 class="hy-logo-icon">HYOOU微商城</h1>
    </div>
    <ul class="aside-list aside-fir-list">
      <router-link v-for="(item,index) in asideList" :to="item.path" class="link nav-list" tag="li" @click.native="opensecNav(index)" :key="index"><i :class="[item.icon,'item-icon']"></i><span class="item-icon-name">{{ item.name }}</span></router-link>
    </ul>
    <div class="person-info">
      <el-dropdown :show-timeout="0">
        <span class="el-dropdown-link">
          15220759245<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
     </el-dropdown>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        asideList: [ //侧边栏的一级菜单
          {
            name:"概况",
            path:'/index',
            active: false,
            icon:'hyoou-el-icon-survey',
            secondList:[]
          },
          {
            name:"店铺",
            path:'/store',
            active: false,
            icon:'hyoou-el-icon-store'
          },
          {
            name:"商品",
            path:'/goods',
            active: false,
            icon:'hyoou-el-icon-goods',
            secondList:[]
          },
          {
            name:"订单",
            path:'/order',
            active: false,
            icon:'hyoou-el-icon-order',
            secondList:[]
          },
          {
            name:"客户",
            path:'/client',
            active: false,
            icon:'hyoou-el-icon-client',
            secondList:[]
          },
          {
            name:"数据",
            path:'/data',
            active: false,
            icon:'hyoou-el-icon-data',
            secondList:[]
          },
          {
            name:"营销",
            path:'/sale',
            active: false,
            icon:'hyoou-el-icon-sale',
            secondList:[]
          },
          {
            name:"设置",
            path:'/setting',
            active: false,
            icon:'hyoou-el-icon-setting',
            secondList:[]
          },
        ],
        // idx来控制二级菜单的内容
        idx: 0
      }
    },
    methods:{
      opensecNav(index) {
        this.idx = index
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .page-aside{
  position: relative;
 }
 .hy-logo{
  height: 120px;
  background: #4B4646;
  overflow: hidden;
 }
 .hy-logo-icon{
  width: 32px;
  height: 32px;
  margin: 44px auto 0;
  border-radius: 3px;
  background: url('../assets/hy_logo.png') no-repeat center center;
  background-color: #fff;
  background-size: 25px 25px;
  text-indent: -999px;
 }
 .aside-list{
  float: left;
  width: 90px;
  height: 600px;
 }
 .aside-fir-list{
  background: #4B4646;
  color: #B9B9B9;
 }
 .aside-list .nav-list{
  position: relative;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 14px;
  font-size: 14px;
  cursor: pointer;
 }
 .aside-fir-list .nav-list:hover{
  background: #fff;
  color: #FF2B2B;
 }
 .aside-list .nav-list .item-icon{
  position: absolute;
  left: 5px;
  top: 1px;
  height: 18px;
  width: 18px;
  vertical-align: middle;
 }
 .aside-list .nav-list .item-icon-name{
  vertical-align: middle;
 }
 .person-info{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  word-break: break-word;
  padding-top: 13px;
  background: #6C6565;
  color: #fff;
 }
 .aside-fir-list .router-link-active{
    background: #fff;
    color: #FF2B2B;
 }
 .el-dropdown{
  cursor: pointer;
  color: #fff;
 }
 .el-dropdown-selfdefine{
  display: block;
  width: 66px;
  height: 100%;
  line-height: 30px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;
 }
</style>
