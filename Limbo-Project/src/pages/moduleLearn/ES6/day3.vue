<template>
    <div class="day3">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : 'let const 使用场景',
            code_1 : this.ProjectJs.project_dealCode`
                代替立即执行函数
                for循环中打印当前值
                for (var i = 0; i < 10; i++) {
                    setTimeout(() => {
                    console.log('i='i); //i=10 * 10
                    }, 1000);
                }
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => {
                    console.log('i='i); //i=0 i=2 i=3 ... i=9 
                    }, 1000);
                }
                注意不能使用const 因为其并不能被改写
            `,
        }
    },
    mounted() {
        
    },
}
</script>