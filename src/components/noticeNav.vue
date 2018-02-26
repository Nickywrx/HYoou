<template>
  <div class="notice-nav-page">
    <a href="" class="customer-news">客户消息</a>
    <a>通知</a>
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
.notice-nav-page{
  position: fixed;
  bottom: 0;
  right: 0;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);
  z-index: 1010;
}
.notice-nav-page a{
  float: left;
  width: 125px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  text-decoration: none;
  border-right: 1px solid #fff;
  color: #666;
  background: #DEDEDE;
}
</style>
