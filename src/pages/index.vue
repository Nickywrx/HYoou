<template>
  <div class="index-page" :class="{'none-border':indexShow}">
    
    <div class="index-content">
    <div class="clearfix store-head">
      <span class="store-title">小熊烘焙店18010</span>
      <el-popover
          class="tips"
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </el-popover>
      <el-popover
          class="tips"
          ref="popover2"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </el-popover>
      <span v-popover:popover1>微商城</span>
      <span v-popover:popover2>大客户</span>
    </div>
    <div>
      <ul class="data-list">
        <li class="list-item">
          <h5>50</h5>
          <p>待发货订单</p>
        </li>
        <li class="list-item">
          <h5>0</h5>
          <p>维权订单</p>
        </li>
        <li class="list-item">
          <h5>200</h5>
          <p>昨日订单</p>
        </li>
        <li class="list-item">
          <h5>￥12000.00</h5>
          <p>昨日交易量</p>
        </li>
        <li class="list-item">
          <h5>￥0.00</h5>
          <p>可提现余额</p>
        </li>
      </ul>
    </div>
    <div class="hyoou-box">
      <div class="box-head clearfix">
        <h2>常用功能</h2>
        <p>功能上线，可以通过商品名称搜索订单，管理订单更方便 | <a href="" class="detail">查看详情</a></p>
      </div>
      <div class="function-box">
        <ul class="function-list">
          <li class="function-item">
            <i class="hyoou-el-icon-publish"></i>
            <p>发布商品</p>
          </li>
          <li class="function-item">
            <i class="hyoou-el-icon-coupon"></i>
            <p>优惠券</p>
          </li>
          <li class="function-item">
            <i class="hyoou-el-icon-income"></i>
            <p>收入/提现</p>
          </li>
          <li class="function-item">
            <i class="hyoou-el-icon-help"></i>
            <p>帮助中心</p>
          </li>
          <li class="function-item">
            <i class="hyoou-el-icon-wx"></i>
            <p>微信小程序</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="hyoou-box">
      <div class="box-head clearfix">
        <h2>更多服务</h2>
      </div>
      <div class="service-box">
        <ul class="service-list">
          <li class="service-item">
            <i class="hyoou-el-icon-extend"></i>
            <p>我要推广</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-distribution"></i>
            <p>分销市场</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-full"></i>
            <p>全员开店</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-cashier"></i>
            <p>收银</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-retail"></i>
            <p>零售</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-market"></i>
            <p>应用市场</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-phone"></i>
            <p>app开店</p>
          </li>
          <li class="service-item">
            <i class="hyoou-el-icon-phone"></i>
            <p>红柚</p>
          </li>
        </ul>
      </div>
    </div>
    <notice-nav></notice-nav>
    </div>
    
  </div>
</template>

<script>
 import noticeNav from '../components/noticeNav'
 export default {
   components:{
      noticeNav
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
        return this.producted == '/index'
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .index-page{
  /*margin: 20px 39px 40px;*/
  margin: 10px 20px 40px;
  padding: 10px;
  border: 1px solid #dfdfdf;
  background: #fff;
 }
 .none-border{
  border: none;
 }
 .index-content{
  display: flex;
  flex-direction: column;
  background: #fff;
 }
 .store-head{
  margin-bottom: 40px;
  flex: 1;
 }
 .store-title{
  float: left;
  font-size: 20px;
  color: #333;
 }
 .el-popover__reference{
  display: inline-block;
  padding: 2px;
  text-align: center;
  font-size: 10px;
  margin: 4px 0 0 5px;
  border: 1px solid #FFAA46;
  background: #fff;
  color: #FF7404;
  border-radius: 15px;
 }
 .data-list{
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 107px;
  padding: 20px; 
  margin-bottom: 40px;
  background: #F4F4F4;
 }
 .list-item{
  flex: 1;
  text-align: center;
 }
 .list-item h5{
  margin-bottom: 20px;
  font-size: 20px;
  color: #FF7404;
 }
 .list-item p{
  color: #666;
 }
 /* 常用功能 */
 .hyoou-box .box-head{
  margin-bottom: 10px;
 }
 .hyoou-box .box-head h2{
  float: left;
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
  color: #333333;
  vertical-align: middle;
 }
 .hyoou-box .box-head p{
  float: left;
  font-size: 12px;
  line-height: 14px;
  color: #999;
  vertical-align: middle;
 }
 .hyoou-box .box-head .detail{
  color: #4BB1F8;
 }
 .function-box .function-list{
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 107px;
  padding: 20px; 
  margin-bottom: 40px;
  background: #F4F4F4;
 }
 .service-box .service-list{
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 107px;
  padding: 20px 40px; 
  margin-bottom: 40px;
  background: #F4F4F4;
 }
 .function-box .function-list .function-item{
  flex: 1;
  text-align: center;
 }
 .service-box .service-list .service-item{
  flex: 1;
  text-align: center;
 }
 .function-item i{
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 40px;
  margin-bottom: 10px;
  background: #6ED82F;
  border-radius: 5px;
  color: #fff;
 }
 .function-item p{
  color: #666;
 }
 .function-item:nth-child(2) i{
  background: #ECB43D;
 }
 .function-item:nth-child(3) i{
  background: #EC3D3D;
 }
 .function-item:nth-child(4) i{
  background: #3D6AEC;
 }
 .function-item:nth-child(5) i{
  background: #1EE53E;
 }
 .service-item i{
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 20px;
  font-size: 25px;
  padding-top: 5px;
  margin-bottom: 10px;
  background: linear-gradient(to bottom right, #DB1E35, #FF5A6D);
  color: #fff;
 }
 .service-item:nth-child(2) i{
  background: linear-gradient(to bottom right, #EB3449, #FF5E5E);
 }
 .service-item:nth-child(3) i{
  background: linear-gradient(to bottom right, #F43E3E, #F85852);
 }
 .service-item:nth-child(4) i{
  background: linear-gradient(to bottom right, #F85852, #F87552);
 }
 .service-item:nth-child(5) i{
  background: linear-gradient(to bottom right, #F87552, #FF8859);
 }
 .service-item:nth-child(6) i{
  background: linear-gradient(to bottom right, #FF8B5D, #FFAC52);
 }
 .service-item:nth-child(7) i{
  background: linear-gradient(to bottom right, #FB8961, #FBB161);
 }
 .service-item:nth-child(8) i{
  background: linear-gradient(to bottom right, #FA9572, #F1BD62);
 }
</style>
