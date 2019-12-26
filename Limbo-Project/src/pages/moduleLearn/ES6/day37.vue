<template>
    <div class="day37">
        生成器函数Generator(函数可以开始暂停，在调用的时候传入其他参数),依次返回函数内yield的返回值
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : 'yield返回一个可迭代对象的表达式。生成器函数只能通过next()方法才可以执行',
            code_1 : this.ProjectJs.project_dealCode`
            // function*(生成器写法)
            function* listColors() {
                let i = 0;
                while(true)
                yield i++; 
            }
            const colors = listColors();
            // 返回一个由 yield表达式生成的值。
            console.log(colors.next());     //{value: 0, done: false}
            console.log(colors.next());     //{value: 1, done: false}
            console.log(colors.next());     //{value: 2, done: false}
            // 返回给定的值并结束生成器。
            console.log(colors.return());   //{value: undefined, done: true}
            console.log(colors.next());     //{value: undefined, done: true}
            // 向生成器抛出一个错误。
            console.log(colors.throw());    //报错
            `,
        }
    },
    mounted() {
        function* listColors() {
            let i = 0;
            while(true)
            yield i++; 
        }
        const colors = listColors();
        // 返回一个由 yield表达式生成的值。
        console.log(colors.next());     //{value: 0, done: false}
        console.log(colors.next());     //{value: 1, done: false}
        console.log(colors.next());     //{value: 2, done: false}
        // 返回给定的值并结束生成器。
        console.log(colors.return());   //{value: undefined, done: true}
        console.log(colors.next());     //{value: undefined, done: true}
        // 向生成器抛出一个错误。
        console.log(colors.throw());    //报错
    },
}
</script>
