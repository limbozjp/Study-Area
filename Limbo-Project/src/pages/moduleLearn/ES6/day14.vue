<template>
    <div class="day14">
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
            codeTitle_1 : 'ES6对象解构，快速从对象中提取属性，并且可以嵌套/重新命名，也可以提供默认值实现回滚机制',
            code_1 : this.ProjectJs.project_dealCode`
            const Limbo = {
            name : 'limbo',
                age : '18',
                family : {
                    father : 'ZY',
                    mather : 'LWE',
                    wife : 'PSY'
                }
            }
            在此之前不可提前声明变量
            可以使用let
            let name = '';
            ({name}) = Limbo;
            const {name, age} = Limbo;
            console.log('name = ' + name);  //name = limbo
            console.log('age = ' + age);    //age = 18
            //重命名时声明的是重新命名后的变量f
            //获取没有的属性时返回undefined
            // 默认值的使用必须是明确的undefined时才会使用，false/null/0的时候也不会使用默认值，只会返回这些值
            const {father : f, mather, wife, sister = 'have no sister', brother} = Limbo.family
            console.log('father = ' + f);   //father = ZY
            console.log('mather = ' + mather);  //mather = LWE
            console.log('wife = ' + wife);  //wife = PSY
            console.log('sister = ' + sister);  //sister = have no sister
            console.log('brother = ' + brother);  //brother = undefined
            `,
        }
    },
    mounted() {
        const Limbo = {
            name : 'limbo',
            age : '18',
            family : {
                father : 'ZY',
                mather : 'LWE',
                wife : 'PSY'
            }
        }
        const {name, age} = Limbo;
        console.log('name = ' + name);
        console.log('age = ' + age);
        const {father : f, mather, wife, sister = 'have no sister'} = Limbo.family
        console.log('father = ' + f);
        console.log('mather = ' + mather);
        console.log('wife = ' + wife);
        console.log('sister = ' + sister);
        
    },
}
</script>