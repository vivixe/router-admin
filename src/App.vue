<!--
 * @Author: vivi.
 * @Date: 2022-07-12 18:23:39
 * @LastEditTime: 2022-07-15 18:59:01
 * @FilePath: \router-admin\src\App.vue
 * @Description: 
-->
<template>
  <div class="main-container">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .main-container{
    width: 100%;
    height: 150%;
    background: #a5a6b1;
    padding: 20px;
  }
</style>