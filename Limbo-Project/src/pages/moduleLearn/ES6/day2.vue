<template>
    <div class="day2">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
        <baseCode v-model="code_4" :codeTitle="codeTitle_4"></baseCode>
        <baseCode v-model="code_5" :codeTitle="codeTitle_5"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : 'let const在同一个作用域内不能重复声明同一个变量',
            code_1 : this.ProjectJs.project_dealCode`
                let count = 10;
                let discount = 0.9;
                if (count > 5) {
                    let discount = 0.5;
                    console.log(discount);//0.5 此时discount的作用域是if的{}
                }
                console.log(discount);//0.9 此时discount的作用域是全局
            `,
            codeTitle_2 : 'let的值可以更新',
            code_2 : this.ProjectJs.project_dealCode`
                let count = 10;
                count = 20;
                console.log(count); //20
            `,
            codeTitle_3 : 'const的值不可以更新',
            code_3 : this.ProjectJs.project_dealCode`
                let count = 10;
                count = 20;
                console.log(count); //页面报错
            `,
            codeTitle_4 : 'const声明的变量如果是引用类型的，可以改变其中的属性，但是不可以重新赋值一个新的对象（页面报错）',
            code_4 : this.ProjectJs.project_dealCode`
                const person = {
                    name : 'limbo',
                    age : 18,
                }
                console.log(person) //{age: 18, name: "limbo"}
                person = {name : 'bool'}    //页面报错
                person.age = 20;
                console.log(person); //{age: 18, name: "limbo"}
            `,
            codeTitle_5 : 'Object.freeze()不允许改变对象的属性值',
            code_5 : this.ProjectJs.project_dealCode`
                const person = {
                    name : 'limbo',
                    age : 18,
                }
                const limbo = Object.freeze(person);
                limbo.age = 20;
                console.log(limbo)  //报错,属性无法修改
            `,
        }
    },
    mounted() {
        
    },
}
</script>