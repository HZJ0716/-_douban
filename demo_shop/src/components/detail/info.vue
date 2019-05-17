<template>
	<div>
		<div class="container" v-for="item in detailList">
			<span class="name">{{item.title}}</span>
			<div class="info">
				<img class="movieImg" :src="item.cover_img.url">
				<div class="score">
					<span>
						<span>影视评分：{{item.extra.rating_group.rating.value}}分</span>
						<span>{{item.extra.rating_group.rating.count}}人评价</span>
					</span>
				</div>
				<div class="des">
					<span>{{desc}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Info',
		props:{
			detailList: Array,
			desc: String
		},
		data(){
			return {
			}
		},
		watch:{
			desc: function(newval,oldval){
				// 强制渲染页面..原因未知
				this.$forceUpdate();
			}
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		flex-direction: column;
		margin-top: 1.675rem;
		padding-left: 0.625rem;
		height: 15.625rem;
	}
	.name{
		font-size: 1.5625rem;
	}
	.info{
		position: relative;
		font-size: 0.9375rem;
		overflow: hidden;
	}
	.des{
		margin-top: 0.625rem;
		color: rgb(114, 99, 73);
		font-size: 0.8375rem;
		letter-spacing: 0.07rem;
		line-height: 1.5;
	}
	.movieImg{
		float: right;
		margin-right: 1rem;
		margin-left: 0.3125rem;
		width: 6.8125rem;
		height: 10.25rem;
	}
	.score{
		display: flex;
		flex-direction: row;
		margin-top: 0.625rem;
		font-size: 0.85rem;
	}
	.score span:nth-child(1){
		color: rgb(84, 73, 73);
		margin-right: 1rem;
	}
	.score span:nth-child(2){
		color: rgb(170, 178, 200);
	}
</style>
