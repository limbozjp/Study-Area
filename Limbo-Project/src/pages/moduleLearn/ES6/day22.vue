<template>
    <div class="day22">
        扩展运算符练习
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <div class="demo" ref="demo">
            <h2>赵巨鹏</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            dealText (text) {
                let newText = [...text].map(item => '<span>' + item + '</span>').join('');
                this.$refs.demo.innerHTML = newText;
            }
            this.dealText(this.$refs.demo.innerText)
            `,
        }
    },
    methods: {
        dealText (text) {
            let newText = [...text].map(item => `<span>${item}</span>`).join('');
            this.$refs.demo.innerHTML = newText;
            console.log(newText);
        }
    },
    mounted() {
        console.log(this.$refs.demo.innerText);
        this.dealText(this.$refs.demo.innerText)
    },
}
</script>

<style scoped>
.demo{
    width: 100%;
    height: 200px;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 50px;
    color: white;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2)
}

</style>

<style>
.day22 .demo span{
    cursor: pointer;
    display: inline-block;
    transition: transform 0.25s;
    margin: 0 10px 0 0;
}
.day22 .demo span:hover{
    transform: translateY(-20px) rotate(10deg) scale(2);
    color: aqua;
} 
</style>