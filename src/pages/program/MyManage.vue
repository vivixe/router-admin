<!--
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-11-11 20:24:45
 * @FilePath: \back-stage\src\components\menus\MyManage.vue
 * @Description: 
-->
<template>
  <div class="manage-container">
    <div class="manage-header">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="创建新项目订单"
        :breadcrumb="{ props: { routes } }"
        sub-title="Create New Project Order"
      />
    </div>
    <div class="manage-body">
      <div class="manage-info">
        <div class="info-card">
          <div style="background: #ececec; padding: 30px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card>
                  <a-statistic
                    title="Feedback"
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                  >
                    <template #prefix>
                      <a-icon type="arrow-up" />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card>
                  <a-statistic
                    title="Idle"
                    :value="9.3"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322' }"
                  >
                    <template #prefix>
                      <a-icon type="arrow-down" />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card>
                  <a-statistic
                    title="Feedback"
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px"
                  >
                    <template #prefix>
                      <a-icon type="arrow-up" />
                    </template>
                  </a-statistic>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="info-list">
          <a-list
            item-layout="vertical"
            size="small"
            :pagination="pagination"
            :data-source="this.listData"
          >
            <div slot="footer"><b>项目订单</b> 列表预览</div>
            <a-list-item slot="renderItem" :key="item.id" slot-scope="item">
              <img
                slot="extra"
                width="185"
                height="120"
                alt="logo"
                :src="item.propic"
              />
              <a-list-item-meta :description="item.status">
                <a slot="title" :href="item.href">{{ item.name }}</a>
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a-list-item-meta>
              {{ item.demand }}
            </a-list-item>
          </a-list>
        </div>
      </div>
      <div class="manage-form">
        <div class="form-title">
          <!-- <a-page-header title="请输入新项目信息" /> -->
        </div>
        <div class="form-body">
          <a-form-model
            :model="form"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-model-item label="项目名称">
              <a-input v-model="form.name" />
            </a-form-model-item>
            <a-form-model-item label="项目负责人">
              <a-select
                v-model="form.owner"
                placeholder="please select an owner"
              >
                <a-select-option value="肥肥狗"> 肥肥狗 </a-select-option>
                <a-select-option value="困困狗"> 困困狗 </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-item label="小组成员">
              <a-select
                v-model="form.members"
                v-decorator="[
                  'select-multiple',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please select program members!',
                        type: 'string',
                      },
                    ],
                  },
                ]"
                mode="multiple"
                placeholder="Please select program members"
              >
                <a-select-option value="Hoyt Olsen"> Hoyt Olsen </a-select-option>
                <a-select-option value="Norman Hancock"> Norman Hancock </a-select-option>
                <a-select-option value="Beck Rios"> Beck Rios </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="预订报酬">
              <a-input-number
                v-model="form.earn"
                v-decorator="['earn', { initialValue: 1600 }]"
                :min="1"
                :max="15000"
              />
              <span class="ant-form-text"> ￥ </span>
            </a-form-item>
            <a-form-item label="规划图" extra="请上传格式为.jpg或.png且≤100Kb的图片">
              <a-upload
                v-decorator="[
                  'upload',
                  {
                    valuePropName: 'fileList',
                    getValueFromEvent: normFile,
                  },
                ]"
                name="logo"
                list-type="picture"
                action="http://127.0.0.1:3007/api/upload/doload"
                method="post"
                @change="handleChange"
              >
                <a-button> <a-icon type="upload" /> 点击上传 </a-button>
              </a-upload>
            </a-form-item>
            <a-form-model-item label="具体要求">
              <a-input v-model="form.desc" type="textarea" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit"> Create </a-button>
              <a-button style="margin-left: 10px" @click="backToOrders"> Cancel </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
      <div class="manage-steps">
        <a-steps direction="vertical" :current="current">
          <a-step title="Finished" description="打开创建页" />
          <a-step title="In Progress" description="输入项目信息" />
          <a-step title="Waiting" description="发布成功" />
        </a-steps>
      </div>
    </div>
  </div>
</template>

<script>
import { getProgramListAPI } from '@/api/program/ProgramInfoAPI'
import { ProgramAddAPI } from '@/api/program/ProgramAddAPI'
//定义一个方法，用于压缩图片，返回新的image对象
// function getBase64(img, callback) {
//   const reader = new FileReader()
//   reader.addEventListener('load', () => callback(reader.result))
//   reader.readAsDataURL(img)
// }
const listData = []

export default {
  data() {
    return {
      url: '...',
      imageUrl: '',
      collapsed: true,
      routes: [
        {
          path: 'home/orders',
          breadcrumbName: '项目订单一览',
        },
        {
          path: 'home/manage',
          breadcrumbName: '发布项目订单',
        },
      ],
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 3,
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        owner: undefined,
        date1: undefined,
        members: [],
        price: { number: 0, currency: 'rmb' },
        desc: '',
      },
      fileList: [],
      current: 1,
    }
  },
  components: {},
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
		this.loading = false
      }
    },
    async onSubmit() {
      let nowDate = new Date()
      // 拼接为指定格式的时间
      let date =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate()
      let members = this.form.members.toString()
      await ProgramAddAPI(
        this.form.name,
        this.form.owner,
        date,
        members,
        this.form.earn,
        this.ndata,
        '开发中',
        this.form.desc
      ).then((res) => {
        // console.log(this.imageUrl);
        if (res.data.status === 0) {
          this.$message.success('发布成功')
          this.$router.push('/home/orders')
          this.current = 2
        } else {
          this.$message.error('发布失败')
        }
      })
    },
    normFile(e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
    backToOrders() {
      this.$router.push('/home/orders')
    },
    async getProInfo(){
      const {data:res} = await getProgramListAPI()
      if(res.status === 0){
        this.listData = res.data
      }
      console.log(res.data);
      console.log(this.listData);
    },
  },
  created(){
    this.getProInfo()
  }
}
</script>

<style lang="less" scoped>
.manage-container {
  width: 100%;
  height: 100%;
  .manage-body {
    display: flex;
    flex-direction: row;
    .manage-info {
      width: 45vw;
      height: 78vh;
      display: flex;
      flex-direction: column;
      background-color: #ececec;
      .info-list {
        padding: 0px 30px;
        .ant-list-item {
          padding: 10px;
          margin-bottom: 8px;
          background-color: #fff;
          transition: 0.45s;
        }
        .ant-list-item:hover {
          border-color: rgba(0, 0, 0, 0.09);
          box-shadow: 0 2px 8px rgb(0 0 0 / 9%);
        }
      }
    }
    .manage-form {
      width: 35vw;
      padding-top: 30px;
      padding-left: 80px;
      background-color: #fff;
      .form-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        .ant-page-header-heading {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .manage-steps {
      width: 9vw;
      height: 78vh;
      padding-top: 230px;
      background-color: #fff;
    }
  }
}
</style>
