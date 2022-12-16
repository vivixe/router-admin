<!--
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-12-11 11:04:47
 * @FilePath: \back-stage\src\pages\program\MyManage.vue
 * @Description: 
-->
<template>
	<div class="manage-container">
		<div class="manage-header">
			<a-page-header style="border: 1px solid rgb(235, 237, 240)" title="创建新项目订单"
				:breadcrumb="{ props: { routes } }" sub-title="Create New Project Order" />
		</div>
		<div class="manage-body">
			<div class="manage-info">
				<div class="info-card">
					<div style="background: #ececec; padding: 30px">
						<a-row :gutter="16">
							<a-col :span="8">
								<a-card>
									<a-statistic title="Feedback" :value="11.28" :precision="2" suffix="%"
										:value-style="{ color: '#3f8600' }" style="margin-right: 50px">
										<template #prefix>
											<a-icon type="arrow-up" />
										</template>
									</a-statistic>
								</a-card>
							</a-col>
							<a-col :span="8">
								<a-card>
									<a-statistic title="Idle" :value="9.3" :precision="2" suffix="%" class="demo-class"
										:value-style="{ color: '#cf1322' }">
										<template #prefix>
											<a-icon type="arrow-down" />
										</template>
									</a-statistic>
								</a-card>
							</a-col>
							<a-col :span="8">
								<a-card>
									<a-statistic title="Feedback" :value="11.28" :precision="2" suffix="%"
										:value-style="{ color: '#3f8600' }" style="margin-right: 50px">
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
					<a-list item-layout="vertical" size="small" :pagination="pagination" :data-source="this.listData">
						<div slot="footer"><b>项目订单</b> 列表预览</div>
						<a-list-item class="ant-list-item" slot="renderItem" :key="item.id" slot-scope="item">
							<img v-if="item.propic" slot="extra" width="185" height="120" alt="logo"
								:src="item.propic" />
							<div class="cards-item-nopic" v-else slot="cover">
								暂时还没有预览图噢！
							</div>
							<a-list-item-meta :description="item.status">
								<a slot="title" :href="item.href">{{ item.name }}</a>
								<a-avatar slot="avatar" :src="require('@/assets/headpic.jpg')" />
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
					<a-form  :form="form" :label-col="labelCol" :wrapper-col="wrapperCol">
						
						<a-form-item label="项目名称">
							<a-input v-decorator="['name',{rules:[{required:true,message:'请输入项目名称！'}]}]" />
						</a-form-item>
						
						<a-form-item label="项目负责人">
							<a-select placeholder="请选择一位项目负责人"
								v-decorator="['owner',{rules:[{required:true,message:'请选择一位项目负责人！'}]}]"
							>
								<a-select-option v-for="(item,index) in adminList" :key="index"
									:value="item.id">
									<!-- 如果有nickname就是nickname，否则是username -->
									{{ item.nickname ? item.nickname : item.username }}
								</a-select-option>
							</a-select>
						</a-form-item>
						
						<a-form-item label="小组成员">
							<a-select  v-decorator="['teamMember',{rules: [{required: true,message: '请选择项目组成员',type: 'array'}]},]" 
							mode="multiple" placeholder="请选择项目组成员">
								<a-select-option v-for="(item,index) in workerList" :key="index" :value="item.id">
									<!-- 如果有nickname就是nickname，否则是username -->
									{{ item.name }}
								</a-select-option>
							</a-select>
						</a-form-item>
						
						<a-form-item label="预订报酬">
							<a-input-number  v-decorator="['earn', { initialValue: 1600 }]" :min="1"
								:max="15000" />
							<span class="ant-form-text"> ￥ </span>
						</a-form-item>
						
						<a-form-item label="规划图" extra="请上传格式为.jpg或.png且≤100Kb的图片">
							<a-upload
								v-decorator="['planningGraph',{valuePropName: 'fileList',getValueFromEvent: normFile, },]"
								name="logo" list-type="picture" action="http://127.0.0.1:3007/api/upload/doload"
								method="post" @change="handleChange">
								<a-button>
									<a-icon type="upload" /> 点击上传
								</a-button>
							</a-upload>
						</a-form-item>
						
						<a-form-item label="具体要求">
							<a-input v-decorator="['remark',{rules:[{required:true,message:'请输入项目具体要求！'}]}]" placeholder="请输入项目具体要求" type="textarea" />
						</a-form-item>
						
						<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
							<a-button type="primary" :loading="saveBtnLoading" @click="handleSubmit"> 发布 </a-button>
							<a-button style="margin-left: 10px" @click="backToOrders"> 取消 </a-button>
						</a-form-item>
					</a-form>
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
	import {
		getProgramListAPI,
		ProgramAddAPI,
		getAdminListAPI,
		getWorkerListAPI
	} from '@/api/program/Program.js'

	const listData = []

	export default {
		data() {
			return {
				url: '...',
				imageUrl: '',
				collapsed: true,
				routes: [{
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
				labelCol: {
					span: 4
				},
				wrapperCol: {
					span: 14
				},
				form: this.$form.createForm(this, { name: 'programForm' }),
				current: 1,
				loading: false,
				adminList: [],
				workerList: [],
				saveBtnLoading:false,
			}
		},
		components: {},
		mounted() {
			this.getProInfo()
			this.getAdminList()
			this.getWorkerList()
		},
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
			handleSubmit(e) {
				//阻止默认事件触发
				e.preventDefault()
				//调用this.form.validateFields方法获取form中v-decorator中对应的values
				this.form.validateFields((err, values) => {
					if (!err) {
						// 开启保存按钮的loading
						// this.saveBtnLoading = true
						//formParams为最后向后端提交的对象，与后端的json格式一一对应
						const formParams = {
							...values
						};
						// 入职时间应为当前点击提交的时间
						let nowDate = new Date()
						// 拼接为指定格式的时间
						let date =
							nowDate.getFullYear() +
							'-' +
							(nowDate.getMonth() + 1) +
							'-' +
							nowDate.getDate()
						formParams.status ='开发中'
						formParams.time = date
						//此处打印前端要的formParams数据，检查是否一一对应
						console.log('%c handleSubmit', 'color:#09f;font-size:20px;', formParams);
						return ProgramAddAPI(formParams).then((res) => {
							setTimeout(() => {
								// 停止保存按钮的loading
								this.saveBtnLoading = false
							}, 900)
							if (res.data.status === 0) {
								this.$message.success("发布成功!",1);
								this.$router.push('/home/orders')
							} else {
								this.$message.error(res.data.message, 1);
							}
						});
					}
				});
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
			async getProInfo() {
				const {
					data: res
				} = await getProgramListAPI()
				if (res.status === 0) {
					this.listData = res.data
				}
				console.log(res.data);
				console.log(this.listData);
			},
			async getAdminList() {
				const {
					data: res
				} = await getAdminListAPI()
				if (res.status === 0) {
					this.adminList = res.data
					console.log('%c adminList', 'color:#09f;font-size:20px;', this.adminList)
				}
			},
			async getWorkerList() {
				const {
					data: res
				} = await getWorkerListAPI()
				if (res.status === 0) {
					this.workerList = res.data
					console.log('%c workerList', 'color:#09f;font-size:20px;', this.workerList)
				}
			},
			// 将图片转为base64格式
			getBase64(img, callback) {
				const reader = new FileReader()
				reader.addEventListener('load', () => callback(reader.result))
				reader.readAsDataURL(img)
			},
		},
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

						.cards-item-nopic {
							margin: 10px;
							// width: 10vw;
							height: 120px;
							border-radius: 4px;
							display: grid;
							place-items: center;
							background-color: #e9f7fe;
							color: @primary-color;
							font-size: 12px;
							font-weight: 300;
						}
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
