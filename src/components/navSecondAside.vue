<template>
  <div class="page-sec-aside">
    <!-- 如果当前是店铺 -->
    <div v-show="producted == '/store/detail'">
      <div class="page-sec-title">店铺管理</div>
        <ul>
          <router-link to="/store/detail" class="link nav-list active" tag="li" >
            <span class="item-icon-name">店铺概况</span>
          </router-link>
        </ul>
      </div>
      <!-- 如果当前是商品 -->
    <div v-show="producted.indexOf('goods') > -1">
      <div class="page-sec-title">商品管理</div>
        <ul>
          <router-link to="/goods/manager" class="link nav-list" tag="li" >
            <span class="item-icon-name">商品管理</span>
          </router-link>
          <router-link to="/goods/group" class="link nav-list" tag="li" >
            <span class="item-icon-name">商品分组</span>
          </router-link>
        </ul>
      </div>
      <!-- 如果当前是订单 -->
    <div v-show="producted.indexOf('order') > -1">
      <div class="page-sec-title">订单管理</div>
        <ul>
          <router-link to="/order/manager" class="link nav-list" tag="li" >
            <span class="item-icon-name">所有订单</span>
          </router-link>
          <router-link to="/order/manager1" class="link nav-list" tag="li" >
            <span class="item-icon-name">订单设置</span>
          </router-link>
        </ul>
      </div>
      <!-- 如果当前是客户 -->
    <div v-show="producted.indexOf('client') > -1">
      <div class="page-sec-title">客户管理</div>
        <ul>
          <router-link to="/client/manager" class="link nav-list" tag="li" >
            <span class="item-icon-name">客户管理</span>
          </router-link>
        </ul>
      </div>
      <!-- 如果当前是数据 -->
    <div v-show="producted.indexOf('data') > -1">
      <div class="page-sec-title">数据中心</div>
        <ul>
          <router-link to="/data/analysis" class="link nav-list" tag="li" >
            <span class="item-icon-name">数据分析</span>
          </router-link>
        </ul>
      </div>
       <!-- 如果当前是营销 -->
    <div v-show="producted.indexOf('sale') > -1">
      <div class="page-sec-title">应用和营销</div>
        <ul>
          <router-link to="/sale/center" class="link nav-list" tag="li" >
            <span class="item-icon-name">营销中心</span>
          </router-link>
        </ul>
      </div>
       <!-- 如果当前是营销 -->
    <div v-show="producted.indexOf('setting') > -1">
      <div class="page-sec-title">应用和营销</div>
        <ul>
          <router-link to="/setting/center" class="link nav-list" tag="li" >
            <span class="item-icon-name">通用中心</span>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        asideList: [] //侧边栏的一级菜单
      }
    },
    methods:{
     
    },
    computed:{
      producted(){
        return this.$route.path;
     } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-sec-title{
  height: 82px;
  line-height: 82px;
  text-align: center;
  font-size: 14px;
}
.page-sec-aside{
  margin-left: 90px;
  width: 90px;
  border-right: 1px solid #dfdfdf;
}
.page-sec-aside ul li{
  height: 36px;
  line-height: 36px;
  margin-bottom: 14px;
  text-align: center;
  cursor: pointer;
}
/* .page-sec-aside ul li.active{
  background: #f3f3f3;
  color: #FF2B2B;
} */
.page-sec-aside .router-link-active{
    background: #f3f3f3;
    color: #FF2B2B;
 }
</style>
