<template>
    <div class="day17">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '数组的entries()方法',
            code_1 : this.ProjectJs.project_dealCode`
            同时获取到数组的属性和索引值
            const fruits = ['apple', 'banana', 'orange', 'Mango'];
            for (let fruit of fruits.entries()) {
                console.log(fruit); //[0, "apple"],[1, "banana"],[2, "orange"],[3, "Mango"]
            }
            // 利用数组解构
            for (let [index, fruit] of fruits.entries()) {
                console.log(fruit + ' ranks ' + index + ' in my favorite fruits');
            }
            // apple ranks 0 in my favorite fruits
            // banana ranks 1 in my favorite fruits
            // orange ranks 2 in my favorite fruits
            // Mango ranks 3 in my favorite fruits
            `,
        }
    },
    mounted() {
        const fruits = ['apple', 'banana', 'orange', 'Mango'];
        for (let fruit of fruits.entries()) {
            console.log(fruit);
        }
        for (let [index, fruit] of fruits.entries()) {
            console.log(fruit + ' ranks ' + index + ' in my favorite fruits');
        }
        // apple ranks 0 in my favorite fruits
        // banana ranks 1 in my favorite fruits
        // orange ranks 2 in my favorite fruits
        // Mango ranks 3 in my favorite fruits
    },
}
</script>