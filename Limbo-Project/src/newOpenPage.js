// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import newPage from './newPage'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import '@/public/css/reset.css'         //引入公共样式
import '@/public/css/Element.css'       //引入element样式文件便于项目修改，需要注意要同时复制font文件否则icon将不可使用
import Base from './public/js/index.js' //引入公共方法JS文件

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.prototype.BaseJs = Base     //引入公共方法JS文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { newPage },
    template: '<newPage/>'
})
