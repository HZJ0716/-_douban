<template>
	<div class="container">
		<head-cmp></head-cmp>
		<swiper-cmp></swiper-cmp>
		<list-cmp :movielist="listArr"></list-cmp>
	</div>
</template>

<script>
	import HeadCmp from '../../components/index/head.vue'
	import SwiperCmp from '../../components/index/swiper.vue'
	import ListCmp from '../../components/Top/list.vue'
	import axios from 'axios'
	export default{
		name: 'Top',
		components:{
			HeadCmp,
			SwiperCmp,
			ListCmp
		},
		data(){
			return{
				listArr: [],
				start: 21
			}
		},
		methods:{
			onScroll(){
				// 获取可滚动框高度
				let innertHeight = document.querySelector('.container').clientHeight;
				// 获取屏幕固定高度
				let outHeight = document.documentElement.clientHeight;
				// 获取点击滚动的高度
				let scrollTop = document.documentElement.scrollTop;
				// 判断可滚动区域小于固定高度加滚动距离加载数据
				if(this.finish && innertHeight < (outHeight + scrollTop)){
					// 防止多次请求数据
					this.finish = false;
					// 请求数据
					let start = this.start;
					let url = '/api/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&sort=recommend&page_limit=21&page_start=' + start;
					axios({
						methods: 'get',
						url: url
					}).then(res=>{
						res.data.subjects.forEach((item)=>{
							this.listArr.push(item);
						})
					})
					this.start = start + 21;
				}
				else if((innertHeight) > (outHeight + scrollTop)){
					this.finish = true;
				}
			}
		},
		created(){
			// 添加滚动监听事件
			window.addEventListener('scroll', this.onScroll);
		},
		mounted(){
			let url ='/api/j/search_subjects?type=movie&tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&sort=recommend&page_limit=21&page_start=0';
			axios({
				method: 'GET',
				url:url
			}).then(res=>{
				this.listArr = res.data.subjects;
			})
		}
	}
</script>

<style scoped>
	
</style>
