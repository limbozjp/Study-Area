<template>
    <div class="day4">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '变量提升面试题',
            code_1 : this.ProjectJs.project_dealCode`
                console.log(color); //undefined
                var color = 'yellow';
                因为JS存在变量提升(将声明提到作用域顶部)
                等价于
                var color;
                console.log(color); //undefined 因为此时的color已经声明但是没有赋值
                color = 'yellow;

                let 临时性死区
                console.log(color); //undefined
                let color = 'yellow';
            `,
            codeTitle_2 : 'let const 临时性死区',
            code_2 : this.ProjectJs.project_dealCode`
                在变量声明之前会处在临时性死区报错ReferenceError,此时无变量提升
                console.log(color); //color is no defined
                let color = 'yellow';
                const color = 'yellow';
            `,
            codeTitle_3 : 'var let const 使用说明',
            code_3 : this.ProjectJs.project_dealCode`
                默认使用const
                变量需要重新绑定或者更新的时候使用let
                在ES6中尽量不使用var
            `,
        }
    },
    mounted() {
    },
}
</script>