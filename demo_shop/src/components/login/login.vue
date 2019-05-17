<template>
	<div class="container">
		<input type="text" placeholder="手机号 / 邮箱" class="phone">
		<div class="box">
			<input type="text" placeholder="密码" class="pwd">
			<button class="back">找回密码</button>
		</div>
		<button class="log">登陆豆瓣</button>
		<div class="remb">
			<input type="checkbox"> 
			<span>下次自动登陆</span>
		</div>
		<span class="abroad">海外手机登陆</span>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	button,input{
		outline: none;
	}
	input{
		width: 90%;
		height: 2rem;
		margin-bottom: 0.6rem;
		border: 0.06rem solid rgb(228, 230, 229);
	}
	input::-webkit-input-placeholder{
		font-size: 0.8rem;
		color: rgb(117, 117, 117);
		position: relative;
		left: 0.4rem;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.box{
	position: relative;
	width: 90.5%;
	height: 2.2rem;
	margin-bottom: 0.7rem;
	}
	.box input{
		width: 100%;
	}
	.back{
		position: absolute;
		top: 0.6rem;
		right: 0.5rem;
		font-size: 0.7rem;
		color: rgb(183, 183, 183);
		background-color: #fff;
		border: 0;
	}
	.log{
		background-color: rgb(160, 222, 170);
		font-weight: bold;
		color: #fff;
		height: 2.2rem;
		width: 90%;
		border: 0;
		border-radius: 0.2rem;
	}
	.remb{
		position: relative;
		left: -7rem;
		top: 0.6rem;
		overflow: hidden;
	}
	.remb input{
		float: left;
		height: 0.9rem;
		width: 0.9rem;
	}
	.remb span{
		float: left;
		font-size: 0.88rem;
	}
	.abroad{
		position: relative;
		right: -7.4rem;
		top: -1rem;
		font-size: 0.9rem;
		color: rgb(65, 172, 82);
	}
</style>
