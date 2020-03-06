<template>
	<div class="content">
		<div class="mainBox">
			<component @changeRouter="changeRouter" :is="currentRole"/>
			<ul class="more">
				<li class="forgetPwd" v-if="currentRole=='register'"> </li>
				<li class="forgetPwd" v-if="currentRole=='login'">忘记密码</li>
				<li class="login_register" @click="login_register">
					<span v-if="currentRole=='register'">返回登录</span>
					<span v-if="currentRole=='login'">点击注册</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import login from '../components/login'
	import register from '../components/register'
	
	export default {
		name: 'index',
		components: {
			login,register
		},
		data() {
			return {
				currentRole:'login'
			}
		},
		methods: {
			changeRouter(data){
				if(data=='login'){
					this.currentRole='login';
				}else if(data=='register'){
					this.currentRole='register';
				}
			},
			login_register(){
				if(this.currentRole!="register"){
					this.currentRole="register";
				}else{
					this.currentRole="login";
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
	
	.mainBox {
		width: 100%;
		height: 250px;
		position: fixed;
		top: 0;
		bottom: 200px;
		margin: auto;
	}
</style>