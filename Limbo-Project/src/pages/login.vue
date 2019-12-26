<template>
    <div class="login">
        <div>
            <el-button type="primary" plain @click="login">进入主页</el-button>
        </div>
    </div>
</template>

<style scoped>
    .login{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
export default {
    methods: {
        login () {
            this.$router.push({
                name : 'home'
            })
        }
    },
    mounted() {
        console.log(window.localStorage.key)
    },
}
</script>
