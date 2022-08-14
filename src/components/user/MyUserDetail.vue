<!--
 * @Author: vivi.
 * @Date: 2022-07-19 19:42:37
 * @LastEditTime: 2022-07-19 21:03:06
 * @FilePath: \router-admin\src\components\user\MyUserDetail.vue
 * @Description: 
-->
<template>
<div>
    <div>
      <el-page-header @back="goBack">
      </el-page-header>
    </div>
  <div class="user-datail-container">
      <el-descriptions class="margin-top" title="职员详情" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small" @click="editUserinfo">编辑</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      王小虎
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-sunset"></i>
        年龄
      </template>
      20
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-date"></i>
        入职日期
      </template>
      2016-05-03
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-monitor"></i>
        职位
      </template>
      <el-tag size="small">前端开发</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      上海市普陀区金沙江路 1518 弄
    </el-descriptions-item>
  </el-descriptions>
  </div>
</div>
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      editUserinfo() {
        this.$router.push({
          path: '/user/edit',
          query: {
            id: this.user.id,
          },
        });
      },
    },
    props: ['id'],
    data() {
      return {
        // size: 'small'
      }
    },
  }
</script>

<style lang="less" scoped>
  .user-datail-container{
    width: 80%;
    margin: 5% 10%;
  }
</style>