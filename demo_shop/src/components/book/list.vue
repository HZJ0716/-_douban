<template>
	<div class="container">
		<span class="title">热门书籍</span>
		<div class="movie" v-for="item in booklist">
			<img :src="item.cover">
			<span class="name">{{item.title}}</span>
			<span class="score">图书评分: {{item.rating}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'List',
		props:{
		booklist: Array
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.title{
		width: 100%;
		font-size: 1.5rem;
		margin: 0.9375rem;
	}
	.movie{
		display: flex;
		flex-direction: column;
		width: 7.25rem;
		height: 14.25rem;
		align-items: center;
	}
	.movie img{
		width: 7.25rem;
		height: 10.1875rem;
	}
	.name{
		margin-top: 0.625rem;
		font-size: 0.9375rem;
		width: 7.25rem;
		color: rgb(73, 113, 179);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.score{
		font-size: 0.7375rem;
		margin-top: 0.3125rem;
		color: #333;
	}
</style>
