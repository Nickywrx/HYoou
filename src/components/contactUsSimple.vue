<template>
  <div class="contact-page">
    <h3>红柚服务窗口</h3>
    <a class="customer-manager clearfix">
      <div class="service-avatar"></div>
      <h4>韩小唐</h4>
      <p class="service-name-title">客户成功经理</p>
    </a>
    <a class="customer-contact-block">
      <span class="contact-button">
        <span>在线客服</span>
      </span>
      <span class="service-hotline">电话客服：0571-8998-8848</span>
    </a>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        asideList: [ 
          
        ]
      }
    },
    methods:{
     
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact-page{
    padding: 10px 0;
    margin-bottom: 15px;
    background-color: #fff;
    cursor: pointer;
  }
  .contact-page h3{
    position: relative;
    font-size: 14px;
    font-weight: 600;
    padding-left: 15px;
    margin-bottom: 10px;
    color: #333;
  }
  .contact-page h3::before{
    position: absolute;
    left: 0;
    top: 1px;
    content: '';
    width: 4px;
    height: 18px;
    background-color: #FF942B;
  }
  .customer-manager{
    display: block;
    padding-left: 12px;
  }
  .customer-contact-block{
    display: block;
  }
  .service-avatar{
    float: left;
    width: 50px;
    height: 50px;
    background-color: #52BAF6;
    border-radius: 50%;
  }
  .customer-manager h4{
    padding-left: 20px;
    margin: 4px 0 8px 0;
    font-weight: bold;
    color: #333;
    overflow: hidden;
  }
  .customer-manager .service-name-title{
    padding-left: 20px;
    color: #666;
    overflow: hidden;
  }
  .customer-contact-block{
    display: block;
    margin-top: 10px;
  }
  .contact-button{
    display: block;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #52BAF6;
    border-radius: 5px;
  }
  .service-hotline{
    display: block;
    margin-top: 5px;
    text-align: center;
    color: #666;
  }
</style>
