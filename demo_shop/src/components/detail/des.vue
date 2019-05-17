<template>
	<div class="container">
		<div class="des">
			<span>{{title}}的剧情简介</span>
			<div class="desc">
				<p v-on:click="handleDown">{{desc}}</p>
				<span class="downdrop" v-on:click="handleDown">(展开)</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Des',
		props:{
			title: String,
			desc: String
		},
		methods:{
			handleDown(){
				let p = document.querySelector('.des p');
				let downdrop = document.querySelector('.downdrop');
				p.style.display = 'flex';
				downdrop.style.display = 'none';
			}
		}
	}
</script>

<style scoped>
	.des{
		margin: 0.825rem;
		margin-top: 2em;
	}
	.des > span{
		color: rgb(178, 170, 178);
	}
	.downdrop{
		color: rgb(66, 189, 157);
	}
	.desc p{
		margin: 0.5875rem 0;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		color: rgb(73, 73, 73);
	}
</style>
