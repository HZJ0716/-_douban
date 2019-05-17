<template>
	<div class="container">
		<img src="/static/images/shanchu.svg" @click="handleShow">
		<span>继续操作需要登陆豆瓣账号</span>
		<router-link tag='button' :to="'/login'" class="login">登陆</router-link>
		<button class="app">打开App</button>
	</div>
</template>

<script>
	export default{
		name : 'Show',
		methods:{
			handleShow(){
				this.$emit('handleShow');
			}
		}
	}
</script>

<style scoped>
	button{
		outline: none;
	}
	img{
		position: absolute;
		right: 2%;
		top: 5%;
		width: 8%;
		height: 8%;
	}
	.container{
		display: flex;
		flex-direction: column;
		padding-bottom:1.5rem;
		width: 80%;
		background-color: #fff;
		align-items: center;
		border: 0.0625rem solid #ccc;
		border-radius: 0.3rem;
	}
	.container span{
		margin: 1.375rem;
		font-size: 1.1625rem;
	}
	.login{
		font-size: 1rem;
		height: 2.3rem;
		width: 85%;
		border: 0;
		border-radius: 0.2125rem;
		color: #fff;
		background-color: rgb(66, 189, 86);
	}
	.app{
		font-size: 1rem;
		height: 2.3rem;
		width: 85%;
		margin-top: 0.6125rem;
		border: 1px solid rgb(66, 189, 86);
		border-radius: 0.2125rem;
		color: rgb(66, 189, 86);
		background-color: #fff;
	}
</style>
