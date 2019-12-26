<template>
    <div class="day29">
        处理多个Promise
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : 'Promise.all()/只有全部的Promise都resolve返回时才会走then(),有一个存在reject()则会走catch()',
            code_1 : this.ProjectJs.project_dealCode`
            const usersPromise= new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(['mojombo', 'vanpelt', 'wycats'])
                }, 2000);
            });
            const moviePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({name : '摔跤吧！爸爸', rating: 9.2, year: 2016})
                }, 500);
            })
            Promise
            .all([usersPromise, moviePromise])
            .then(res => {
                // 数组解构
                const [user, movie] = res;
                console.log(user)   //["mojombo", "vanpelt", "wycats"]
                console.log(movie)  //{name: "摔跤吧！爸爸", rating: 9.2, year: 2016}
            })
            .catch(err => {
                console.error(err);
            })
            `,
            codeTitle_2 : 'Promise.race()/由第一个返回的Promise决定，如果是resolve()则运行then(),如果是reject()则运行catch()',
            code_2 : this.ProjectJs.project_dealCode`
            const usersPromise= new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(['mojombo', 'vanpelt', 'wycats'])
                }, 2000);
            });
            const moviePromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    // resolve({name : '摔跤吧！爸爸', rating: 9.2, year: 2016})
                    reject(Error('No Movie.'))
                }, 500);
            })
            Promise
            .race([usersPromise, moviePromise])
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);     //Error: No Movie.
            })
            `,
        }
    },
    mounted() {
        const usersPromise= new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['mojombo', 'vanpelt', 'wycats'])
            }, 2000);
        });
        const moviePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve({name : '摔跤吧！爸爸', rating: 9.2, year: 2016})
                reject(Error('No Movie.'))
            }, 2500);
        })
        // Promise
        // .all([usersPromise, moviePromise])
        // .then(res => {
        //     const [user, movie] = res;
        //     console.log(user)
        //     console.log(movie)
        // })
        // .catch(err => {
        //     console.error(err);
        // })
        Promise
        .race([usersPromise, moviePromise])
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);     //Error: No Movie.
        })
    },
}
</script>