<!--
 * @Author: vivi.
 * @Date: 2022-07-19 19:42:37
 * @LastEditTime: 2022-07-19 19:49:15
 * @FilePath: \router-admin\src\components\user\MyUserDetail.vue
 * @Description: 
-->
<template>
  <el-page-header @back="goBack" content="职员详情">
  </el-page-header>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>