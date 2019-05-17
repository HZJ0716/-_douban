<template>
	<div class="container">
		<head-cmp></head-cmp>
		<swiper-cmp></swiper-cmp>
		<list-cmp :booklist="booklist"></list-cmp>
	</div>
</template>

<script>
	import HeadCmp from "../../components/book/head.vue"
	import SwiperCmp from "../../components/book/swiper_new.vue"
	import ListCmp from "../../components/book/newlist.vue"
	import axios from 'axios'
	export default{
		name: 'Book',
		components:{
			HeadCmp,
			SwiperCmp,
			ListCmp
		},
		data(){
			return {
				booklist: [],
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
					let url = '/book/j/category/top?start='+start+'&limit=21';
					axios({
						methods: 'get',
						url: url
					}).then(res=>{
						res.data.forEach((item)=>{
							this.booklist.push(item);
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
			let url = '/book/j/category/new?start=0&limit=21'
			axios({
				method: 'GET',
				url:url
			}).then((res)=>{
				this.booklist = res.data
			})
		}
	}
</script>

<style scoped>
	
</style>
