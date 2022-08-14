<!--
 * @Author: vivi.
 * @Date: 2022-07-19 21:05:04
 * @LastEditTime: 2022-07-19 21:27:24
 * @FilePath: \router-admin\src\components\user\MyUserEdit.vue
 * @Description: 
-->
<template>
  <div>
    <div class="user-edit-title">
      <h2>编辑职员资料</h2>
    </div>
    <div class="user-edit-container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="职员姓名">
          <el-input v-model="form.name" class="inp"></el-input>
        </el-form-item>
        
        <el-form-item label="入职时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" class="inp"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-select v-model="form.region" placeholder="请选择职位">
            <el-option label="前端开发" value="qianduan"></el-option>
            <el-option label="后端开发" value="houduan"></el-option>
            <el-option label="数据分析" value="shujufenxi"></el-option>
            <el-option label="数据可视化" value="shujukeshihua"></el-option>
            <el-option label="项目经理" value="xiangmujingli"></el-option>
            <el-option label="数据测试" value="shujuceshi"></el-option>
            <el-option label="运维" value="yunwei"></el-option>
            <el-option label="UI设计" value="UI"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="less" scoped>
  .user-edit-title {
    display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom:1px solid #333;
  h2 {
    // font-size: 20px;
    color: #333;
    font-weight: 500;
  }
  }
  .user-edit-container{
    margin-top: 2%;
    .inp{
      width: 10%;
    }
  }
</style>