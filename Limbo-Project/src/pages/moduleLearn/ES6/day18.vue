<template>
    <div class="day18">
        Array .from() and .of() 对象的方法
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day18-1.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day18-2.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day18-3.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day18-4.png" alt="" srcset="">
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
            
            codeTitle_1 : 'Array.from()类数组对象/可迭代的对象转化为真正的数组',
            code_1 : this.ProjectJs.project_dealCode`
            第二个参数可以传入一个map函数
            常用情况
            获取到DOM结构的类数组proto属性为NodeList无法使用数组的操作方法,转化为真正的数组后进行操作
            函数的arguments对象的proto属性为Object，同样无法使用数组的方法。
            将字符串转化为数组
            const name = 'Limno';
            console.log(Array.from(name)); //["L", "i", "m", "n", "o"]
            `,
            codeTitle_2 : 'Array.of()',
            code_2 : this.ProjectJs.project_dealCode`
            保证结果返回的一直由参数组成的数组
            Array.of(1)     //[1]
            Array.of(1,2)   //[1,2]
            `,
        }
    },
}
</script>