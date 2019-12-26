<template>
    <div class="day24">
        扩展运算符在函数中的应用
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '将一个数组合并成一个数组',
            code_1 : this.ProjectJs.project_dealCode`
            const fruit = ['apple', 'bananas', 'pear'];
            const newFruit = ['orange', 'mongo'];
            fruit.push(...newFruit)
            console.log(fruit);     //["apple", "bananas", "pear", "orange", "mongo"]
            `,
            codeTitle_2 : '需要将一个数组中的每个元素作为参数传入到一个函数中去',
            code_2 : this.ProjectJs.project_dealCode`
            const dateFields = [2019, 7, 9, 20, 0, 0];
            const date = new Date(...dateFields);
            console.log(date);      //Fri Aug 09 2019 20:00:00 GMT+0800 (中国标准时间)
            `,
        }
    },
    mounted() {
        const fruit = ['apple', 'bananas', 'pear'];
        const newFruit = ['orange', 'mongo'];
        fruit.push(...newFruit)
        console.log(fruit);     //["apple", "bananas", "pear", "orange", "mongo"]
        
        const dateFields = [2019, 7, 9, 20, 0, 0];
        const date = new Date(...dateFields);
        console.log(date);      //Fri Aug 09 2019 20:00:00 GMT+0800 (中国标准时间)
        
    },
}
</script>