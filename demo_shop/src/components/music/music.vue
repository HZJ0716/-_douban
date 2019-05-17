<template>
	<div class="container">
		<div class="box" @click="isShow">
			<img class="photo" :src="Fmlist[0].picture">
			<img v-show="show" class="play" src="/static/images/play.svg">
			<audio autoplay="true" id='music' currentTime='currentTime'>
				<source :src="Fmlist[0].url"></source>
			</audio>
			<div v-show="show" class="shade"></div>
		</div>
		<span class="name">{{Fmlist[0].albumtitle}}</span>
		<span class="avator">{{Fmlist[0].release.singers[0].name}}</span>
	</div>
</template>

<script>
	import ProcessCmp from './process'
	export default{
		name: 'music',
		components:{
			ProcessCmp
		},
		props:{
			Fmlist: Array,
			isnext: Boolean
		},
		data(){
			return {
				show: false,
				isplay: true,
				musicLength: '00:00',
				currentTime: '00:00'
			}
		},
		methods:{
			isShow(){
				// 遮罩控制
				this.show = !this.show;
				// 音乐控制
				let audio = document.getElementById('music');
				audio.addEventListener('currentTime',()=>{
					console.log(audio.currentTime);
				})
				this.currentTime = audio.currentTime;
				if(this.isplay){
					audio.pause()
					this.isplay = false
				}else{
					audio.play()
					this.isplay = true
				}
			}
		},
		watch:{
			isnext: function(newval,oldval){
				if(newval){
					let audio = document.getElementById('music');
					this.isplay = true
					// 重新加载数据源
					audio.load()
					this.currentTime = audio.currentTime;
					if(audio.duration){
						this.musicLength = audio.duration;
					}else{
						audio.oncanplay = function (){
						this.musicLength = audio.duration;
						}
					}
				}
			}
		}
	}
</script>

<style scoped>
	span{
		font-weight: 100;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.photo{
		position: relative;
		width: 14rem;
		height: 14rem;
		border-radius: 50%;
	}
	.box{
		position: relative;
		text-align: center;
		margin: 2rem;
	}
	.play{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 1.5rem;
		height: 1.5rem;
	}
	.name{
		font-size: 1.25rem;
		color: rgb(23, 181, 86);
	}
	.avator{
		font-size: 0.9rem;
		margin: 0.6rem;
	}
	.shade{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 50%;
		background-color: rgba(231, 234, 237, 0.4);
	}
</style>
