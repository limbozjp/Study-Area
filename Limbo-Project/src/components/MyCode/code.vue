<template>
    <div class="code">
        <div class="limbo_codeTitle" v-if="codeTitle != ''">{{codeTitle}}</div>
        <div class="limbo_codeContent" v-html="code" v-if="code != ''"></div>
    </div>
</template>

<style scoped>
.limbo_codeContent{
    background-color: #f5f5f5;
    font-family: Courier New!important;
    font-size: 12px!important;
    border: 1px solid #ccc;
    padding: 5px;
    overflow: auto;
    margin: 5px 0;
    color: #000;
}
.code_result{
    color: darkorchid;
}
</style>

<script>
export default {
    model : {
        prop : 'code',// 使用model，这2个属性，
        // prop属性说，我要将code作为该组件被使用时（此处为code组件被父组件调用）v-model能取到的值，
        // event说，我emit 'dealCode' 的时候，参数的值就是父组件v-model收到的值。
        event : 'dealCode'
    },
    props : {
        code : '',
        codeTitle : '',
    },
    data () {
        return {
            
        }
    },
    mounted() {
        // console.log(this.code);
    },
    methods: {
        fn2 () {
            this.$emit('dealCode','12321213123121')
        }
    },
}
</script>