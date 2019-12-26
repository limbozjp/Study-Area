<template>
    <div class="day13">
        ES6提供的四种方法
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
        <baseCode v-model="code_4" :codeTitle="codeTitle_4"></baseCode>
        repeat()实例，字符串右对齐
        <img src="../../../assets/moduleLearn/ES6/day13-1.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day13-2.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : 'startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。',
            code_1 : this.ProjectJs.project_dealCode`
            第一个参数为字符串
            第二个参数为起始位置，默认为0
            大小写敏感
            示例：身份证判断
            const cards = '140203199310146817';
            console.log(cards.startsWith('14'));    //true
            console.log(cards.startsWith('1993'));  //false
            console.log(cards.startsWith('1993',6));//true
            `,
            codeTitle_2 : 'endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。',
            code_2 : this.ProjectJs.project_dealCode`
            第一个参数为字符串
            第二个参数为起始位置，默认为str.length.(该字符串结束为止)
            大小写敏感
            const string = 'limbo love running';
            console.log(string.endsWith('running'));    //true
            console.log(string.endsWith('love'));       //false
            console.log(string.endsWith('love',10));    //true
            `,
            codeTitle_3 : 'includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。',
            code_3 : this.ProjectJs.project_dealCode`
            第一个参数为字符串
            第二个参数为从当前字符串的哪个索引位置开始搜寻子字符串，默认值为0。
            大小写敏感
            const string = 'limbo love running';
            console.log(string.includes('love'));    //true
            console.log(string.includes('Love'));    //false
            `,
            codeTitle_4 : 'repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。',
            code_4 : this.ProjectJs.project_dealCode`
            重复次数不能为负数。
            const string = ' love ';
            console.log('='.repeat(5) + string + '='.repeat(5));
            `,
        }
    },
    mounted() {
        const cards = '140203199310146817';
        const string = 'limbo love running.';
        function padder(strings, length = 30) {
            return `${' '.repeat(Math.max(length - strings.length, 0))}${strings}`
        }
        console.log(padder(cards));
        console.log(padder(string));
    },
}
</script>