<!--
 * @Author: vivi.
 * @Date: 2022-08-02 17:26:22
 * @LastEditTime: 2022-08-13 09:43:02
 * @FilePath: \back-stage\src\components\MyReguser.vue
 * @Description: 
-->
<template>
  <div class="reg-main">
    <a-form :form="form" @submit="handleSubmit">
      <span class="reg-title">管理员注册</span>
      <a-form-item v-bind="formItemLayout" label="用户名">
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                { required: true, message: '请输入用户名' },
                { min: 4, message: '至少为 4 个字符' },
                { max: 12, message: '最多为 12 个字符' },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '只能包含英文、数字、下划线',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入密码',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: '请再次输入密码',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          昵称&nbsp;
          <a-tooltip title="你希望别人如何称呼你？">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [
                {
                  required: true,
                  message: '请输入您的昵称！',
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
          我已阅读并同意
          <a href=""> 用户手册 </a>
        </a-checkbox>
      </a-form-item>
      <div class="reg-btn">
        <a-form-item v-bind="tailFormItemLayout" class="reg-btn-submit">
          <a-button type="primary" html-type="submit" > 注册 </a-button>
        </a-form-item>
        <a-form-item class="reg-btn-cancel">
          <a-button type="default" @click="back"> 取消 </a-button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>

<script>
import { RegAPI } from '@/api/user/UserRegAPI.js'
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]

export default {
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
     async handleSubmit(e) {
      await e.preventDefault()
       this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          RegAPI(values.username,values.password,values.nickname).then(res => {
            console.log(res)
            if(res.data.status === 0){
              this.$message.success('注册成功')
              this.$router.push('/login')
            }else{
              this.$message.error(res.data.message)
            }
          })
        }
      })
      
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一致!')
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleWebsiteChange(value) {
      let autoCompleteResult
      if (!value) {
        autoCompleteResult = []
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(
          (domain) => `${value}${domain}`
        )
      }
      this.autoCompleteResult = autoCompleteResult
    },
    back() {
      this.$router.go(-1)
    },
    // UserReg() {
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
          
    //     }
    //   })
    // },
  },
}
</script>
<style lang="less" scoped>
.reg-main {
  border-radius: 8px;
  padding: 40px;
  width: 400px;
  height: 70vh;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .reg-title {
    display: block;
    padding-left: 27%;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  label.ant-checkbox-wrapper {
    margin-left: -52px;
  }
  .reg-btn{
    display: flex;
    flex-direction: row;
    .reg-btn-cancel{
      margin-left: 60px;
    }
    .reg-btn-submit{
      margin-left: 25px;
    }
  }
}
</style>
