<template>
	<div>
		<div>
			<el-tabs>
			  <el-tab-pane label='短信登陆注册' class="c1">
				  <img src="static/images/del.svg" @click="back">
				  <span class="title">登陆豆瓣</span>
				  <p>登陆注册表示同意 <span class="text">豆瓣使用协议、隐私政策</span></p>
				  <email-cmp class="body"></email-cmp>
				  <third-cmp class="footer"></third-cmp>
			  </el-tab-pane>
			  <el-tab-pane label='密码登陆' class="c1">
				  <img src="static/images/del.svg" @click="back">
				  <span class="title">登陆豆瓣</span>
				  <p>登陆注册表示同意 <span class="text">豆瓣使用协议、隐私政策</span></p>
				  <login-cmp class="body"></login-cmp>
				  <third-cmp class="footer"></third-cmp>
			  </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import LoginCmp from 'components/login/login.vue'
	import ThirdCmp from 'components/login/third.vue'
	import EmailCmp from 'components/login/email.vue'
	export default{
		name: 'Login',
		components:{
			LoginCmp,
			ThirdCmp,
			EmailCmp
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	img{
		position: absolute;
		top: 0;
		left: 1.5rem;
		height: 1.5rem;
		width: 1.5rem;
		z-index: 10;
	}
	.text{
		color: rgb(66, 189, 86);
	}
	p{
		font-size: 0.8rem;
	}
	.c1{
		text-align: center;
	}
	.title{
		font-size: 2rem;
	}
	.body{
		margin-top: 10%;
	}
	.footer{
		margin-top: 10%;
	}
</style>
