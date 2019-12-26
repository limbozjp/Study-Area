<template>
    <div class="day20">
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
            codeTitle_1 : '剩余参数/...arguments',
            code_1 : this.ProjectJs.project_dealCode`
            无法确定函数传入参数具体个数时使用剩余参数，此时返回一个由参数组成的数组
            接收参数的时候可以使用数组解构
            const player = ['limbo', 123, 0, 5, 10, 25, 5];
            const [name, id, ...score] = player;
            console.log(name, id, score);    //limbo 123 [0, 5, 10, 25, 5]
            `,
        }
    },
}
</script>