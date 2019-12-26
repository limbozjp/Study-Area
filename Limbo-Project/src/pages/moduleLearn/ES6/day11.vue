<template>
    <div class="day11">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day11-1.png" alt="" srcset="">
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <div class="demoBox"></div>
        <img src="../../../assets/moduleLearn/ES6/day11-2.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '标签模板字符串/Tagged Template Strings(处理模板字串 标签对应的是JS中的函数名)',
            code_1 : this.ProjectJs.project_dealCode`
                模板字符串由函数（标签）决定
            `,
            codeTitle_2 : '标签模板字符串 标签函数',
            code_2 : this.ProjectJs.project_dealCode`
                函数会接收模板字符串为参数。
                string 为一个数组由模板中的普通字符串组成，
                模板字符串如果以变量开头或者结尾，string数组的开头和结尾会多加两个空字符串
                之后的参数为模板中的参数同样为一个数组，
                如果参数很多，可以使用模板字符串剩余参数的写法(...valus)。
            `,
        }
    },
    mounted() {
        const user = 'limbo';
        const topic = 'Learn to use ES6';
        function hightLight (strings,...values) {
            // console.log(strings);    //["", " has commented on your topic ", ""]
            // console.log(values);    //["limbo", "Learn to use ES6"]
            const hightLighted = values.map(value => `<div><span class="hightlight">${value}<span></div>`);
            let str = '';
            strings.map((string,i) => str +=`${string}${hightLighted[i] || ''}`)
            return str
        }
        const sentence = hightLight`${user} has commented on your topic ${topic}`;
        // console.log(sentence);
        // <div><span class="hightlight">limbo<span></div>
        //  has commented on your topic 
        // <div><span class="hightlight">Learn to use ES6<span></div>
        setTimeout(() => {
            document.querySelector('.demoBox').innerHTML = sentence;
        }, 2000);
    },
}
</script>


<style>
.demoBox{
    display: flex;
    margin: 10px 0;
}
.hightlight{
    padding : 2px 5px;
    background : #00adb5;
    color : #fff;
}
</style>