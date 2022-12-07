<template>
	<div>
		<a-form layout='vertical' :form="form">
			<a-form-item label='Name'>
				<a-input v-decorator="['name',{rules: [{ required: true, message: 'Please input the name of worker!' }],}]" />
			</a-form-item>
			<a-form-item class=''>
				<a-radio-group v-decorator="['sex',{initialValue: 'male',}]">
					<a-radio value='male'>Male</a-radio>
					<a-radio value='female'>Female</a-radio>
				</a-radio-group>
			</a-form-item>

			<a-form-item label="Age">
				<a-input-number v-decorator="['age', { initialValue: 18 }]" :min="18" :max="55" />
				<span class="ant-form-text">
					years old
				</span>
			</a-form-item>

			<a-form-item label="Position" has-feedback>
				<a-select v-decorator="['position',{ rules: [{ required: true, message: 'Please select work position!' }] },]" placeholder="Please select work position">
					<a-select-option value="Front-end Engineer">
						Front-end Engineer
					</a-select-option>
					<a-select-option value="Back-end Engineer">
						Back-end Engineer
					</a-select-option>
					<a-select-option value="UI Designer">
						UI Designer
					</a-select-option>
					<a-select-option value="Test Engineer">
						Test Engineer
					</a-select-option>
					<a-select-option value="Data Analyst">
						Data Analyst
					</a-select-option>
				</a-select>
			</a-form-item>

			<a-form-item label='Address'>
				<a-input type='textarea'
					v-decorator="['address', { rules: [{ required: true, message: 'Please input the address of worker!' }] }]" />
			</a-form-item>

		</a-form>
		<div class="btns-v">
			<a-button class="submit-btn" type="primary" html-type="submit" :loading="saveBtnLoading"
				@click="handleSubmit">保 存</a-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: this.$form.createForm(this),
			}
		}
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
