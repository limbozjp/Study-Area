<template>
    <div class="day6">
        箭头函数this的指向(文中示例均不在框架内，框架内this指向Vue)
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
            codeTitle_1 : '普通函数下this的指向',
            code_1 : this.ProjectJs.project_dealCode`
                const Limbo = {
                name : 'limbo',
                hobbies : ['Running','Sleeping','Reading'],
                printHobbies : () => {
                    console.log(this)   //this此时指向Limbo
                    var self = this;
                    this.hobbies.map(function(hobby) {
                        console.log(this)   //this此时指向window,严格模式下为undefined
                        console.log(self)   //打印Limbo对象 
                        console.log(self.name + 'loves' + hobby)    //limbo loves Running, limbo loves Sleeping, limbo loves Reading
                    })
                }
            }
            Limbo.printHobbies()
            `,
            codeTitle_2 : '箭头函数this的指向',
            code_2 : this.ProjectJs.project_dealCode`
                const Limbo = {
                    name : 'limbo',
                    hobbies : ['Running','Sleeping','Reading'],
                    printHobbies : () => {
                        console.log(this)   //this此时指向Limbo
                        this.hobbies.map(hobby => {
                            console.log(this)   //箭头函数没有自己的this值继承父作用域
                            console.log(this.name + 'loves' + hobby)    //limbo loves Running, limbo loves Sleeping, limbo loves Reading
                        })
                    }
                }
                Limbo.printHobbies()
            `,
        }
    },
    mounted() {},
    methods: {},
}
</script>