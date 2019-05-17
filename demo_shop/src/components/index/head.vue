<template>
	<div class="container">
		<img @click="back" src="/static/images/douban.png" class="logo"/>
		<router-link :to="'/search'" tag="img" src="/static/images/search.png" class="search"></router-link>
		<router-link :to="'/login'" tag="img" src="/static/images/open.png" class="open"></router-link>
	</div>
</template>

<script>
	export default{
		name: 'Head',
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: row;
		position: relative;
		width: 100%;
		height: 3.25rem;
		border-bottom: 0.0625rem solid #ccc;
	}
	.logo{
		position: absolute;
		top: 0.4375rem;
		left: 1.25rem;
		width: 3.75rem;
		height: 2rem;
	}
	.search{
		position: absolute;
		top: 0.65rem;
		left: 5.25rem;
		width: 2.25rem;
		height: 1.5625rem;
	}
	.open{
		position: absolute;
		top: 0.2125rem;
		right: 1.25rem;
		width: 8.125rem;
		height: 2.5rem;
		float: right;
	}
</style>
