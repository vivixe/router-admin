<!--
 * @Author: vivi.
 * @Date: 2022-07-19 18:03:06
 * @LastEditTime: 2022-12-11 00:23:06
 * @FilePath: \back-stage\src\pages\user\MyUsers.vue
 * @Description: 
-->
<template>
  <div class="users-container">
    <div class="users-title">
      <a-breadcrumb>
        <a-breadcrumb-item href="">
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href="">
          <a-icon type="user" />
          <span>职员管理</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <hr />
    <div class="users-summarize">
      <a-page-header
        title="职员表一览"
        sub-title="managing workers"
        @back="() => $router.go(-1)"
      >
        <template slot="tags">
          <a-tag color="blue"> Running </a-tag>
        </template>
        <template slot="extra">
          <a-button @click="showAdmins"> Only Admins </a-button>
          <a-button @click="resetAll"> Reset </a-button>
          <a-button type="primary" @click="handleAddWorker"> Add </a-button>
        </template>
        <a-row type="flex">
          <a-statistic title="Status" value="Updated" />
          <a-statistic
            title="Admins"
            prefix="+"
            :value="8"
            :style="{
              margin: '0 32px',
            }"
          />
          <a-statistic title="Workers" prefix="" :value="45" />
        </a-row>
      </a-page-header>
    </div>
    <div class="users-table">
      <a-table
        :data-source="dataSource"
        :columns="columns"
        :pagination="{ pageSize: 8 }"
        :rowKey="(row) => row.key"
        :loading="loading"
      >
        <template slot="action" slot-scope="text, record">
          <a @click="handleEdit(record.id)">编辑</a>
          <a @click="handleDel(record.id)" style="margin-left: 8px">删除</a>
        </template>
        <div
          slot="filterDropdown"
          slot-scope="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
          style="padding: 8px"
        >
          <a-input
            v-ant-ref="(c) => (searchInput = c)"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block"
            @change="
              (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
            "
            @pressEnter="
              () => handleSearch(selectedKeys, confirm, column.dataIndex)
            "
          />
          <a-button
            type="primary"
            icon="search"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
          >
            Search
          </a-button>
          <a-button
            size="small"
            style="width: 90px"
            @click="() => handleReset(clearFilters)"
          >
            Reset
          </a-button>
        </div>
        <a-icon
          slot="filterIcon"
          slot-scope="filtered"
          type="search"
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />

        <template slot="customRender" slot-scope="text, record, index, column">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight"
                >{{ fragment }}</mark
              >

              <template v-else>{{ fragment }}</template>
            </template>
          </span>

          <template v-else>
            {{ text }}
          </template>
        </template>
      </a-table>
    </div>
    <h-modal ref="formRef" height="80%" width="80%" :title="title">
      <user-form :id="id" @freshData="freshData"></user-form>
    </h-modal>
  </div>
</template>

<script>
import UserForm from './UserForm.vue'
import { getWorkerListAPI, delWorkerAPI } from '@/api/worker/Worker.js'
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: '5%',
    scopedSlots: {
      customRender: 'id',
    },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        }, 0)
      }
    },
  },
  {
    title: '职能',
    dataIndex: 'status',
    key: 'status',
    scopedSlots: {
      customRender: 'customRender',
    },
    filters: [
      {
        text: 'Admin',
        value: 'admin',
      },
      {
        text: 'Worker',
        value: 'worker',
      },
    ],
    onFilter: (value, record) => record.status.includes(value),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.age.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        })
      }
    },
  },

  {
    title: '岗位',
    dataIndex: 'position',
    key: 'position',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.position.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        })
      }
    },
  },
  {
    title: '入职时间',
    dataIndex: 'date',
    key: 'date',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.date.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        })
      }
    },
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.address.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus()
        })
      }
    },
  },
  // 编辑按钮
  {
    title: '操作',
    key: 'action',
    scopedSlots: {
      customRender: 'action',
    },
  },
]

export default {
  data() {
    return {
      dataAll: [],
      dataSource: [],
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      visible: false,
      id: '',
      columns: columns,
      title: '',
      loading: false,
    }
  },
  components: {
    UserForm,
  },
  created() {
    this.getWorkerInfo()
  },
  methods: {
    gotoDetail(row) {
      this.$router.push({
        path: '/home/userinfo/' + row.id,
        // query: {
        //   id: row.id,
        // },
      })
    },
    editUser(row) {
      this.$router.push({
        path: '/home/edit/' + row.id,
        // query: {
        //   id: row.id,
        // },
      })
    },
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm()
      this.searchText = selectedKeys[0]
      this.searchedColumn = dataIndex
    },

    handleReset(clearFilters) {
      clearFilters()
      this.searchText = ''
    },
    showAdmins() {
      this.dataSource = this.dataSource.filter(
        (item) => item.status === 'admin'
      )
    },
    resetAll() {
      // 清空所有过滤条件
      this.getWorkerInfo()
    },
    // 获取职工信息
    // async getWorkerInfo() {
    // 	const {
    // 		data: res
    // 	} = await getWorkerListAPI()
    // 	if (res.status === 0) {
    // 		const dataAll = res.data
    // 		this.data = dataAll
    // 	}
    // },
    getWorkerInfo() {
      this.loading = true
      getWorkerListAPI().then((res) => {
        var redata = res.data
        console.log(redata)
        setTimeout(() => {
          this.loading = false
        }, 500)
        if (redata.status === 0) {
          this.dataSource = redata.data
        }
      })
    },
    handleAddWorker() {
      // this.visible = true
      this.title = '添加一名新员工'
      this.$refs.formRef.visible = true
    },
    handleEdit(id) {
      this.id = id
      console.log(this.id)
      this.title = '编辑一名员工'
      this.$refs.formRef.visible = true
    },
    handleDel(id) {
      this.$confirm({
        title: '确定删除该员工吗？',
        content: '删除后将无法恢复',
        okText: '确定',
        cancelText: '取消',
        onOk: async () => {
          const data = {
            id,
          }
          const { data: res } = await delWorkerAPI(data)
          console.log(res);
          if (res.status === 0) {
            this.$message.success('删除成功')
            this.getWorkerInfo()
          }
        },
      })
    },
    freshData() {
      this.$refs.formRef.visible = false
      this.getWorkerInfo()
    },
  },
}
</script>

<style lang="less" scoped>
.users-title {
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: 30px;

  span {
    font-size: 16px;
  }
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.users-table {
  max-height: 63vh;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  padding-right: 30px;
  padding-bottom: 20px;
  margin-right: 50px;
  background-color: #fafafa;
  border-radius: 8px;
  // background: #f7f7f7;
  box-shadow: 11px 11px 22px #dedede, -11px -11px 22px #ffffff,
    -11px 11px 22px #dedede, 11px -11px 22px #ffffff;

  // table {
  //   border-collapse: collapse;
  //   border-spacing: 0;
  //   width: 100%;
  //   border: 1px solid #ddd;
  // }
  .ant-table-thead {
    background-color: #fff;
    color: #1890ff;
  }
}
</style>
