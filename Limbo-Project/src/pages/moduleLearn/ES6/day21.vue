<template>
    <div class="day21">
        扩展运算符/把一个可遍历对象的每个元素扩展为一个新的参数序列
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '两个数组合并原始方法',
            code_1 : this.ProjectJs.project_dealCode`
            const youngers = ['George', 'John', 'Thomas'];
            const olders = ['James', 'Adrew', 'Martin'];

            const members = youngers.concat(olders);
            console.log(members);    //["George", "John", "Thomas", "James", "Adrew", "Martin"]
            
            let members = [];
            youngers.push('Mary');
            members = olders.concat(youngers);
            console.log(members);   //["James", "Adrew", "Martin", "George", "John", "Thomas", "Mary"]
            `,
            codeTitle_2 : '扩展运算符',
            code_2 : this.ProjectJs.project_dealCode`
            console.log([...'limbo']);  //["l", "i", "m", "b", "o"]
            let members = [...youngers, ...olders];
            console.log(members);   //["George", "John", "Thomas", "James", "Adrew", "Martin"]
            
            let members = [...youngers, 'Mary', ...olders];
            console.log(members);   //["George", "John", "Thomas", "Mary", "James", "Adrew", "Martin"]

            // 通过扩展运算符赋值新的数组后，此时改变赋值后的数组，原数组不会发生改变，如果使用concat()后原数组会发生改变
            const currentMembers = [...members];
            currentMembers[0] = 'limbo';
            console.log(currentMembers);    //["limbo", "John", "Thomas", "Mary", "Mary", "James", "Adrew", "Martin"]
            console.log(members);   //["George", "John", "Thomas", "Mary", "Mary", "James", "Adrew", "Martin"]
            `,
        }
    },
    mounted() {
        const youngers = ['George', 'John', 'Thomas'];
        const olders = ['James', 'Adrew', 'Martin'];

        const members1 = youngers.concat(olders);
        console.log(members1);    //["George", "John", "Thomas", "James", "Adrew", "Martin"]
        
        let members2 = [];
        youngers.push('Mary');
        members2 = olders.concat(youngers);
        console.log(members2);   //["James", "Adrew", "Martin", "George", "John", "Thomas", "Mary"]
        
        // 扩展用算符
        console.log([...'limbo']);  //["l", "i", "m", "b", "o"]
        let members3 = [...youngers, ...olders];
        console.log(members3);   //["George", "John", "Thomas", "James", "Adrew", "Martin"]
        
        let members4 = [...youngers, 'Mary', ...olders];
        console.log(members4);   //["George", "John", "Thomas", "Mary", "James", "Adrew", "Martin"]
        const currentMembers = [...members4];
        currentMembers[0] = 'limbo';
        console.log(currentMembers);    //["limbo", "John", "Thomas", "Mary", "Mary", "James", "Adrew", "Martin"]
        console.log(members4);  //["George", "John", "Thomas", "Mary", "Mary", "James", "Adrew", "Martin"]
        
    },
}
</script>