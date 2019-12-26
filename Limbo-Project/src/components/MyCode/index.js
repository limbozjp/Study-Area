import codeComponent from "./code.vue"
const MyCode = {
    install: function(Vue){
        // 第一个参数为main.js注册名
        Vue.component("baseCode", codeComponent)
    }
}
export default MyCode