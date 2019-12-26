<template>
    <div class="day1">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    data() {
        return {
            codeTitle_0 : '',
            code_0 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : `var 声明的变量可以重新赋值/重复声明`,
            code_1 : this.ProjectJs.project_dealCode`
            var price = 100;
            var price = 200;
            console.log(price);//200
            `,
            codeTitle_2 : 'var 的作用域为函数作用域，只在当前函数内可访问',
            code_2 : this.ProjectJs.project_dealCode`
            function getPrice () {
                var price = 100;
                console.log(price);//100
            }
            console.log(price);//price is not defined
            `,
            codeTitle_3 : 'let const 属于块级作用域',
            code_3 : this.ProjectJs.project_dealCode`
            {}为一个声明块，当前{}声明的变量在外部不可访问。
            var price = 100;
            var count = 5;
            if (count > 5) {
                var discount_1 = price * 0.6;
                let discount_2 = price * 0.6;
                const discount_3 = price * 0.6;
            };
            console.log(discount_1)//60;
            console.log(discount_2)//discount_2 is not defined;
            console.log(discount_3)//discount_3 is not defined;
            `,
        }
    },
    mounted() {
        
    },
    methods: {},
    components : {}
}
</script>