<template>
	<div class="container">
		<div class="lyric" :class="lyric=='暂无歌词'?'none':''">{{lyric}}</div>
	</div>
</template>

<script>
	export default{
		name: 'Lyric',
		props:{
			lyric: String
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	.lyric{
		color: rgba(143, 142, 148);
		font-size: 0.7rem;
		overflow: auto;
		display: -webkit-box;
		width: 56%;
		text-align: center;
		letter-spacing: 0.06rem;
		line-height: 1.2rem;
		height: 14rem;
		box-shadow: 0 0.5rem 0 0 rgba(210, 210, 210, 0.3) inset;
	}
	.none{
		text-indent: 4.7rem;
	}
	.lyric::-webkit-scrollbar{
		display: none;
	}
</style>
