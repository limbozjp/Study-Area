<template>
    <div class="day12">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '标签模板字符串的最佳实践（过滤用户输入）防止XXS攻击',
            code_1 : this.ProjectJs.project_dealCode`
                ep.用户在输入框中输入文字时，输入一个img标签并带有一些事件和脚本，用来非法窃取信息。
                通过标签模板字符串进行处理，得到干净的结构
                通过使用DOMPurify达到净化字符串的目的，详见实例代码
            `,
        }
    },
}
</script>