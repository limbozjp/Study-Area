<template>
    <div class="day23">
        扩展运算符应用场景
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
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            //  代替Array.from()方法，将元素扩展为数组
            const todos = [...document.querySelectorArr('li)];
            //  dom元素
            //  对象的属性
            //  对数组进行删除生成新的数组
            const todos = [
                {id : 1, name : 'Go to store'},
                {id : 2, name : 'Watch TV'},
                {id : 3, name : 'Go Shopping'},
                {id : 4, name : 'Coding'}
            ]
            //  删除id=2的对象
            const id = 2;
            const todoIndex = todos.findIndex(todo => todo.id === id);
            const newTodos = [todos.slice(0, todoIndex), todos.slice(todoIndex + 1)];
            console.log(newTodos);  //[Array(1), Array(2)]
            
            const newTodos2 = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];
            console.log(newTodos2);     //[{…}, {…}, {…}]
            `,
        }
    },
    mounted() {
        const todos = [
            {id : 1, name : 'Go to store'},
            {id : 2, name : 'Watch TV'},
            {id : 3, name : 'Go Shopping'},
            {id : 4, name : 'Coding'}
        ]
        //  删除id=2的对象
        const id = 2;
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [todos.slice(0, todoIndex), todos.slice(todoIndex + 1)];
        console.log(newTodos);  //[Array(1), Array(2)]
        
        const newTodos2 = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];
        console.log(newTodos2);     //[{…}, {…}, {…}]
        
    },
}
</script>