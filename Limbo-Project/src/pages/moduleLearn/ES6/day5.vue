<template>
    <div class="day5">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_4" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '箭头函数语法/隐式返回/匿名函数',
            code_1 : this.ProjectJs.project_dealCode`
                const numbers = [1, 2, 3, 4, 5];
                普通函数写法
                const double = numbers.map(function (number) {
                    return number * 2
                })
                console.log(double) //[2, 4, 6, 8, 10]
            `,
            codeTitle_2 : '箭头函数单参数写法',
            code_2 : this.ProjectJs.project_dealCode`
                箭头函数单参数第一种写法
                const double_2 = numbers.map((number) => {
                    return number * 2
                })
                console.log(double_2) //[2, 4, 6, 8, 10]
                箭头函数单参数第二种写法
                const double_3 = numbers.map(number => {
                    return number * 2
                })
                console.log(double_3) //[2, 4, 6, 8, 10]
            `,
            codeTitle_3 : '箭头函数多参数写法',
            code_3 : this.ProjectJs.project_dealCode`
                const double_4 = numbers.map((number,i) => {
                    return i + ':' + number
                })
                console.log(double_4) //["0:1", "1:2", "2:3", "3:4", "4:5"]
            `,
            codeTitle_3 : '箭头函数无参数写法()必须存在',
            code_3 : this.ProjectJs.project_dealCode`
                const double_5 = numbers.map(() => {
                    return 'hello'
                })
                console.log(double_5) //["hello", "hello", "hello", "hello", "hello"]
            `,
            codeTitle_4 : '箭头函数的隐式返回/return为显式返回',
            code_4 : this.ProjectJs.project_dealCode`
                const double_6 = numbers.map(number => number * 2)
                console.log(double_6) //[2, 4, 6, 8, 10]

                const great = name => {console.log('name:' + name)}
                great('limbo')  //name:limbo
                箭头函数都是匿名函数
            `,
        }
    },
    mounted() {},
}
</script>