<template>
	<div class="container">
		<div class="text">
			<div class="line fl"></div>
			<span>第三方登陆</span>
			<div class="line fr"></div>
		</div>
		<div class="login">
			<img src="/static/images/weixin.svg">
			<img src="/static/images/weibo.svg">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Third'
	}
</script>

<style scoped>
	span{
		font-size: 0.7rem;
		color: rgb(183, 183, 183);
	}
		img{
		width: 8%;
		height: 8%;
		margin: 1rem;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.container{
		display: flex;
		flex-direction: column;
	}
	.text{
		width: 100%;
		text-align: center;
	}
	.line{
		border: 0.03rem solid rgb(183, 183, 183);
		width: 37%;
		height: 0;
		margin-top: 0.8rem;
	}
	.login{
		text-align: center;
	}
</style>
