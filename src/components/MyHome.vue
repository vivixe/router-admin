<!--
 * @Author: vivi.
 * @Date: 2022-07-16 17:51:58
 * @LastEditTime: 2022-08-09 18:07:31
 * @FilePath: \back-stage\src\components\MyHome.vue
 * @Description: 
-->
<template>
  <div class="home-container">
    <!-- <MyHeader></MyHeader> -->
    <div class="home-main-body">
      <MyAside></MyAside>
      <div class="home-main-content">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
//导入头部组件
// import MyHeader from '@/components/subcomponents/MyHeader.vue'
//导入边栏组件
import MyAside from '@/components/subcomponents/MyAside.vue'
export default {
  components: {
    // MyHeader,
    MyAside
  },
  data() {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  
  .home-main-body {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    // overflow: hidden;
    
    .home-aside {
      width: 80px;
      height: 100%;
      background-color: #fff;
      overflow: auto;
    }
    .home-main-content {
      flex: 1;
      height: 90vh;
      background-color: #f7f7f7;
      overflow: auto;
      border-radius: 0 24px 24px 0;
    }
  }
}
</style>