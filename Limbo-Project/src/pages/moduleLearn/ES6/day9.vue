<template>
    <div class="day9">
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
            codeTitle_1 : '模板字符串 Template Strings / Template literals',
            code_1 : this.ProjectJs.project_dealCode`
            const person = 'limbo';
            const age = 18;
            const sentence = person + ' is ' + age + ' years old.';
            console.log(sentence);//limbo is 18 years old.
            const sentence_2 = 模板字符串写法;
            console.log(sentence_2);//limbo is 18 years old.
            `,
        }
    },
    mounted() {
        
        
    },
}
</script>