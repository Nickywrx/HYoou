<template>
  <div class="page-head">
      <h2>店铺概要</h2>
      <div class="help-server">
        <span>帮助和服务</span>
      </div>
  </div> 
  
</template>

<script>
 export default {
    data() {
      return {
        
      }
    },
    methods:{
     
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .page-head{
    position: relative;
    width: 100%;
    height: 70px;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
 }
 .page-head h2{
    position: absolute;
    left: 80px;
    bottom: 22px;
    font-size: 14px;
 }
 .help-server{
    position: absolute;
    right: -240px;
    top: 0;
    height: 70px;
    width: 240px;
    border-bottom: 1px solid #dfdfdf;
    border-left: 1px solid #dfdfdf;
    text-align: left;
 }
 .help-server span{
    position: absolute;
    bottom: 12px;
    left: 70px;
 }
</style>
