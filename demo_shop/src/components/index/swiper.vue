<template>
	<div class="container">
		<ul>
			<div class="line"></div>
			<router-link :to="'/index'" tag="li">正在热映</router-link>
			<div class="line"></div>
			<router-link :to="'/search'" tag="li">影视搜索</router-link>
			<div class="line"></div>
			<router-link :to="'/Top'" tag="li">TOP250</router-link>
			<div class="line"></div>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'Swiper'
	}
</script>

<style scoped="scoped">
	ul li{
		list-style: none;
		float: left;
		line-height: 2.3125rem;
		margin: 0 0.875rem;
		color: #fff;
	}
	.container{
		width: 100%;
		height: 2.3125rem;
		background-color: rgb(66, 189, 86);
	}
	.line{
		width: 0.0625rem;
		height: 2.3125rem;
		background-color: #fff;
		float: left;
	}
</style>
