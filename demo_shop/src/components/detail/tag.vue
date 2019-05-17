<template>
	<div class="container">
		<div class="btn">
			<button @click="handleShow">想看</button>
			<button @click="handleShow">看过</button>
		</div>
		<div class="tag">
			<span>所属频道</span>
			<div class="taglist">
				<button v-for="item in taglist">{{item.name}}<i></i></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Tag',
		props:{
			taglist: Array
		},
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
	.container{
		overflow: hidden;
	}
	.btn{
		display: flex;
		justify-content: space-around;
	}
	.btn > button{
		width: 90%;
		height: 2.0rem;
		margin: 0 0.325rem;
		margin-bottom: 1.5rem;
		border: 0.0625rem solid rgb(255, 183, 18);
		color: rgb(255, 183, 18);
		background-color: #fff;
	}
	.tag{
		margin: 0.825rem;
		margin-right: 2rem;
		width: 100%;
		color: rgb(178, 170, 178);
	}
	.taglist > button{
		padding: 0 0.625rem;
		margin-top: 0.825rem;
		margin-right: 0.625rem;
		height: 1.875rem;
		border: 0.0625rem solid rgb(99, 201, 115);
		border-radius: 0.9rem;
		color: rgb(99, 201, 115);
		background-color: rgb(239, 250, 240);
	}
	i{
		font-family: 'icomoon';
		font-style: normal;
	}
	@font-face {
	  font-family: 'icomoon';
	  src:  url('../../../static/font/icomoon.eot?1dp0if');
	  src:  url('../../../static/font/icomoon.eot?1dp0if#iefix') format('embedded-opentype'),
	    url('../../../static/font/icomoon.ttf?1dp0if') format('truetype'),
	    url('../../../static/font/icomoon.woff?1dp0if') format('woff'),
	    url('../../../static/font/icomoon.svg?1dp0if#icomoon') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}
</style>
