/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:42:44
 * @LastEditTime: 2022-07-15 17:38:19
 * @FilePath: \router-admin\src\router\index.js
 * @Description:  
 */
import Vue from "vue";
import VueRouter from 'vue-router'
//导入组件  
import Login from '@/components/MyLogin.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/login',component:Login},
    {path:'/',redirect:'/login'}
  ]
})

export default router