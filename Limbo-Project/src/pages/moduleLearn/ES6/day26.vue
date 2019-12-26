<template>
    <div class="day26">
        Promise解决回调地狱/对异步编程的反馈（使用.then()方法）
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username : '',
            codeTitle_1 : '用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。',
            code_1 : this.ProjectJs.project_dealCode`
            const users = this.$axios.get('https://api.github.com/users');
            console.log(users);
            users.then(res => {
                console.log(res.data);
                const username = res.data[0].login;
                return this.$axios.get('https://api.github.com/users/'+username+'/repos')
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            `,
        }
    },
    mounted() {
        const users = this.$axios.get('https://api.github.com/users');
        console.log(users);
        users.then(res => {
            console.log(res.data);
            const username = res.data[0].login;
            return this.$axios.get('https://api.github.com/users/'+username+'/repos')
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },
}
</script>  