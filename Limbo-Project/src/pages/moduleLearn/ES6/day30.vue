<template>
    <div class="day30">
        Symbol（第七种数据类型）
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '生成唯一的标识符',
            code_1 : this.ProjectJs.project_dealCode`
            const student = Symbol('perter');
            console.log(student);   //Symbol(perter)       
            console.log(typeof student);    //symbol
            `,
            codeTitle_2 : '解决命名冲突的问题',
            code_2 : this.ProjectJs.project_dealCode`
            const classRoom1 = {
                'Lily' : {grade : 60},
                'nina' : {grade : 80},
                'nina' : {grade : 90},
            }
            console.log(classRoom1);     //{Lily: {…}, nina: {…}}
            
            const classRoom2 = {
                [Symbol('Lily')] : {grade : 60},
                [Symbol('nina')] : {grade : 80},
                [Symbol('nina')] : {grade : 90},
            }
            console.log(classRoom2);    //{Symbol(Lily): {…}, Symbol(nina): {…}, Symbol(nina): {…}}
            console.log(classRoom2.Lily);   //undefined 无法直接访问
            `,
            codeTitle_3 : 'symbol定义的属性是不可以遍历的所以可以作为私有属性在对象内部使用',
            code_3 : this.ProjectJs.project_dealCode`
            for (let key in classRoom2) {
                console.log(key);       //无法被遍历
            }
            // 获取对象中的属性是Symbol的方法
            const sym = Object.getOwnPropertySymbols(classRoom2);
            console.log(sym);   //[Symbol(Lily), Symbol(nina), Symbol(nina)]
            `,
        }
    },
    mounted () {
        const student = Symbol('perter');
        console.log(student);   //Symbol(perter)       
        console.log(typeof student);    //symbol
        
        const classRoom1 = {
            'Lily' : {grade : 60},
            'nina' : {grade : 80},
            'nina' : {grade : 90},
        }
        console.log(classRoom1);     //{Lily: {…}, nina: {…}}
        
        const classRoom2 = {
            [Symbol('Lily')] : {grade : 60},
            [Symbol('nina')] : {grade : 80},
            [Symbol('nina')] : {grade : 90},
        }
        console.log(classRoom2);    //{Symbol(Lily): {…}, Symbol(nina): {…}, Symbol(nina): {…}}
        console.log(classRoom2.Lily);   //undefined 无法直接访问
        

        for (let key in classRoom2) {
            console.log(key);       //无法被遍历
        }
        // 获取对象中的属性是Symbol的方法
        const sym = Object.getOwnPropertySymbols(classRoom2);
        console.log(sym);   //[Symbol(Lily), Symbol(nina), Symbol(nina)]
        
    }
}
</script>