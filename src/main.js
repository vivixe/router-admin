/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:23:39
 * @LastEditTime: 2022-07-12 18:45:01
 * @FilePath: \router-admin\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
