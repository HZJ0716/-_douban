<template>
	<div class="container">
		<div class="email">
			<input type="text" placeholder="手机号" class="phone">
			<div class="line"></div>
			<button>+86</button>
		</div>
		<div class="box">
			<input type="text" placeholder="验证码" class="pwd">
			<button class="back">获取验证码</button>
		</div>
		<button class="log">登陆豆瓣</button>
		<div class="remb">
			<input type="checkbox"> 
			<span>下次自动登陆</span>
		</div>
		<span class="abroad">收不到验证码</span>
	</div>
</template>

<script>
</script>

<style scoped>
	button,input{
		outline: none;
	}
	input{
		height: 2.2rem;
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
	/* 手机号框 */
	.email{
		position: relative;
		width: 90.5%;
		height: 2rem;
		margin-bottom: 1.1rem;
	}
	.email button{
		position: absolute;
		top: 0.5rem;
		left: 0.4rem;
		height: 1.5rem;
		width: 2.5rem;
		border: 0;
		font-size: 1rem;
		font-weight: bold;
		background-color: #fff;
		border-right: 0.05rem solid rgb(183, 183, 183);
	}
	.email input{
		width: 100%;
	}
	.email input::-webkit-input-placeholder{
		font-size: 0.8rem;
		color: rgb(117, 117, 117);
		position: relative;
		left: 3.3rem;
	}
	/* 手机号框 */
	/* 验证码框 */
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
	/* 验证码框 */
	/* 登陆按钮 */
	.log{
		background-color: rgb(160, 222, 170);
		font-weight: bold;
		color: #fff;
		height: 2.2rem;
		width: 90%;
		border: 0;
		border-radius: 0.2rem;
	}
	/* 登陆按钮 */
	/* 自动登陆 */
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
	/* 自动登陆 */
	/* 收不到验证码 */
	.abroad{
		position: relative;
		right: -7.4rem;
		top: -0.72rem;
		font-size: 0.9rem;
		color: rgb(65, 172, 82);
	}
</style>