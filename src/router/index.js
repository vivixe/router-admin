/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:42:44
 * @LastEditTime: 2022-07-19 19:56:51
 * @FilePath: \router-admin\src\router\index.js
 * @Description:  
 */
import Vue from "vue";
import VueRouter from 'vue-router'
//导入组件  
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from'@/components/menus/MyUsers.vue'
import Salary from'@/components/menus/MySalary.vue'
import Orders from'@/components/menus/MyOrders.vue'
import Rights from'@/components/menus/MyRights.vue'
import Index from'@/components/menus/MyIndex.vue'
import Settings from'@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/login',component:Login},
    {path:'/',redirect:'/login'},
    {path:'/home',component:Home,children:[
      {path:'users',component:Users},
      {path:'salary',component:Salary},
      {path:'orders',component:Orders},
      {path:'rights',component:Rights},
      {path:'index',component:Index},
      {path:'settings',component:Settings},
      {path:'userinfo/:id',component:UserDetail}
    ]},
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next()
  }else{
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }
})

export default router