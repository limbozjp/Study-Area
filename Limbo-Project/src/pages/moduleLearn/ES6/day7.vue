<template>
    <div class="day7">
        函数参数的默认值
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
            codeTitle_1 : '基础参数默认值写法',
            code_1 : this.ProjectJs.project_dealCode`
                demo (a, b) {
                    a = a || 5;
                    b = b || 10;
                    return a * b;
                }
                demo(); //50
                demo(1, 5); //5
            `,
            codeTitle_2 : '箭头函数参数默认值写法(直接在形参上赋值)',
            code_2 : this.ProjectJs.project_dealCode`
                demo (a = 3, b = 5) {
                    return a * b;
                }
                demo(); //15
                demo(1, 3);  //3
                demo(1);    //5
                demo(undefined, 2);  //6
            `,
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>