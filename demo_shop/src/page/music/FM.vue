<template>
	<div>
		<head-cmp v-on:next='next'></head-cmp>
		<music-cmp :Fmlist="Music" :isnext="isnext"></music-cmp>
		<lyric-cmp :lyric="lyric"></lyric-cmp>
	</div>
</template>

<script>
	import HeadCmp from '../../components/music/header.vue'
	import MusicCmp from '../../components/music/music.vue'
	import LyricCmp from '../../components/music/lyric.vue'
	import axios from 'axios'
	export default{
		name: 'FM',
		components:{
			HeadCmp,
			MusicCmp,
			LyricCmp
		},
		data(){
			return{
				Music: [],
				lyric: '',
				isnext: false
			}
		},
		methods:{
			next(){
				let url = '/fm/playlist?channel=-10&app_name=radio_website&version=100&type=p&sid=1386959'
				axios({
					method: 'get',
					url: url
				}).then((res)=>{
					console.log(res.data.song)
					if(res.data.song[0]){
						this.Music = res.data.song;
						this.isnext = true
						let lyricurl ='/fm/lyric?sid='+res.data.song[0].sid+'&ssid='+res.data.song[0].ssid;
						axios({
							method: 'get',
							url: lyricurl
						}).then((res)=>{
							this.lyric = res.data.lyric
						})
					}else{
						this.isnext = false
					}
				})
			},
		},
		mounted(){
			let url = '/fm/playlist?channel=-10&app_name=radio_website&version=100&type=p&sid=1386959'
			axios({
				method: 'get',
				url: url
			}).then((res)=>{
				console.log(res.data)
				if(res.data.song[0]){
					this.Music = res.data.song;
					let lyricurl ='/fm/lyric?sid='+res.data.song[0].sid+'&ssid='+res.data.song[0].ssid;
					axios({
						method: 'get',
						url: lyricurl
					}).then((res)=>{
						this.lyric = res.data.lyric
					})
				}
			})
		}
	}
</script>

<style scoped>
</style>
