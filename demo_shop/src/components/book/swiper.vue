<template>
	<div class="container">
		<router-link :to="'/book'"  tag="div" class='select'>热门图书</router-link>
		<router-link :to="'/book_new'" tag="div">上架书籍</router-link>
	</div>
</template>

<script>
	export default{
		name: 'Swiper'
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 2.3125rem;
		color: #fff;
		background-color: rgb(66, 189, 86);
		color: #000;
	}
	.select{
		color: #fff;
	}
</style>
