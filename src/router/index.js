import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Survey from '@/pages/survey'
import DetailPage from '@/pages/store/detail' //店铺
import GoodsManagerPage from '@/pages/goods/goodsManager' //商品
import OrderManagerPage from '@/pages/order/orderManager' //订单
import ClientManagerPage from '@/pages/client/clientManager' //客户
import DataAnalysisPage from '@/pages/data/dataAnalysis' //数据
import SaleCenterPage from '@/pages/sale/saleCenter' //营销
import SettingCenterPage from '@/pages/setting/settingCenter' //设置
Vue.use(Router)
// Vue.use(history({ rewrites: [ { from: /^/abc$/, to: '/' } ] }))
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      component:Index
    },
    {
      path: '/',
      component:Index,
      redirect:'/index'
    },
    {
      path: '/index',
      component:Index,
    },
    // 店铺
    {
      path: '/store',
      component:DetailPage,
      redirect:'/store/detail'
    },
    // 商品
    {
      path: '/goods',
      component:GoodsManagerPage,
      redirect:'/goods/manager'
    },
    {
      path: '/goods/manager',
      component:GoodsManagerPage
    },
    {
      path: '/goods/group',
      component:GoodsManagerPage
    },
    // 订单
    {
      path: '/order',
      component:OrderManagerPage,
      redirect:'/order/manager'
    },
    {
      path: '/order/manager',
      component:OrderManagerPage
    },
    // 客户
    {
      path: '/client',
      component:ClientManagerPage,
      redirect:'/client/manager'
    },
    {
      path: '/client/manager',
      component:ClientManagerPage
    },
    // 数据
    {
      path: '/data',
      component:DataAnalysisPage,
      redirect:'/data/analysis'
    },
    {
      path: '/data/analysis',
      component:DataAnalysisPage
    },
    // 营销
    {
      path: '/sale',
      component:SaleCenterPage,
      redirect:'/sale/center'
    },
    {
      path: '/sale/center',
      component:SaleCenterPage
    },
    // 设置
    {
      path: '/setting',
      component:SettingCenterPage,
      redirect:'/setting/center'
    },
    {
      path: '/setting/center',
      component:SettingCenterPage
    },
  ]
})
