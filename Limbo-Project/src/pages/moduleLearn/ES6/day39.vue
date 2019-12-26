<template>
    <div class="day39">
        Proxy(重写对象的默认方法，用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。)
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '语法',
            code_1 : this.ProjectJs.project_dealCode`
            let p = new Proxy(target, handler);
            // target
            用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
            // handler
            一个对象，其属性是当执行一个操作时定义代理的行为的函数。
            `,
            codeTitle_2 : '实例',
            code_2 : this.ProjectJs.project_dealCode`
             const person = { name : 'limbo', age : 18};
            const personProxy = new Proxy(person, {
                get (target, key) {
                    console.log('='.repeat(10), target, key);
                    return target[key].toUpperCase();
                },
                
            }); 

            personProxy.name = ' zjp';
            console.log(personProxy);       //Proxy {name: " zjp", age: 18}
            console.log(personProxy.name);      //ZJP
            personProxy.love = '    I Love Limbo      ';
            console.log(personProxy.love);      //    I LOVE LIMBO    
            `,
        }
    },
    mounted() {
        const person = { name : 'limbo', age : 18};
        const personProxy = new Proxy(person, {
            get (target, key) {
                console.log('='.repeat(10), target, key);
                return target[key].toUpperCase();
            },
            
        }); 

        personProxy.name = ' zjp';
        console.log(personProxy);       //Proxy {name: " zjp", age: 18}
        console.log(personProxy.name);      //ZJP
        personProxy.love = '    I Love Limbo      ';
        console.log(personProxy.love);      //    I LOVE LIMBO      
        
        
    },
}
</script>