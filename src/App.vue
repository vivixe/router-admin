<!--
 * @Author: vivi.
 * @Date: 2022-07-12 18:23:39
 * @LastEditTime: 2022-12-09 19:42:51
 * @FilePath: \back-stage\src\App.vue
 * @Description: 
-->
<template>
  <div class="main-container">
    <div class="app-main">
      <!-- 路由占位符 -->
      <router-view>
        
      </router-view>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .main-container{
    width: 100%;
    height: 100%;
    background: gray;
    
    .app-main{
      background-color: #fff;
      border-radius: 24px;
      box-shadow:  16px 16px 43px #515151,
             -16px -16px 43px #afafaf;
      width: 94vw;
      height: 90vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    }
  }
</style>