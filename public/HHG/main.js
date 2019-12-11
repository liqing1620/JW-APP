// 引入@babel/polyfill处理兼容
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
//路由配置注入
import router from '../../src/router/HHG'
//axios配置注入
import axios from 'axios'
//store注入
import store from "../../src/store";
import ant from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
import minit from 'mint-ui'
import 'mint-ui/lib/style.css';
//自定义组件注册
import AppRegister from "../../src/support/AppRegisterCore";
//swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.use(ant)
Vue.use(minit)
Vue.use(AppRegister)
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
