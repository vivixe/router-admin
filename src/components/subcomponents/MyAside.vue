<!--
 * @Author: vivi.
 * @Date: 2022-07-16 17:56:12
 * @LastEditTime: 2022-07-19 19:35:40
 * @FilePath: \router-admin\src\components\subcomponents\MyAside.vue
 * @Description: 
-->
<template>
  <div>
    <div class="home-aside">
      <ul>
        <li>
          <router-link to="/home/index">首页</router-link>
        </li>
        <li>
          <router-link to="/home/users">用户管理</router-link>
        </li>
        <li>
          <router-link to="/home/rights">职位管理</router-link>
        </li>
        <li>
          <router-link to="/home/salary">薪资管理</router-link>
        </li>
        <li>
          <router-link to="/home/orders">订单管理</router-link>
        </li>
        <li>
          <router-link to="/home/settings">系统设置</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '这是首页'
    }
  },

}
</script>

<style lang="less" scoped>
.home-aside {
  border: 1px solid black;
  border-top: none;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: #ccc;
  overflow: auto;
  ul {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      text-align: center;
      padding: 10px;
      &:hover {
        background-color: #fff;
        a{
          color: #00a0e9;
        }
      }
      .router-link-active{
        color: #00a0e9;
        font-weight: 500;
      }
      a {
        color: #333;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
        font-weight:300;
      }
    }
  }
}
</style>