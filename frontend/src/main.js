import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import "./static/sanitize.css"

Vue.use(VueRouter);

import OverviewPage from "./pages/OverviewPage";


const routes = [
    {path: "/", component: OverviewPage}
];

const router = new VueRouter({
    routes
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    components: {App}
}).$mount("#app");
