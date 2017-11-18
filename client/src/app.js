import Vue from 'vue'
import VueRouter from "vue-router";

// 引入组件
import App from "./App.vue";
import list from "./List.vue";
import add from "./Add.vue";
import * as API from './api';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
Vue.prototype.$api = API;

const routes = [
    {path:'/',redirect:'/list'},
    {path:'/list',component:list},
    {path:'/add',component:add}
]

var router =  new VueRouter({
    routes
})
const app = new Vue({
	  router,  // 注入到根实例中
	  render: h => h(App)
	})
export { app, router }