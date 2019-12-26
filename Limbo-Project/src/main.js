// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;

import ElementUI from 'element-ui'
import '@/public/css/reset.css'         //引入公共样式
import '@/public/css/Element.css'       //引入element样式文件便于项目修改，需要注意要同时复制font文件否则icon将不可使用
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

import Base from './public/js/index.js' //引入公共方法JS文件
Vue.prototype.BaseJs = Base             //引入公共方法JS文件

import Project from './public/js/project.js'    //引入当前项目方法JS文件
Vue.prototype.ProjectJs = Project               //引入当前项目方法JS文件

import baseCode from "./components/MyCode/index";   //引入代码模板公共组件
Vue.use(baseCode)                                   //引入代码模板公共组件

Vue.config.productionTip = false

import { Loading } from 'element-ui';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    Loading.service({
        lock: true,
        text: '加载中......',
        background: 'rgba(0,0,0,0.5)'
    });
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Loading.service().close();
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
