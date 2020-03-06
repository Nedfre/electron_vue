<template>
	<div class="content">
		<h1>详情页</h1>
		<h2>详情页</h2>
		<h3>详情页</h3>
		<h4>详情页</h4>
		<h5>详情页</h5>
		<el-button class="backToLogin" type="primary" plain @click="backToLogin">返回登录页面</el-button>
	</div>
</template>

<script>
	
	export default {
		name: 'second',
		components: {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			backToLogin(){
				this.$router.push('/');
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
	*{
		text-align: center;
	}
</style>