<template>
	<div class="container">
		<div class="avator">
			<span class="avator_info">影人</span>
			<p>导演：{{director}}</p>
			<p>主演：</p>
			<span class="avator_main" v-on:click="handleDowns">{{mainavator}}</span>
			<span class="downdrops" v-on:click="handleDowns">(展开)</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Avator',
		props:{
			avatorlist: Array
		},
		data(){
			return {
				director: '',
				mainavator: ''
			}
		},
		methods:{
			handleDowns(){
				let p = document.querySelector('.avator_main');
				let downdrop = document.querySelector('.downdrops');
				p.style.display = 'flex';
				downdrop.style.display = 'none';
			}
		},
		watch:{
			avatorlist: function(newval,oldval){
				this.director = newval[0][1];
				this.mainavator = newval[1][1];
			}
		}
	}
</script>

<style scoped>
	.avator{
		margin: 0.825rem;
		margin-top: 2em;
	}
	
	.avator_info{
		color: rgb(178, 170, 178);
	}
	.avator p{
		margin: 0.5125rem 0;
		color: rgb(73, 73, 73);
	}
	.avator_main{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: rgb(73, 73, 73);
	}
	.downdrops{
		color: rgb(66, 189, 157);
	}
</style>
