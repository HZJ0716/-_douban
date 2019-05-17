<template>
	<div class="container">
		<button @click="back">关闭</button>
		<input type="text" v-on:click="fouce" v-model="search">
		<i v-show="isshow" v-on:click="fouce"></i>
	</div>
</template>

<script>
	export default{
		props:{
			show: Boolean
		},
		data(){
			return {
				isshow: true,
				search: ''
			}
		},
		methods:{
			fouce(){
				// 设置聚焦事件
				document.querySelector('input').focus();
				this.isshow = false
			},
			back(){
				// 返回之前跳转的路由
				this.$router.go(-1);
			}
		},
		watch:{
			// 监听绑定的search
			search: function(newval,oldval){
				// 属性变化时执行搜索，暂无API无法搜索
				let search = newval;
				if(search){
					console.log(search);
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 3.25rem;
		border-bottom: 0.0625rem solid rgb(243, 243, 243);
	}
	button{
		width: 3rem;
		margin-top: 0.85rem;
		margin-left: 1.1125rem;
		height: 1.5rem;
		font-size: 0.875rem;
		font-weight: 540;
		background-color: #fff;
		border: 0;
		outline: none;
		color: rgb(66, 195, 184);
	}
	input{
		position: relative;
		margin: 0.5rem;
		width: 16.75rem;
		height: 1.6rem;
		margin-top: 0.75rem;
		border: 0;
		outline: none;
		background-color: rgb(243, 243, 243);
		text-align: center;
	}
	i{
		position: absolute;
		left: 50%;
		top: 2.1rem;
		transform: translateY(-50%);
		font-family: 'icomoon';
		font-style: normal;
		color: rgb(192, 192, 192);
	}
	.show{
		opacity: 1;
	}
	.disshow{
		opacity: 0;
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
