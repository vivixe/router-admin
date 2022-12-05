<!--
 * @Author: vivi.
 * @Date: 2022-07-16 17:56:12
 * @LastEditTime: 2022-09-20 10:54:49
 * @FilePath: \back-stage\src\components\subcomponents\MyAside.vue
 * @Description: 
-->
<template>
  <div class="aside-main">
    <div class="aside-container">
      <a-menu
        :default-selected-keys="[this.theKey]"
        mode="inline"
        theme="light"
        :inline-collapsed="collapsed"
        class="aside-menu"
      >
        <a-menu-item key="1">
          <router-link to="/home/index"
            ><a-icon type="pie-chart"
          /></router-link>
          <span>总览</span>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/home/users"><a-icon type="desktop" /></router-link>
          <span>职员一览</span>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/home/orders"><a-icon type="inbox" /></router-link>
          <span>项目订单一览</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>信息管理</span></span>
          <a-menu-item key="5"> 修改职员信息 </a-menu-item>
          <a-menu-item key="6"> <router-link to="/home/manage">发布项目订单</router-link> </a-menu-item>
          <a-menu-item key="7"> 管理项目进度 </a-menu-item>
          <a-menu-item key="8"> 查看已完成 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="appstore" /><span>系统设置</span></span
          >
          <a-menu-item key="9"> 关于版本 </a-menu-item>
          <a-menu-item key="10"> 提出意见 </a-menu-item>
          <a-sub-menu key="sub3" title="账户管理">
            <a-menu-item key="11"> <router-link to="/home/aboutMe">账户资料</router-link> </a-menu-item>
            <a-menu-item key="12" @click="Userlogout"> 退出 </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    }
  },
  methods: {
    Userlogout() {
      // 退出登录
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    // 获取选中的key
    selectedKey() {
      const sk = this.$route.path.split('/')[2]
      if (sk == 'index') {
        this.theKey = '1'
      }
      if (sk == 'users') {
        this.theKey = '2'
      }
      if (sk == 'orders') {
        this.theKey = '3'
      }
      if (sk == 'manage') {
        this.theKey = '6'
      }
      if (sk == 'aboutMe') {
        this.theKey = '11'
      }
    },
  },
  created() {
    this.selectedKey()
  },
}
</script>

<style lang="less" scoped>
.aside-main {
  background-color: #fff;
  width: 80px;
  height: 90vh;
  border-radius: 24px 0 0 24px;
  .aside-container {
    ul {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      li {
        margin: 10px 0;
      }
    }
  }
}
</style>
