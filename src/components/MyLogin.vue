<!--
 * @Author: vivi.
 * @Date: 2022-07-15 17:34:22
 * @LastEditTime: 2022-07-15 19:39:08
 * @FilePath: \router-admin\src\components\MyLogin.vue
 * @Description: 
-->
<template>
  <div class="container">
    <!-- 登录表单 -->
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="username"
          placeholder="请输入用户名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密&emsp;码</label>
        <input
          type="password"
          class="form-control"
          v-model.trim="password"
          placeholder="请输入密码"
        />
      </div>
      <div class="form-button">
        <button type="button" class="btn btn-primary" @click="login">登录</button>
        <button type="button" class="btn btn-reset" @click="reset">重置</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      if(this.username==='' || this.password==='') {
        alert('用户名或密码不能为空')
        return
      }
      if(this.username==='admin' && this.password==='admin') {
      //存储token
        localStorage.setItem('token', 'admin')
        //跳转到首页
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
        alert('用户名或密码错误')
      }
    },
    reset() {
      this.username = ''
      this.password = ''
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  width: 400px;
  height: 130px;
  margin: 300px auto;
  padding: 60px 20px;
  border-radius: 25px;
  background: #a5a6b1;
  box-shadow: 22px 22px 56px #898a93, -22px -22px 56px #c1c2cf;
  .form-group {
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 300;
    color: #002fa7;
    input {
      margin-left: 15px;
      width: 70%;
      height: 40px;
      border-radius: 25px;
      border: 1px solid #ccc;
      padding: 0 15px;
      font-size: 22px;
      font-weight: 300;
      transition: 0.7s;
      &:focus {
        outline: 1px solid #002fa7;
      }
    }
  }
  .form-button {
    display: flex;
    justify-content: center;
    .btn {
      display: block;
      margin: 0 15px;
      width: 20%;
      height: 40px;
      border-radius: 25px;
      border: 0px solid #ccc;
      font-size: 22px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.7s;
    }
    .btn-primary {
      border: 1px solid #002fa7;
      background: #002fa7;
      color: #fff;
      &:hover {
        background: #001880;
      }
    }
    .btn-reset {
      border: 1px solid #fff;
      background: #fff;
      color: #002fa7;
      &:hover {
        border: 1px solid #002fa7;
        color: #002fa7;
      }
    }
  }
}
</style>
