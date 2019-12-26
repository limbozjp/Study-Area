<template>
    <div class="day36">
        ES6遍历器
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day36-1.png" alt="" srcset="">
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day36-2.png" alt="" srcset="">
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day36-3.png" alt="" srcset="">
        <baseCode v-model="code_4" :codeTitle="codeTitle_4"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day36-4.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : 'Iterator遍历器(每一个可遍历对象都有一个[Symbol.Iterator]方法，通过它的next()方法进行遍历.每调用一次next()方法就会返回一个值)',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_2 : '数组的entries()方法(返回数组的key和value值)',
            code_2 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_3 : '数组的key()方法(返回数组的索引值)',
            code_3 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_4 : '数组的value()方法(返回数组的值)',
            code_4 : this.ProjectJs.project_dealCode`
            
            `,
        }
    },
    mounted() {
        const colors = ['red', 'green', 'black'];
        Array.prototype.newValues = function () {
            let i = 0;
            let items = this;
            return {
                next () {
                    const done = i >= items.length;
                    const value = done ? undefined : items[i++];
                    return {
                        value,
                        done,
                    }
                }
            }
        }
        const Iterator = colors.newValues();
        console.log(Iterator.next());   //{value: "red", done: false}
        console.log(Iterator.next());   //{value: "green", done: false}
        console.log(Iterator.next());   //{value: "black", done: false}
        console.log(Iterator.next());   //{value: undefined, done: true}        
        
    },
}
</script>