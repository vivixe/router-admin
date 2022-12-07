/*
 * @Author: vivi.
 * @Date: 2022-07-12 18:42:44
 * @LastEditTime: 2022-09-20 10:47:43
 * @FilePath: \back-stage\src\router\index.js
 * @Description:  
 */
import Vue from "vue";
import VueRouter from 'vue-router'
//导入组件  
import Login from '@/pages/login/MyLogin.vue'
import Home from '@/pages/home/MyHome.vue'
import Users from'@/pages/user/MyUsers.vue'
import Salary from'@/pages/salary/MySalary.vue'
import Orders from'@/pages/program/MyOrders.vue'
import Manage from'@/pages/program/MyManage.vue'
import Index from'@/pages/home/MyIndex.vue'
import Settings from'@/pages/setting/MySettings.vue'
import UserDetail from '@/pages/user/MyUserDetail.vue'
import UserEdit from '@/pages/user/MyUserEdit.vue'
import Reguser from '@/pages/register/MyReguser.vue'
import AboutMe from '@/pages/aboutMe/AboutMe.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/login',component:Login},
    {path:'/',redirect:'/login'},
    {path:'/reguser',component:Reguser},
    {path:'/home',redirect:'/home/index',component:Home,children:[
      {path:'users',component:Users},
      {path:'salary',component:Salary},
      {path:'orders',component:Orders},
      {path:'manage',component:Manage},
      {path:'index',component:Index},
      {path:'settings',component:Settings},
      {path:'userinfo/:id',component:UserDetail,props:true},
      {path:'edit/:id',component:UserEdit,props:true},
      {path:'aboutMe',component:AboutMe},
    ]},
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'||to.path==='/reguser'){
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