<template>
    <div class="day19">
        ES6数组中的新方法
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
        <baseCode v-model="code_4" :codeTitle="codeTitle_4"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : 'find(element, index, array) 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。',
            code_1 : this.ProjectJs.project_dealCode`
            element|当前遍历到的元素
            index|当前遍历到元素的索引
            array|数组本身
            const inventory = [
                {name : 'apple', quantity : 2},
                {name : 'bananas', quantity : 0},
                {name : 'orange', quantity : 1},
            ]
            const bananas = inventory.find(fruit => fruit.name === 'bananas');
            console.log(bananas);   //{name: "bananas", quantity: 0}
            `,
            codeTitle_2 : 'findIndex(element, index, array)findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。',
            code_2 : this.ProjectJs.project_dealCode`
            const bananasIndex = inventory.findIndex(fruit => fruit.name === 'bananas');
            console.log(bananasIndex);   //1
            `,
            codeTitle_3 : 'some(element, index, array) 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。',
            code_3 : this.ProjectJs.project_dealCode`
            const isEnough = inventory.some(fruit => fruit.quantity > 0);
            console.log(isEnough);      //true
            `,
            codeTitle_4 : 'every(element, index, array) 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。',
            code_4 : this.ProjectJs.project_dealCode`
            const isAllEnough = inventory.every(fruit => fruit.quantity > 0);
            console.log(isAllEnough);   //false
            `,
        }
    },
    mounted() {
        const inventory = [
            {name : 'apple', quantity : 2},
            {name : 'bananas', quantity : 0},
            {name : 'orange', quantity : 1},
        ]
        const bananas = inventory.find(fruit => fruit.name === 'bananas');
        console.log(bananas);   //{name: "bananas", quantity: 0}
        const bananasIndex = inventory.findIndex(fruit => fruit.name === 'bananas');
        console.log(bananasIndex);      //1
        const isEnough = inventory.some(fruit => fruit.quantity > 0);
        console.log(isEnough);      //true
        const isAllEnough = inventory.every(fruit => fruit.quantity > 0);
        console.log(isAllEnough);   //false
    },

}
</script>