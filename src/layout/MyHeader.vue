<!--
 * @Author: vivi.
 * @Date: 2022-07-16 17:56:01
 * @LastEditTime: 2022-07-19 19:05:28
 * @FilePath: \router-admin\src\components\subcomponents\MyHeader.vue
 * @Description: 
-->
<template>
  <div>
    <div class="header-title">
      <h1>万华软件集团后台管理系统</h1>
      <!-- 退出登录按钮 -->
      
    </div>
    <div class="btn-exit">
        <button @click="logout">
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
            ></path>
          </svg>
          <span>退出</span>
        </button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
.header-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #ccc;
  box-sizing: border-box;
  border: 1px solid black;
  h1 {
    // font-size: 20px;
    color: #333;
    font-weight: 300;
  }
  /* From uiverse.io by @Jedi-hongbin */
  
}
.btn-exit {
  display: flex;
  position: absolute;
  top: 33.5px;
  right: 30px;
    button {
      margin-right: 10px;
      display: flex;
      height: 3em;
      width: 100px;
      align-items: center;
      justify-content: center;
      background-color: #eeeeee4b;
      border-radius: 3px;
      letter-spacing: 1px;
      transition: all 0.2s linear;
      cursor: pointer;
      border: none;
      background: #fff;
      font-size: 16px;
    }

    button > svg {
      margin-right: 5px;
      margin-left: 5px;
      font-size: 20px;
      transition: all 0.4s ease-in;
    }

    button:hover > svg {
      font-size: 1.2em;
      transform: translateX(-5px);
    }

    button:hover {
      box-shadow: 3px 3px 11px #d1d1d1, -3px -3px 11px #ffffff;
      transform: translateY(-2px);
    }
  }
</style>
