<template>
  <div class="right-aside-page">
    <contact-us></contact-us>
    <div class="right-aside-box cook">
      <h4 class="box-title">红柚神厨</h4>
      <div class="box-content">
        <ul>
          <li>
            <a href="">[收藏]2018全年营销节点大解析</a>
          </li>
          <li>
            <a href="">[流量]世纪联华的25条运营经验</a>
          </li>
          <li>
            <a href="">[干货]"大地集市"的10万+图文...</a>
          </li>
          <li>
            <a href="">[秘籍]巧用"热力图",散步提升...</a>
          </li>
          <li>
            <a href="">[费率]有赞商城早已不加收手续费</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="right-aside-box activity">
      <h4 class="box-title">近期活动<a>更多</a></h4>
      <div class="box-content">
        <ul>
          <li>
            <a href="">[收藏]2018全年营销节点大解析</a>
          </li>
          <li>
            <a href="">[流量]世纪联华的25条运营经验</a>
          </li>
          <li>
            <a href="">[干货]"大地集市"的10万+图文...</a>
          </li>
          <li>
            <a href="">[秘籍]巧用"热力图",散步提升...</a>
          </li>
          <li>
            <a href="">[费率]有赞商城早已不加收手续费</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="right-aside-box function">
      <h4 class="box-title">功能上新</h4>
      <div class="box-content">
        <ul>
          <li>
            <a href="">[收藏]2018全年营销节点大解析</a>
          </li>
          <li>
            <a href="">[流量]世纪联华的25条运营经验</a>
          </li>
          <li>
            <a href="">[干货]"大地集市"的10万+图文...</a>
          </li>
          <li>
            <a href="">[秘籍]巧用"热力图",散步提升...</a>
          </li>
          <li>
            <a href="">[费率]有赞商城早已不加收手续费</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
 import contactUs from './contactUs'
 export default {
   components:{
      contactUs
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
h1{
 font-size: 20px;
}
.right-aside-box{
  background-color: #f4f4f4;
  margin-bottom: 20px;
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
.right-aside-box .box-content{

}
.right-aside-box .box-content li{
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
}
.right-aside-box .box-content li a{
  color: #666;
}
</style>
