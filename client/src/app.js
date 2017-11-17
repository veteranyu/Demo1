import Vue from 'vue'
import VueRouter from "vue-router";

// 引入组件
import list from "./List.vue";
import add from "./Add.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: "/add",
        component: add
    }
]

var router =  new VueRouter({
    routes
})
const app = new Vue({
	  router,  // 注入到根实例中
	  render: h => h(list)
	})
export { app, router }