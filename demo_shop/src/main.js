// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用axios解决跨域1、后台转接 2、前后台同时设置跨域
import axios from 'axios'
// 使用jsonp解决跨域问题
// import VueJsonp from 'vue-jsonp'

// 挂载依赖
Vue.use(ElementUI)
// Vue.use(VueJsonp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
