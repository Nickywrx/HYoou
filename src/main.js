// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import ElementUI from 'element-ui'
import 'jquery/dist/jquery.min.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import './assets/css/base.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
