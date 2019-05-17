import Vue from "vue";
import VueRouter from "vue-router";
import index from "./page/movie/index.vue";
import Top from "./page/movie/Top.vue";
import Detail from "./page/movie/detail.vue";
import Search from "./page/search.vue";
import Book from "./page/book/book.vue";
import Bookn from "./page/book/bookn.vue";
import Music from "./page/music/FM.vue";
import Login from './page/login.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
    	path: "/",
    	redirect: "/index"
    },{
		path:"/index",
		name: 'Index',
		component: index
	},{
		path:"/Top",
		name: 'Top',
		component: Top
	},{
		path:"/detail/:id",
		name: 'Detail',
		component: Detail
	},{
		path:"/search",
		name: 'Search',
		component: Search
	},{
		path:"/login",
		name: 'Login',
		component: Login
	},{
		path:"/book",
		name: 'Book',
		component: Book
	},{
		path:"/book_new",
		name: 'Bookn',
		component: Bookn
	},{
		path:"/fm",
		name: 'FM',
		component: Music
	}
]

var router =  new VueRouter({
    routes
})
export default router;