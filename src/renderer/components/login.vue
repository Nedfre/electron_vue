<template>
	<div class="content">
		<h1 class="logoImg">Logo</h1>
		<el-form class="loginInfo" :model="form">
			<el-form-item label="账号" :label-width="formLabelWidth">
				<el-input v-model="form.accountNum" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="密码" :label-width="formLabelWidth">
				<el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
			</el-form-item>
			<el-button class="loginBtn" type="primary" :plain="isPlain" @click="login">登录</el-button>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		components: {

		},
		data() {
			return {
				form: {
					accountNum: '',
					pwd: '',
				},
				formLabelWidth: '45px',
				isPlain: true
			}
		},
		methods: {
			login() {
				var that = this;
				var accountNum = this.form.accountNum;
				var pwd = this.form.pwd;

				if(accountNum == "") {
					that.$message({
						message: '请输入账号！',
						type: 'warning'
					});
					return
				}

				if(pwd == "") {
					that.$message({
						message: '请输入密码！',
						type: 'warning'
					});
					return
				}

				if(accountNum != "admin" || pwd != "123456") {
					that.$message({
						message: '账号或密码错误！',
						type: 'error'
					});
					return
				}
				
				if(accountNum == "admin" && pwd == "123456") {
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
	
	.loginBtn {
		width: 300px;
	}
	
	.more {
		width: 300px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding: 10px;
		color: #DCDFE6;
	}
	
	.more li {
		cursor: pointer;
	}
	
	.more li:hover {
		color: #409eff;
	}
</style>