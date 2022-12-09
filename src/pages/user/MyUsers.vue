<!--
 * @Author: vivi.
 * @Date: 2022-07-19 18:03:06
 * @LastEditTime: 2022-12-09 17:33:10
 * @FilePath: \router-admin\src\pages\user\MyUsers.vue
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
			<a-page-header title="职员表一览" sub-title="managing workers" @back="() => $router.go(-1)">
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
					<a-statistic title="Admins" prefix="+" :value="8" :style="{
              margin: '0 32px',
            }" />
					<a-statistic title="Workers" prefix="" :value="45" />
				</a-row>
			</a-page-header>
		</div>
		<div class="users-table">
			<a-table :data-source="dataSource" :columns="columns" :pagination="{ pageSize: 8 }" :rowKey="(row) => row.id">
				<template v-slot:action slot-scope="text, record">
					<a @click="handleEdit(record.id)">编辑</a>
					<a @click="handleDel(record.id)" style="margin-left: 8px;">删除</a>
				</template>
				<div slot="filterDropdown" slot-scope="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }" style="padding: 8px">
					<a-input v-ant-ref="(c) => (searchInput = c)" :placeholder="`Search ${column.dataIndex}`"
						:value="selectedKeys[0]" style="width: 188px; margin-bottom: 8px; display: block" @change="
              (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
            " @pressEnter="
              () => handleSearch(selectedKeys, confirm, column.dataIndex)
            " />
					<a-button type="primary" icon="search" size="small" style="width: 90px; margin-right: 8px"
						@click="() => handleSearch(selectedKeys, confirm, column.dataIndex)">
						Search
					</a-button>
					<a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
						Reset
					</a-button>
				</div>
				<a-icon slot="filterIcon" slot-scope="filtered" type="search"
					:style="{ color: filtered ? '#108ee9' : undefined }" />

				<template slot="customRender" slot-scope="text, record, index, column">
					<span v-if="searchText && searchedColumn === column.dataIndex">
						<template v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
							<mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" :key="i"
								class="highlight">{{ fragment }}</mark>

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
			<user-form :id="id"></user-form>
		</h-modal>
	</div>
</template>

<script>
	import UserForm from './UserForm.vue'
	import {
		addWorkerAPI,
		getWorkerListAPI,
		delWorkerAPI,
	} from '@/api/worker/Worker.js'
	const columns = [{
				title: 'ID',
				dataIndex: 'id',
				key: 'id',
				width: '5%',
				scopedSlots: {
					customRender: 'id',
				},
			},
			{
				title: 'Name',
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
				title: 'Status',
				dataIndex: 'status',
				key: 'status',
				scopedSlots: {
					customRender: 'customRender',
				},
				filters: [{
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
				title: 'Age',
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
				title: 'Position',
				dataIndex: 'position',
				key: 'position',
				scopedSlots: {
					filterDropdown: 'filterDropdown',
					filterIcon: 'filterIcon',
					customRender: 'customRender',
				},
				onFilter: (value, record) =>
					record.position
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase()),
				onFilterDropdownVisibleChange: (visible) => {
					if (visible) {
						setTimeout(() => {
							this.searchInput.focus()
						})
					}
				},
			},
			{
				title: 'Date',
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
				title: 'Address',
				dataIndex: 'address',
				key: 'address',
				scopedSlots: {
					filterDropdown: 'filterDropdown',
					filterIcon: 'filterIcon',
					customRender: 'customRender',
				},
				onFilter: (value, record) =>
					record.address
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase()),
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
				title: 'Action',
				key: 'action',
				scopedSlots: {
					customRender: 'action'
				},
			},
		]
		
		export default {
			data() {
				return {
					dataAll:[],
					dataSource:[],
					searchText: '',
					searchInput: null,
					searchedColumn: '',
					visible: false,
					id: '',
					columns: columns,
					title: ''
				}
			},
			components: {
				UserForm
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
					this.dataSource = this.dataSource.filter((item) => item.status === 'admin')
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
					getWorkerListAPI().then(res =>{
						var redata = res.data
						if(redata.status === 0 ){
							this.dataSource = redata.data
						}
					})
				}
				handleAddWorker() {
					// this.visible = true
					this.title = "添加一名新员工"
					this.$refs.formRef.visible = true
				},
				handleEdit(id) {
					this.id = id
					this.title = "编辑一名员工"
					this.$refs.formRef.visible = true
				},
				handleDel(id) {
					this.$confirm({
						title: '确定删除该员工吗？',
						content: '删除后将无法恢复',
						okText: '确定',
						cancelText: '取消',
						onOk: async () => {
							const {
								data: res
							} = await delWorkerAPI(id)
							if (res.status === 0) {
								this.$message.success('删除成功')
								this.getWorkerInfo()
							}
						}
					})
				},
				// //添加职工的方法
				// async handleCreate() {
				// 	const form = this.$refs.collectionForm.form
				// 	await form.validateFields((err, values) => {
				// 		if (err) {
				// 			return
				// 		}
				// 		// 入职时间应为当前点击提交的时间
				// 		let nowDate = new Date()
				// 		// 拼接为指定格式的时间
				// 		let date = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate
				// 			.getDate()
				// 		// 调用封装的添加职工信息的接口
				// 		addWorkerAPI(values.name, date, 'worker', values.age, values.address, values.position)
				// 			.then(res => {
				// 				if (res.data.status === 0) {
				// 					// 提示添加成功
				// 					this.$message.success('添加成功')
				// 					// 关闭模态框
				// 					this.visible = false
				// 					// 重新获取职工信息
				// 					this.getWorkerInfo()
				// 				}
				// 			})
				// 		// 清空表单
				// 		form.resetFields()
				// 	})
				// },
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
