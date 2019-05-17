<template>
	<div class="container">
		<head-cmp></head-cmp>
		<info-cmp class="info" :detailList="listArr" :desc="desc"></info-cmp>
		<tag-cmp :taglist="tag" v-on:handleShow='Show'></tag-cmp>
		<des-cmp :title="title" :desc="des"></des-cmp>
		<avator-cmp :avatorlist="avator"></avator-cmp>
		<transition name="move">
			<show-cmp class="show" v-on:handleShow='disShow' v-show="isShow"></show-cmp>
		</transition>
		<transition name="movebg">
		<div class="shade" v-show="isShow" @click='disShow'></div>
		</transition>
	</div>
</template>

<script>
	import HeadCmp from '../../components/index/head.vue'
	import InfoCmp from '../../components/detail/info.vue'
	import TagCmp from '../../components/detail/tag.vue'
	import DesCmp from '../../components/detail/des.vue'
	import AvatorCmp from '../../components/detail/avator.vue'
	import ShowCmp from '../../components/detail/show.vue'
	import axios from 'axios'
	export default{
		name: 'Detail',
		components:{
			HeadCmp,
			InfoCmp,
			TagCmp,
			DesCmp,
			AvatorCmp,
			ShowCmp
		},
		methods:{
			
		},
		data(){
			return {
				listArr: [],
				desc: '',
				tag:[],
				title: '',
				des: '',
				avator: [],
				isShow: false
			}
		},
		methods:{
			disShow(){
				this.isShow = false
			},
			Show(){
				this.isShow = true;
			}
		},
		mounted(){
			let index = this.$route.params.id;
			let url = '/detail/' + index;
			axios({
				methods: 'GET',
				url: url
			}).then(res=>{
				// 获取数据与数据分割处理
				this.listArr[0] = res.data
				let re = />(.*?)</g;
				let info = this.listArr[0].desc.replace(/(^\s*)|(\s*$)|[\r\n]/g,"");
				info = re.exec(info)[0].replace(/>|</g,"");
				this.des = info
				this.desc = res.data.extra.short_info
				this.tag = res.data.tags;
				this.title = res.data.title;
				this.avator = res.data.extra.info;
			})
		}
	}
</script>

<style scoped>
	.shade{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.4);
		z-index: 1;
	}
	.show{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		z-index: 10;
	}
	/* 过渡动画 */
	.move-leave-to{
		transform: translateX(100%);
	}
	.move-leave-active,.move-enter-active{
		transition: all 0.5s ease;
	}
	.move-enter{
		transform: translateX(-100%);
	}
	.movebg-leave-active,.movebg-enter-active{
			transition: all 0.2s ease;
	}
</style>
