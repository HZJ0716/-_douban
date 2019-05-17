<template>
	<div class="container">
		<span @click="back">豆瓣精选 MHz</span>
		<img src="/static/images/nextsong.svg" @click="next">
	</div>
</template>

<script>
	export default{
		name: 'FM',
		methods:{
			next(){
				this.$emit('next')
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	img{
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		right: 1.6rem;
	}
	.container{
		display: flex;
		height: 3.5rem;
		justify-content: center;
		align-items: center;
		font-size: 1.25rem;
		font-weight: 100;
		border-bottom: 0.06rem solid rgb(226, 226, 226);
	}
</style>
