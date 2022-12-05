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
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from'@/components/menus/MyUsers.vue'
import Salary from'@/components/menus/MySalary.vue'
import Orders from'@/components/menus/MyOrders.vue'
import Manage from'@/components/menus/MyManage.vue'
import Index from'@/components/menus/MyIndex.vue'
import Settings from'@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'
import UserEdit from '@/components/user/MyUserEdit.vue'
import Reguser from '@/components/MyReguser.vue'
import AboutMe from '@/components/menus/tables/AboutMe.vue';
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