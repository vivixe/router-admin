<template>
	<div>
		<a-form layout="vertical" :form="form">
			<a-form-item label="姓名" has-feedback>
				<a-input v-decorator="[
            'name',
            {
              rules: [
                { required: true, message: '请输入员工姓名！' },
              ],
            },
          ]" />
			</a-form-item>
			<a-form-item label="性别">
				<a-radio-group v-decorator="['sex', { initialValue: 'male' }]">
					<a-radio value="male">男</a-radio>
					<a-radio value="female">女</a-radio>
				</a-radio-group>
			</a-form-item>

			<a-form-item label="年龄" >
				<a-input-number v-decorator="['age', { initialValue: 18 }]" :min="18" :max="55" suffix="岁" />
				<span class="ant-form-text"> 岁 </span>
			</a-form-item>

			<a-form-item label="岗位" has-feedback>
				<a-select v-decorator="[
            'position',
            {
              rules: [
                { required: true, message: '请选择员工岗位！' },
              ],
            },
          ]" placeholder="请选择员工岗位！">
					<a-select-option value="前端开发工程师">
						前端开发工程师
					</a-select-option>
					<a-select-option value="后端开发工程师">
						后端开发工程师
					</a-select-option>
					<a-select-option value="UI设计"> UI设计 </a-select-option>
					<a-select-option value="测试工程师">
						测试工程师
					</a-select-option>
					<a-select-option value="数据分析师"> 数据分析师 </a-select-option>
				</a-select>
			</a-form-item>

			<a-form-item label="地址" has-feedback>
				<a-input type="textarea" v-decorator="[
            'address',
            {
              rules: [
                {
                  required: true,
                  message: '请输入员工地址！',
                },
              ],
            },
          ]" />
			</a-form-item>
		</a-form>
		<div class="btns-v">
			<a-button class="submit-btn" type="primary" html-type="submit" :loading="saveBtnLoading"
				@click="handleSubmit">保 存</a-button>
		</div>
	</div>
</template>

<script>
	import {
		saveWorkerAPI,
		getWorkerInfoAPI
	} from '@/api/worker/Worker'
	export default {
		data() {
			return {
				form: this.$form.createForm(this),
				saveBtnLoading: false,
			}
		},
		props: {
			id: {
				type: String,
				default: '',
			},
		},
		mounted() {
			if (this.id) {
				this.getData()
			}
		},
		methods: {
			getData() {
				// 获取数据

				const data = {
					id: this.id,
				}
				getWorkerInfoAPI(data).then((res) => {
					console.log(res)
					var redata = res.data
					if (redata.status === 0) {
						// 填入数据
						const info = redata.data[0]
						console.log(info)
						this.form.setFieldsValue(info)
					}
				})
			},
			handleSubmit(e) {
				//阻止默认事件触发
				e.preventDefault()
				//调用this.form.validateFields方法获取form中v-decorator中对应的values
				this.form.validateFields((err, values) => {
					if (!err) {
						// 开启页面中间的loading
						// this.$createLoading().show()
						// 开启保存按钮的loading
						this.saveBtnLoading = true
						//formParams为最后向后端提交的对象，与后端的json格式一一对应
						const formParams = {
							...values,
						}
						// 入职时间应为当前点击提交的时间
						let nowDate = new Date()
						// 拼接为指定格式的时间
						let date =
							nowDate.getFullYear() +
							'-' +
							(nowDate.getMonth() + 1) +
							'-' +
							nowDate.getDate()
						//此处打印前端要的formParams数据，检查是否一一对应
						formParams.date = date
						formParams.status = 'worker'
						console.log(
							'%c handleSubmit',
							'color:#09f;font-size:20px;',
							formParams
						)
						return saveWorkerAPI(formParams).then((res) => {
							console.log(res)
							if (res.data.status === 0) {
								this.$message.success('操作成功!', 1)
								// 关闭窗口
								setTimeout(() => {
									// 关闭页面中间的loading
									// this.$createLoading().close()
									// 停止保存按钮的loading
									this.saveBtnLoading = false
									this.$emit('freshData') // 测试成功后关闭弹窗和刷新表格
								}, 900)
							} else {
								this.$message.error(res.data.message, 1)
								this.saveBtnLoading = false
							}
						})
					}
				})
			},
		},
	}
</script>

<style scoped lang="less">
	.btns-v {
		width: 100%;
		height: 50px;
		position: absolute;
		bottom: 0px;
		left: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 20px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		background-color: white;
	}
</style>
