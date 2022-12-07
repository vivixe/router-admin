<!--
 * @Author: vivi.
 * @Date: 2022-09-20 10:47:31
 * @LastEditTime: 2022-09-20 16:16:28
 * @FilePath: \back-stage\src\components\menus\tables\AboutMe.vue
 * @Description: 
-->
<template>
  <div class="main">
    <template>
      <a-breadcrumb>
        <a-breadcrumb-item href="">
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href="">
          <a-icon type="user" />
          <span>Application List</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item> Application </a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <hr />
    <template>
      <span class="table-title">欢迎您，{{ username }}</span>
      <a-descriptions class="table-body" bordered>
        <a-descriptions-item label="头像" :span="3">
          <a-avatar :src="require('@/assets/headpic.jpg')" :size="108" />
        </a-descriptions-item>
        <a-descriptions-item label="昵称">
          {{ nickname }}
        </a-descriptions-item>
        <a-descriptions-item label="状态">
          {{ status }}
        </a-descriptions-item>
        <a-descriptions-item label="性别">
          {{ gender }}
        </a-descriptions-item>
        <a-descriptions-item label="邮箱地址">
          {{ email }}
        </a-descriptions-item>
        <a-descriptions-item label="联系电话">
          {{ phone }}
        </a-descriptions-item>
        <a-descriptions-item label="入职时间" :span="2">
          2019-04-24 18:00:00
        </a-descriptions-item>
        <a-descriptions-item label="Status" :span="3">
          <a-badge status="processing" text="Running" />
        </a-descriptions-item>
        <a-descriptions-item label="近一月收入">
          ${{ income }}
        </a-descriptions-item>
        <a-descriptions-item label="管理项目">
          {{ programsNow }}
        </a-descriptions-item>
        <a-descriptions-item label="累计完成项目">
          {{ programsDone }}
        </a-descriptions-item>
        <a-descriptions-item label="个人介绍">
          {{ introduction }}
        </a-descriptions-item>
      </a-descriptions>
    </template>

    <template>
      <!-- 底部按钮区域 -->
      <div class="main-footer">
        <a-button type="default">
          去修改个人信息<a-icon type="right" />
        </a-button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      username: 'vivi',
      nickname: '肥肥狗',
      status: '管理员',
      gender: '男',
      email: '1104760234@qq.com',
      phone: '18888888888',
      income: '10000',
      programsNow: '3',
      programsDone: '10',
      introduction: '我是一个前端工程师',
    }
  },
}
</script>

<style lang="less" scoped>
.main {
  width: 89vw;
  height: 90vh;
  background-color: #fff;
  padding: 20px;
  .table-title{
    font-size: 20px;
    font-weight: bold;
    margin: 20px;
  }
  .table-body{
    margin:20px 0;
  }
  .main-footer {
    width: 100%;
    height: 10vh;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
