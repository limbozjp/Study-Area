<template>
    <div class="day38">
        生成器在ajax中的应用
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day38-1.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '适用于相互依赖的ajax',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
        }
    },
    mounted() {
        const _this = this;
        function ajax(url) {
            _this.$axios.get(url).then(res => userGenerator.next(res.data))
        }
        function* step () {
            console.time();
            console.warn('='.repeat(10)+'第一次调用，获取所有用户'+'='.repeat(10));
            const users = yield ajax('https://api.github.com/users');
            
            console.warn('='.repeat(10)+'第二次调用，获取第一位用户信息。打印第一步获取的所有用户'+'='.repeat(10));            
            console.log(users);
            const firstUserRepo = yield ajax(users[0].url);
            
            console.warn('='.repeat(10)+'第三次调用，获取第一位用户关注信息。打印第一位用户信息'+'='.repeat(10));            
            console.log(firstUserRepo);
            const followers = yield ajax(firstUserRepo.followers_url);
            
            console.warn('='.repeat(10)+'第四次调用。打印第一位用户关注信息'+'='.repeat(10));            
            console.log(followers);
            console.timeEnd();
        }
        const userGenerator = step();
        userGenerator.next();
    },
}
</script>