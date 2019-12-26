<template>
    <div class="day15">
        数组解构
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        解构最常用应用场景为交换两个变量的值
        <img src="../../../assets/moduleLearn/ES6/day15-1.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '解构后的值通过索引值的位置对应',
            code_1 : this.ProjectJs.project_dealCode`
            第一类
            const numbers1 = [1, 2, 3, 4];
            const [one1, two1, three1] = numbers1;
            console.log('one1 = ' + one1);  //one1 = 1
            console.log('two1 = ' + two1);  //two1 = 2
            console.log('three1 = ' + three1);  //three1 = 3
            第二类
            const numbers2 = [1, 2, 3, 4];
            const [one2, , three2] = numbers2;
            console.log('one2 = ' + one2);  //one2 = 1
            console.log('three2 = ' + three2);  //three2 = 3
            第三类
            // ...others只能在数组的最后面
            const [one3, ...others] = numbers3;
            console.log('one3 = ' + one3);  //one3 = 1
            console.log('others = ' + others);  //others = 2,3,4（组成新数组）
            `,
            codeTitle_2 : '默认值写法（与对象解构相同）',
            code_2 : this.ProjectJs.project_dealCode`
            const codeSkill = ['JS', 'HTML', 'CSS'];
            const [one, two, three, four = 'VUE'] = codeSkill;
            console.log(one, two, three, four);     //JS HTML CSS VUE
            `,
        }
    },
    mounted() {
        const numbers1 = [1, 2, 3, 4];
        const [one1, two1, three1] = numbers1;
        console.log('one1 = ' + one1);
        console.log('two1 = ' + two1);
        console.log('three1 = ' + three1);
        const numbers2 = [1, 2, 3, 4];
        const [one2, , three2] = numbers2;
        console.log('one2 = ' + one2);
        console.log('three2 = ' + three2);
        const numbers3 = [1, 2, 3, 4];
        const [one3, ...others] = numbers3;
        console.log('one3 = ' + one3);
        console.log('others = ' + others);

        const codeSkill = ['JS', 'HTML', 'CSS'];
        const [one, two, three, four = 'VUE'] = codeSkill;
        console.log(one, two, three, four);

        let a = 10, b = 20;
        [a, b] = [b, a]
        console.log(`a=${a},b=${b}`);   //a=20,b=10
        
        
    },
}
</script>