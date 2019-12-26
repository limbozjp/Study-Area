<template>
    <div class="day33">
        使用ES6的Class改写原型——基本语法
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <baseCode v-model="code_2" :codeTitle="codeTitle_2"></baseCode>
        <baseCode v-model="code_3" :codeTitle="codeTitle_3"></baseCode>
        <baseCode v-model="code_4" :codeTitle="codeTitle_4"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : '类的声明Class(特殊的函数,函数存在变量提升而类不可以)',
            code_1 : this.ProjectJs.project_dealCode`
            const Limbo = new User('limbo') //User is not a constructor
            // 类的声明
            class User {
            
            }
            // 类的表达式
            const User = class {

            }
            console.log(typeof User) //function
            `,
            codeTitle_2 : 'constructor(类的构造函数)',
            code_2 : this.ProjectJs.project_dealCode`
            class User {
                constructor (name, email) {    //构造函数
                    this.name = name;
                    this.email = email;
                }
                info () {   //类似原型方法
                    console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
                }
            }
            console.log(typeof User);
            const Limbo = new User('limbo', 'limbo_zjp@163.com');
            console.log(Limbo); //User {name: "limbo", email: "limbo_zjp@163.com"}
            Limbo.info();   //Hi, I'm limbo, my email is limbo_zjp@163.com
            `,
            codeTitle_3 : '关键字static(静态方法：只能在原型方法上调用不能在实例上调用)',
            code_3 : this.ProjectJs.project_dealCode`
            class User {
                constructor (name, email) {
                    this.name = name;
                    this.email = email;
                }
                info () {
                    console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
                    
                }
                static description () {     //类似Array.from()
                    console.log('I\'m a user of Limbo.com');
                }
            }
            const Limbo = new User('limbo', 'limbo_zjp@163.com');
            Limbo.description();    //Limbo.description is not a function
            User.description();     //I'm a user of Limbo.com
            `,
            codeTitle_4 : '关键字set/get',
            code_4 : this.ProjectJs.project_dealCode`
            class User {
                constructor (name, email) {    //构造函数
                    this.name = name;
                    this.email = email;
                }
                info () {
                    console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
                    
                }
                static description () {
                    console.log('I\'m a user of Limbo.com');
                }
                set github (value) {    //set方法
                    this.githubName = value;
                    console.log('githubName: ' + this.githubName);
                }
                get github () {     //get方法
                    console.log('gethubAdress: https://github.com/' + this.githubName); 
                }
            }
            const Limbo = new User('limbo', 'limbo_zjp@163.com');
            Limbo.github = 'limbo';     //githubName: limbo
            Limbo.github;   //gethubAdress: https://github.com/limbo
            `,
        }
    },
    mounted() {
        class User {
            constructor (name, email) {    //构造函数
                this.name = name;
                this.email = email;
            }
            info () {
                console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
                
            }
            static description () {
                console.log('I\'m a user of Limbo.com');
            }
            set github (value) {
                this.githubName = value;
                console.log('githubName: ' + this.githubName);
            }
            get github () {
                console.log('gethubAdress: https://github.com/' + this.githubName); 
            }
        }
        console.log(typeof User);
        const Limbo = new User('limbo', 'limbo_zjp@163.com');
        console.log(Limbo);     //User {name: "limbo", email: "limbo_zjp@163.com"}
        Limbo.info();   //Hi, I'm limbo, my email is limbo_zjp@163.com
        // Limbo.description();    //Limbo.description is not a function
        User.description();     //I'm a user of Limbo.com
        Limbo.github = 'limbo';     //githubName: limbo
        Limbo.github;   //gethubAdress: https://github.com/limbo
    },
}
</script>