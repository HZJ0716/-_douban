<template>
	<div>
		<head-cmp></head-cmp>
		<list-cmp></list-cmp>
	</div>
</template>

<script>
	import HeadCmp from 'components/search/head.vue'
	import ListCmp from 'components/search/list.vue'
	import axios from 'axios'
	export default{
		name: 'Search',
		components:{
			HeadCmp,
			ListCmp
		},
		data(){
			return {
				isshow: false
			}
		},
		methods:{
		}
	}
</script>

<style scoped>
</style>
