<template>
  <div class="right-aside-page">
    <div class="right-aside-box cook">
      <h4 class="box-title">帮助中心<a href="#" class="go-in">进入&gt;</a></h4>
      <h5 class="box-subtitle">微页面是什么</h5>
      <div class="box-content"> 
        <p class="content-text">微页面是可以自定义编辑的页面，你既可以把它当做普通的页面来使用，也可以将任意一页也可以将任意一页也可以将任意一页也可以将任意一页也可以将任意一页也可以将任意一页也可以将任意一页也可以将任意一页......<a href="#" class="go-detail">详情&gt;</a></p>
      </div> 
      <div class="box-content news-tip">
        <ul>
          <li>
            <a href="">有赞全栈支持加密升级 3步告别恶意小广告</a>
          </li>
          <li>
            <a href="">告别恶意小广告</a>
          </li>
          <li>
            <a href="">如何创建店铺主页面</a>
          </li>
          <li>
            <a href="">店铺顶部页面导航设置</a>
          </li>
        </ul>
      </div>
    </div>
    <contact-us-simple></contact-us-simple>
  </div>
</template>

<script>
 import contactUsSimple from './contactUsSimple'
 export default {
   components:{
      contactUsSimple
    },
    data() {
      return {
        asideList: [ 
          
        ]
      }
    },
    created(){
      
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
.right-aside-page{
  padding: 10px 20px 20px;
}
h1{
 font-size: 20px;
}
.right-aside-box{
  background-color: #fff;
  margin-bottom: 20px;
}
.right-aside-box .go-in{
  float: right;
  font-size: 12px;
  color: #3BCFEF;
}
.right-aside-box .go-detail{
  font-size: 12px;
  color: #3BCFEF;
}
.right-aside-box h4{
    position: relative;
}
.right-aside-box h5{
    position: relative;
    font-size: 13px;
    padding-left: 12px;
}
.right-aside-box h5::before{
    position: absolute;
    content: '●';
    left: 2px;
    top: 2px;
    width: 5px;
    height: 5px;
    color: #FF2B2B;
}
.right-aside-box h4::before{
    position: absolute;
    content: '';
    left: 0;
    top: 6px;
    width: 4px;
    height: 18px;
    background-color: #FF942B;
}
.right-aside-box:last-child{
  margin-bottom: 200px;
}
.right-aside-box .box-title{
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  font-size: 14px;
  border-bottom: 1px solid #fff;
}
.right-aside-box .box-subtitle{
  margin-bottom: 12px;
}
.right-aside-box .box-content .content-text{
    font-size: 12px;
    line-height: 20px;
    padding-left: 12px;
    color: #999;
}
.right-aside-box .box-content.news-tip{
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
}
.right-aside-box .box-content li{
  padding-left: 12px;
  margin-bottom: 10px;
}
.right-aside-box .box-content li a{
  position: relative;
  line-height: 20px;
  color: #999;
}
.right-aside-box .box-content li a:hover{
  color: #666;
}
.right-aside-box .box-content li a::before{
  position: absolute;
  content: '●';
  left: -10px;
  top: -3px;
  width: 5px;
  height: 5px;
  color: #FF2B2B;
}
</style>
