<template>
    <div class="day10">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day10-1.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day10-2.png" alt="" srcset="">
        <img src="../../../assets/moduleLearn/ES6/day10-3.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '详见代码',
            code_1 : this.ProjectJs.project_dealCode`
            模板字符串可以相互嵌套
            可以使用三元表达式
            为了代码的可维护性/可阅读性可将方法提出来
            `,
        }
    },
    mounted() {
        const Limbo = {
            name : 'limbo',
            age : 18,
            date : '2019-07-01',
            todos : [
                {name : 'running', completed : true},
                {name : 'coding', completed : true},
                {name : 'fitness', completed : false},
            ]
        };
        function renderTodos(argument) {
            return `
                <ul>
                    ${Limbo.todos.map(todo => `
                        <li>
                            ${todo.name}${todo.completed ? ' ＜（＾－＾）＞' : ' ×'}
                        </li>`).join('')
                    }
                </ul>
            `
        };
        const template = `${renderTodos(Limbo.todos)}`;
        // console.log(template);
    },

}
</script>