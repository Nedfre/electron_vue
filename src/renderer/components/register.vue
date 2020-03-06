<template>
	<div class="content">
		<h1 class="logoImg">Logo</h1>
		<el-form class="loginInfo" :model="form">
			<el-form-item label="" :label-width="formLabelWidth">
				<el-input v-model="form.accountNum" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="" :label-width="formLabelWidth">
				<el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
			</el-form-item>
			<el-form-item label="" :label-width="formLabelWidth">
				<el-input v-model="form.pwdAgain" placeholder="请再次输入密码" show-password></el-input>
			</el-form-item>
			<el-button class="registerBtn" type="primary" :plain="isPlain" @click="register">点击注册</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'register',
		components: {

		},
		data() {
			return {
				form: {
					accountNum: '',
					pwd: '',
					pwdAgain: '',
				},
				formLabelWidth: '',
				isPlain: true
			}
		},
		methods: {
			register(){
				var that = this;
				var accountNum = this.form.accountNum;
				var pwd = this.form.pwd;
				var pwdAgain = this.form.pwdAgain;
				if(accountNum==''){
					that.$message({
						message: '请输入账号！',
						type: 'warning'
					});
				}else if(pwd==''){
					that.$message({
						message: '请输入密码！',
						type: 'warning'
					});
				}else if(pwdAgain==''){
					that.$message({
						message: '请再次输入密码！',
						type: 'warning'
					});
				}else if(pwd!=pwdAgain){
					that.$message({
						message: '两次密码不一致！',
						type: 'warning'
					});
				}else if(pwd==pwdAgain){
					that.$message({
						message: '注册成功！',
						type: 'success'
					});
					const loading = this.$loading({
						lock: true,
						text: '登录中...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						that.$router.push('/second');
						loading.close();
					}, 2000);
				}
			},
		},
		beforeCreate: function() {

		},
		created: function() {

		},
		beforeMount: function() {

		},
		mounted: function() {

		},
		beforeUpdate: function() {

		},
		updated: function() {

		},
		beforeDestroy: function() {

		},
		destroyed: function() {

		}
	}
</script>


<style scoped>

	.logoImg {
		text-align: center;
		padding: 20px;
	}
	
	.loginInfo {
		width: 300px;
		margin: 0 auto;
	}
	
	.registerBtn {
		width: 300px;
	}
	
</style>
	