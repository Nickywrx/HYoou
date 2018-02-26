<template>
  <div id="page-aside">
    <ul class="aside-list">
      <router-link v-for="(item,index) in asideList" :to="item.path" class="link nav-list" tag="li" @click.native="opensecNav(index)" :key="">{{ item.name }}</router-link>
    </ul>
    <ul class="aside-sec-list aside-list" v-show="asideList[idx].secondList.length">
        <router-link v-for="(item,index) in asideList[idx].secondList" :to="item.path" class="link nav-list" tag="li" :key="">{{ item.name }}</router-link>
    </ul>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        asideList: [ //侧边栏的一级菜单
          {
            name:"概况",
            path:'/',
            active: false,
            secondList:[]
          },
          {
            name:"商户",
            path:'/store',
            active: false,
            secondList:[ 
              {
                name:"商户概况",
                path:'/detail',
                active: false,
              },
              {
                name:"商户概况1",
                path:'/detail1',
                active: false,
              }
            ]
          }
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
 .aside-list{
  float: left;
  width: 120px;
 }
 .aside-list .nav-list{
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
 }
 .aside-list .nav-list:hover{
    background: #4fc08d;
    color: #fff;
 }
 .router-link-active{
    background: #4fc08d;
    color: #fff;
 }
</style>
