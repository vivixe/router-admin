<!--
 * @Author: vivi.
 * @Date: 2022-07-19 18:03:06
 * @LastEditTime: 2022-07-19 19:56:24
 * @FilePath: \router-admin\src\components\menus\MyUsers.vue
 * @Description: 
-->
<template>
    
<div class="">
  <div class="users-title">
    <h2>职员管理</h2>
  </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column label="ID" prop="id" width="100"> </el-table-column>
      <el-table-column prop="date" label="入职日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="职员姓名" width="180">
      </el-table-column>
      <el-table-column label="年龄" prop="age" width="180"> </el-table-column>
      <el-table-column label="职位" prop="position" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="gotoDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '1',
          date: '2016-05-03',
          name: '王小虎',
          age: '27',
          address: '上海市普陀区金沙江路 1518 弄',
          position: '前端开发',
        },
        {
          id: '2',
          date: '2016-05-02',
          name: '牛大壮',
          age: '21',
          address: '江苏省南京市浦口区江东街道',
          position: '数据分析',
        },
        {
          id: '3',
          date: '2016-05-04',
          name: '李小伟',
          age: '20',
          address: '江苏省常州市天宁区钟楼街道',
          position: '数据可视化',
        },
        {
          id: '4',
          date: '2016-05-01',
          name: '张小美',
          age: '21',
          address: '浙江省杭州市滨江区西兴街道阡陌路',
          position: 'UI设计',
        },
        {
          id: '5',
          date: '2016-05-08',
          name: '赵小萍',
          age: '23',
          address: '安徽省合肥市瑶海区庐阳东路',
          position: '后端开发',
        },
        {
          id: '6',
          date: '2016-05-06',
          name: '陈小花',
          age: '25',
          address: '福建省福州市鼓楼区双龙大道',
          position: '数据测试',
        },
      ],
    }
  },
  methods: {
    gotoDetail(row) {
      this.$router.push({
        path: '/home/userinfo/'+row.id,
        // query: {
        //   id: row.id,
        // },
      })
    },
    editUser(row) {
      this.$router.push({
        path: '/menus/user',
        query: {
          id: row.id,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.users-title {
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
</style>
