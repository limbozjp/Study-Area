<template>
    <div class="day28">
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
            codeTitle_1 : 'Promise实例应用',
            code_1 : this.ProjectJs.project_dealCode`
            const repos = [
                {owner: "mojombo", id: 1 },
                {owner: "defunkt", id: 2},
                {owner: "pjhyett", id: 3},
            ];
            const owners = [
                {name: "mojombo", followers: 1232},
                {name: "defunkt", followers: 563},
                {name: "pjhyett", followers: 4765},
            ];
            /**
             * {resolve} 返回正确信息
             * {reject} 返回错误信息
             */
            // 通过Id查找repos
            // resolve返回查找到的信息
            // reject返回错误信息提示
            function getRepoById(id) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const repo = repos.find(repo => repo.id === id);
                        if (repo) {
                            resolve(repo);
                        }else{
                            reject(Error('No repo Found.'))
                        }
                    }, 2000);
                })
            }
            // 通过查找到的rpeo查找owners
            // resolve返回查找到的信息
            // reject返回错误信息提示
            function getOwner(repo) {
                return new Promise((resolve, reject) => {
                    const owner = owners.find(owner => owner.name === repo.owner);
                    if (owner) {
                        resolve(owner)
                    } else{
                        reject(Error('Can not Found Owner.'))
                    }
                })
            }
            // 封装方法
            function ceshi (id) {
                getRepoById(id)
                .then(repo => {
                    console.log(repo);
                    // 此处必须使用return返回才可以获得
                    return getOwner(repo);
                })
                .then(owner => {
                    console.log(owner);
                })
                .catch(err => {
                    console.error(err);
                })
            }
            ceshi(1);   //{owner: "mojombo", id: 1}{name: "mojombo", followers: 1232}
            ceshi(4);   //Error: No repo Found.
            `,
        }
    },
    mounted() {
        const repos = [
            {owner: "mojombo", id: 1 },
            {owner: "defunkt", id: 2},
            {owner: "pjhyett", id: 3},
        ];
        const owners = [
            {name: "mojombo", followers: 1232},
            {name: "defunkt", followers: 563},
            {name: "pjhyett", followers: 4765},
        ];
        /**
         * {resolve} 返回正确信息
         * {reject} 返回错误信息
         */
        // 通过Id查找repos
        // resolve返回查找到的信息
        // reject返回错误信息提示
        function getRepoById(id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const repo = repos.find(repo => repo.id === id);
                    if (repo) {
                        resolve(repo);
                    }else{
                        reject(Error('No repo Found.'))
                    }
                }, 2000);
            })
        }
        // 通过查找到的rpeo查找owners
        // resolve返回查找到的信息
        // reject返回错误信息提示
        function getOwner(repo) {
            return new Promise((resolve, reject) => {
                const owner = owners.find(owner => owner.name === repo.owner);
                if (owner) {
                    resolve(owner)
                } else{
                    reject(Error('Can not Found Owner.'))
                }
            })
        }
        // 封装方法
        function ceshi (id) {
            getRepoById(id)
            .then(repo => {
                console.log(repo);
                // 此处必须使用return返回才可以获得
                return getOwner(repo);
            })
            .then(owner => {
                console.log(owner);
            })
            .catch(err => {
                console.error(err);
            })
        }
        ceshi(1);   //{owner: "mojombo", id: 1}{name: "mojombo", followers: 1232}
        ceshi(4);   //Error: No repo Found.
    },
}
</script>