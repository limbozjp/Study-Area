<template>
    <div class="day27">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '编写Promise',
            code_1 : this.ProjectJs.project_dealCode`
            const success = new Promise((reslove, reject) => {
                reslove('limbo is awesome');
            });
            success
            .then(data => console.log(data))    //limbo is awesome
            .catch(err => console.log(err))

            const fail = new Promise((reslove, reject) => {
                reject(Error('limbo isn\'t awesome'));
            });
            fail
            .then(data => console.log(data))
            .catch(err => console.error(err))   //Error: limbo isn't awesome
            `,
        }
    },
    mounted() {
        const success = new Promise((reslove, reject) => {
            reslove('limbo is awesome');
        });
        success
        .then(data => console.log(data))
        .catch(err => console.log(err))

        const fail = new Promise((reslove, reject) => {
            reject(Error('limbo isn\'t awesome'));
        });
        fail
        .then(data => console.log(data))
        .catch(err => console.error(err))
    },
}
</script>