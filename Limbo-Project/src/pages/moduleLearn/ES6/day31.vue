<template>
    <div class="day31">
        ESLint  可组装的JavaScript和JSX检查工具
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : 'JavaScript代码规范',
            code_1 : this.ProjectJs.project_dealCode`
            https://cn.eslint.org/
            https://github.com/airbnb/javascript
            https://www.html.cn/archives/8345
            slug/gravatar/
            SystemJs(打包工具)
            Babel(将ES6转化为ES5代码)适用于适配浏览器
            Polyfill.io(将ES6的新特性转化与Bable搭配使用)适用于适配浏览器
            :设置——>More tools——>Network Conditions——>Select automatically(在chrome浏览器当中选择浏览器版本)

            `,
        }
    },
}
</script>