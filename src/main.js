/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:23:39
 * @LastEditTime: 2022-09-05 10:59:48
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
import 'echarts'
import ECharts from 'vue-echarts'
import HModal from './components/hModal'
Vue.prototype.$echarts = window.echarts;
Vue.prototype.$base64Img = (e)=>{
  return new Promise(function(resolve,) {      //使用Promise进行异步处理
      let fileSize = 0;
      let fileMaxSize = 1024;                 //设置图片最大为 1M 
      fileSize = e.target.files[0].size;           //获取图片大小
      let size = fileSize / 1024;
      let file = e.target.files[0];           //获取图片文件对象
      let reader = new FileReader();          //实例化一个对象
      if (size > fileMaxSize) { 
          e.target.value  = ''                //内容清空
          resolve({err:'图片大小必须小于1M！'})
      }else if (size <= 0) { 
          e.target.value  = ''                //内容清空
          resolve({err:'图片大小大小不能为0M！'})
      }else{
          reader.readAsDataURL(file);             //把图片文件对象转换base64
          reader.onload = function(e) {       
               resolve(e.target.result)           //回到函数返回base64值
          }  
      }
  })  
}
Vue.component('ECharts', ECharts)
// Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(HModal)
Vue.use(ECharts)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
