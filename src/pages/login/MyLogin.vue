<template>
  <div class="login-main">
    <div class="login-title">
      <!-- <span class="login-title-main">万华软件公司后台管理系统</span> -->
      <span class="login-title-sub">Make Management Easier</span>
    </div>
    <div class="main-learn-more">
      <button class="learn-more" @click="ToAboutMe">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">About Me</span>
      </button>
    </div>
    <div class="login-container">
      <a-form id="components-form-demo-normal-login">
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="用户名"
            v-model.trim="username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="密码"
            v-model.trim="password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
            v-model="checked"
          >
            记住我
          </a-checkbox>
          <a class="login-form-forgot" href=""> 忘记密码 </a>
          <a-button type="primary" class="login-form-button" @click="handleLogin">
            登录
          </a-button>

          <router-link to="/reguser"> 立即注册！</router-link> 
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { LoginAPI } from '@/api/user/UserLoginAPI.js'
const Base64 = require("js-base64").Base64;
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  data() {
    return {
      username: '',
      password: '',
      checked: false,
    }
  },
  methods: {
    // async Userlogin() {
    //   const { data: res } = await LoginAPI(this.username, this.password)
    //   if (res.status === 0) {
    //     // 登录成功
    //     this.$message.success('登录成功')
    //     //存储id和token
    //     localStorage.setItem('id', res.id)
    //     localStorage.setItem('token', res.token)
    //     if(this.checked){
    //       let password = Base64.encode(this.password)
    //       localStorage.setItem('username', this.username)
    //       localStorage.setItem('password', password)
    //     }
    //     // 跳转到首页
    //     this.$router.push('/home')
    //   } else {
    //     // 登录失败
    //     alert(res.message)
    //   }
    // },
    handleLogin() {
      return LoginAPI(this.username,this.password).then((res) =>{
		console.log(res)
		var redata = res.data
        if(redata.status === 0){
          this.$message.success('登录成功！',1000)
          localStorage.setItem('id', redata.id)
          localStorage.setItem('token', redata.token)
          if(this.checked){
            let password = Base64.encode(this.password)
            localStorage.setItem('username', this.username)
            localStorage.setItem('password', password)
          }
          this.$router.push('/home')
        }else{
          this.$message.error(res.message)
        }
        
      })
    },
    ToAboutMe() {
      window.open('https://vivixe.github.io/index.html#about', '_blank')
    },
  },
  mounted(){
    if(localStorage.getItem('username')){
      this.username = localStorage.getItem('username')
      this.password = Base64.decode(localStorage.getItem('password'))
      this.checked = true
    }
  }
}
</script>
<style lang="less" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.login-container {
  width: 400px;
  height: 350px;
  /* margin: 300px auto; */
  position: absolute;
  top: 45%;
  left: 65%;
  transform: translateY(-50%);
  padding: 60px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.login-title {
  text-align: center;
  font-size: 40px;
  position: absolute;
  top: 15%;
  left: 15%;
  display: flex;
  color: #2c2c34;
  flex-direction: column;
  .login-title-main {
    // font-size: 30px;
    font-weight: bold;
  }
  .login-title-sub {
    font-size: 40px;
    font-weight: 300;
  }
}
.main-learn-more {
  position: absolute;
  top: 65%;
  left: 17%;
  /* From uiverse.io */
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #1890ff;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: '';
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #1890ff;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #fff;
  }
}
</style>
