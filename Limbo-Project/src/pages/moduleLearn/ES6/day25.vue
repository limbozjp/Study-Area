<template>
    <div class="day25">
        对象字面量的扩展(简化代码书写)
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
            codeTitle_1 : '创建对象赋值(属性名，方法名)简化写法',
            code_1 : this.ProjectJs.project_dealCode`
            const name = 'limbo';
            const age = 19;
            const birthday = '2000-10';

            const Limbo = {
                name, 
                age,
                birthday，
                greet () {
                    alert('Hello' + this.name)
                }
            }
            console.log(Limbo);     //{name: "limbo", age: 19, birthday: "2000-10", greet: ƒ}
            module.export = {
                getName,
                getAge
            }
            `,
            codeTitle_2 : '计算属性',
            code_2 : this.ProjectJs.project_dealCode`
            let id = 0;
            const userIds = {
                ['user-' + ++id] : id,
                ['user-' + ++id] : id,
                ['user-' + ++id] : id,
                ['user-' + ++id] : id,
            }
            console.log(userIds);   //{user-1: 1, user-2: 2, user-3: 3, user-4: 4}
            `,
            codeTitle_3 : '计算属性',
            code_3 : this.ProjectJs.project_dealCode`
            const keys = ['name', 'age', 'birthday'];
            const values = ['limbo', 19, '2000-10'];
            const ZJP = {
                [keys.shift()] : [values.shift()],
                [keys.shift()] : [values.shift()],
                [keys.shift()] : [values.shift()],
            }
            console.log(ZJP);
            `,

        }
    },
    mounted() {
        const name = 'limbo';
        const age = 19;
        const birthday = '2000-10';

        const Limbo = {
            name, 
            age,
            birthday
        }
        console.log(Limbo);     //{name: "limbo", age: 19, birthday: "2000-10"}

        let id = 0;
        const userIds = {
            ['user-' + ++id] : id,
            ['user-' + ++id] : id,
            ['user-' + ++id] : id,
            ['user-' + ++id] : id,
        }
        console.log(userIds);   //{user-1: 1, user-2: 2, user-3: 3, user-4: 4}
        
        const keys = ['name', 'age', 'birthday'];
        const values = ['limbo', 19, '2000-10'];
        const ZJP = {
            [keys.shift()] : [values.shift()],
            [keys.shift()] : [values.shift()],
            [keys.shift()] : [values.shift()],
        }
        console.log(ZJP);
        
    },
}
</script>