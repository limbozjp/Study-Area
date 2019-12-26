<template>
    <div class="day40">
        Proxy 实例应用
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <div class="demo">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
        }
    },
    methods : {
        multiplication (num) {
            if (num < 1 || num > 9) {
                console.error(Error('请输入大于0小于9的数'))
                return
            }
            num = Math.floor(num);
            let string = '';
            for (let i = 1; i <= num; i++) {
                for (let j = 1; j <= num; j++) {
                    const two = j;
                    two <= i ? string += `${two}*${i}=${i*two} ` : ''; 
                }
                string += '\n'
            }
            console.log(string);
        }
    },
    mounted() {
        // this.multiplication(8);
    },
}
</script>