<!--
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-09-20 11:03:59
 * @FilePath: \back-stage\src\components\menus\MyOrders.vue
 * @Description: 
-->
<template>
  <div class="orders-container">
    <div class="orders-headers">
      <div class="headers-search">
        <a-input-search
          size="large"
          placeholder="Type to search Programs..."
          enter-button
          @search="onSearch"
        />
      </div>
      <div class="headers-bar">
        <div class="headers-user">
          <div class="user-avatar">
            <a-dropdown placement="bottomLeft">
              <a-avatar size="large" :src="require('@/assets/headpic.jpg')" style="margin-left: 2px" />
              <a-menu slot="overlay">
                <a-menu-item key="1" @click="toAboutMe">
                  <a-icon type="user" />
                  <span>个人中心</span>
                </a-menu-item>
                <a-menu-item key="2">
                  <a-icon type="setting" />
                  <span>设置</span>
                </a-menu-item>
                <a-divider />
                <a-menu-item key="3" @click="Userlogout">
                  <a-icon type="logout" />
                  <span>退出登录</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <span class="user-name">肥肥狗</span>
        </div>
        <a-tooltip placement="bottom">
          <template slot="title">
            <p>去发布项目订单</p>
          </template>
          <router-link to="/home/manage"><a-button shape="circle" icon="plus" size="large" /></router-link>
        </a-tooltip>
      </div>
    </div>
    <div class="orders-tags">
      <div class="tags-title">Program Tags</div>
      <div class="tags-body">
        <div class="tags-item">
          <div class="tags-item-icon">
            <a-icon type="home" />
          </div>
          <span class="tags-item-text">全部</span>
        </div>
        <div class="tags-item">
          <div class="tags-item-icon">
            <a-icon type="carry-out" />
          </div>
          <span class="tags-item-text">已完成</span>
        </div>
        <div class="tags-item">
          <div class="tags-item-icon">
            <a-icon type="code" />
          </div>
          <span class="tags-item-text">开发中</span>
        </div>
      </div>
    </div>
    <div class="orders-cards">
      <template>
        <a-card hoverable style="width: 220px" v-for="item in data.slice(0,7)" :key="item.id">
          <img
            slot="cover"
            alt="example"
            :src="item.propic"
          />
          <a-card-meta :title=item.name :description=item.status>
            <a-avatar
              slot="avatar"
              :src="require('@/assets/headpic.jpg')"
            />
          </a-card-meta>
          <p style="padding: 30px 30px 0px 20px">开始于 {{item.time}}</p>
          <p style="padding: 0px 30px 0px 20px; color: #1890ff">
            收益 {{item.earn}}
          </p>
        </a-card>
      </template>
    </div>
    <div class="orders-body">
      <div class="body-table">
        <template>
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="{ pageSize: 3 }"
            :rowKey="(row) => row.id"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle"><a-icon type="smile-o" /> 项目名称</span>
            
            <span slot="action" slot-scope="">
              <a>Details</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions <a-icon type="down" />
              </a>
            </span>
          </a-table>
        </template>
      </div>
      <div class="body-cards">
        <template>
          <a-list item-layout="horizontal" :data-source="data.slice(0,3)">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta
                
                :description="item.demand"
              >
                <a slot="title" href="https://www.antdv.com/">{{
                  item.name
                }}</a>
                <a-avatar
                  slot="avatar"
                  :src="require('@/assets/headpic.jpg')"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getProgramListAPI } from '@/api/program/ProgramInfoAPI'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '阶段',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '负责人',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: '开始时间',
    key: 'time',
    dataIndex: 'time',
    scopedSlots: { customRender: 'time' },
  },
  {
    title: '收益',
    key: 'earn',
    dataIndex: 'earn',
    scopedSlots: { customRender: 'earn' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = []
export default {
  data() {
    return {
      data,
      columns,
      
    }
  },
  created(){
    this.getProInfo()
  },
  methods:{
    async getProInfo(){
      const {data:res} = await getProgramListAPI()
      this.data = res.data
    },
    onSearch(value){
      console.log(value);
    },
    Userlogout(){
      this.$store.dispatch('Userlogout')
    },
    toAboutMe(){
      this.$router.push('/home/aboutMe')
    },
  }
}
</script>

<style lang="less" scoped>
.orders-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .orders-headers {
    width: 89vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .headers-search {
      width: 20vw;
      margin: auto 35px;
    }
    .headers-bar {
      width: 10vw;
      margin: auto 35px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .headers-user {
        display: flex;
        flex-direction: row;
        align-items: center;
        // justify-content: space-between;
        width: 6vw;
        height: 44px;
        background-color: #1890ff;
        border-radius: 22px;
        margin-right: 20px;
        .user-name {
          color: #fff;
          font-size: 16px;
          font-weight: 300;
          margin-left: 10px;
        }
      }
    }
  }
  .orders-tags {
    width: 85vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // margin-left: 35px;
    justify-content: center;
    
    .tags-title {
      font-size: 16px;
      font-weight: 300;
      color: #000;
      margin-bottom: 10px;
    }
    .tags-body {
      display: flex;
      flex-direction: row;
      align-items: center;

      .tags-item {
        width: 140px;
        height: 50px;
        border-radius: 25px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        // justify-content: center;
        .tags-item-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left: 6px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: #e8e8e8;
        }
        .tags-item-text {
          font-size: 18px;
          font-weight: 300;
          color: #333;
          margin-left: 25px;
        }
      }
      .tags-item:hover {
        background-color: #1890ff;
        .tags-item-text {
          color: #fff;
        }
      }
    }
  }
  .orders-cards {
    width: 89vw;
    height: 31vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 30px;
    .cards-item {
      background-color: #fff;
      width: 12vw;
      height: 28vh;
    }
    img{
      width: 220px;
      height:140px;
    }
  }
  .orders-body {
    width: 89vw;
    height: 31vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .body-table {
      width: 64vw;
      height: 35vh;
      margin-left: 20px;
      margin-top: 30px;
      padding-top: 10px;
    }
    .body-cards {
      width: 25vw;
      height: 35vh;
      margin-left: 20px;
      margin-top: 30px;
      margin-right: 20px;
      padding-top: 10px;
    }
  }
}
</style>
