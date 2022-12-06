/*
 * @Author: vivi.
 * @Date: 2022-12-06 16:49:17
 * @LastEditTime: 2022-12-06 16:53:39
 * @FilePath: \router-admin\src\router\async\router.map.js
 * @Description: 
 */
const routerMap = {
  login: {
    path: '/login',
    name: '登录',
    component: () => import('@/components/MyLogin.vue'),
  },
  reguser: {
    path: '/reguser',
    name: '注册',
    component: () => import('@/components/MyReguser.vue'),
  },
  home: {
    path: '/home',
    name: '首页',
    component: () => import('@/components/MyHome.vue'),
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/components/menus/MyIndex.vue'),
      },
      {
        path: 'users',
        name: '用户管理',
        component: () => import('@/components/menus/MyUsers.vue'),
      },
      {
        path: 'salary',
        name: '工资管理',
        component: () => import('@/components/menus/MySalary.vue'),
      },
      {
        path: 'orders',
        name: '订单管理',
        component: () => import('@/components/menus/MyOrders.vue'),
      },
      {
        path: 'manage',
        name: '权限管理',
        component: () => import('@/components/menus/MyManage.vue'),
      },
      {
        path: 'settings',
        name: '系统设置',
        component: () => import('@/components/menus/MySettings.vue'),
      },
      {
        path: 'userinfo/:id',
        name: '用户详情',
        component: () => import('@/components/user/MyUserDetail.vue'),
        props: true,
      },
      {
        path: 'edit/:id',
        name: '用户编辑',
        component: () => import('@/components/user/MyUserEdit.vue'),
        props: true,
      },
      {
        path: 'aboutMe',
        name: '关于我',
        component: () => import('@/components/menus/tables/AboutMe.vue'),
      },
    ],
  },
}

export default routerMap