/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:23:39
 * @LastEditTime: 2022-08-01 19:49:06
 * @FilePath: \back-stage\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.prototype.$echarts = window.echarts;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
