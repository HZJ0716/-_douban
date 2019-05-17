<template>
	<div class="container">
		<ul>
			<router-link tag='li' :to="'/index'">
				<span class="title c1">电影</span>
				<span>影院热映</span>
			</router-link>
			<router-link tag='li' :to="'/Top'">
				<span class="title c2">Top</span>
				<span>最受欢迎</span>
			</router-link>
			<router-link tag='li' :to="'/book'">
				<span class="title c3">图书</span>
				<span>畅销排行</span>
			</router-link>
			<li>
				<span class="title c4">同城</span>
				<span>周末活动</span>
			</li>
			<li>
				<span class="title c5">小组</span>
				<span>志趣相投</span>
			</li>
			<li>
				<span class="title c6">音乐</span>
				<span>新碟榜</span>
			</li>
			<router-link tag='li' :to="'/book_new'">
				<span class="title c7">阅读</span>
				<span>电子书</span>
			</router-link>
			<li>
				<span class="title c8">游戏</span>
				<span>虚拟世界</span>
			</li>
			<li>
				<span class="title c9">应用</span>
				<span>玩手机</span>
			</li>
			<li>
				<span class="title c10">应用</span>
				<span>友邻动态</span>
			</li>
			<router-link tag='li' :to="'/fm'">
				<span class="title c11">FM</span>
				<span>红心歌单</span>
			</router-link>
			<li>
				<span class="title c12">豆品</span>
				<span>生活美学</span>
			</li>
		</ul>
		<router-link tag="button" :to='"/login"'>登陆豆瓣</router-link>
		<div class="btn">
			<button>使用桌面板</button>
			<div class="line"></div>
			<button>使用豆瓣App</button>
		</div>
	</div>
</template>

<script>
	export default{
	name: 'list',
	methods:{
		handle(){
			this.$emit('handleShow');
		}
	}
}
</script>

<style scoped>
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.container{
		display: flex;
		flex-direction: column;
		margin-top: 1.15rem;
	}
	ul li{
		float: left;
		width: 33%;
		height: 4.35rem;
		background-color: #fff;
		text-align: center;
		line-height: 2.95rem;
	}
	li > span{
		display: block;
		height: 1.0625rem;
		margin-bottom: 0.3125rem;
		font-size: 0.65rem;
		color: #777;
		letter-spacing: 0.1025rem;
	}
	.btn{
		display: flex;
		justify-content: space-around;
	}
	.line{
		margin-top: 0.8rem;
		width: 0.0625rem;
		height: 1.5rem;
		background-color: rgb(243, 243, 243);
	}
	.title{
		font-size: 1.55rem;
		font-weight: 540;
	}
	button{
		height: 2.9rem;
		font-size: 0.95rem;
		background-color: #fff;
		border: 0.0625rem solid rgb(243, 243, 243);
		border-left: 0;
		border-right: 0;
		color: rgb(66, 189, 86);
		outline: none;
	}
	.c1{color: rgb(35, 132, 232);}
	.c2{color: rgb(122, 106, 219);}
	.c3{color: rgb(171, 120, 96);}
	.c4{color: rgb(230, 70, 126);}
	.c5{color: rgb(42, 184, 204);}
	.c6{color: rgb(244, 143, 46);}
	.c7{color: rgb(171, 120, 96);}
	.c8{color: rgb(87, 116, 208);}
	.c9{color: rgb(89, 108, 221);}
	.c10{color: rgb(225, 100, 77);}
	.c11{color: rgb(64, 207, 177);}
	.c12{color: rgb(66, 189, 86);}
</style>
