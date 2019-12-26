<template>
    <div class="day8">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '箭头函数不适用情况（在vue项目中this的指向为VUE项目，该情况只适用于原生JS）',
            code_1 : this.ProjectJs.project_dealCode`
            1.作为构造函数/一个方法需要绑定到对象的时候，此时this指向window
            2.当你真正需要this的时候,
            3.需要使用arguments对象
            `,
            codeTitle_2 : '当使用new生成一个构造函数的实例时内部需要完成四步',
            code_2 : this.ProjectJs.project_dealCode`
            生成一个新的对象
            构造函数内部的this值指向新生成的对象
            把这个对象绑定在原型对象
            返回新生成的对象
            `,
        }
    },
}
</script>