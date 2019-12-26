<template>
    <div class="day34">
        Class——扩展
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
            codeTitle_1 : '属性可以通过计算属性的方法来定义',
            code_1 : this.ProjectJs.project_dealCode`
            let methodName = 'info';    //定义一个方法名
            class User {
                [methodName] () {   //属性可以通过计算属性的方法来定义
                    console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
                }
            }
            const Limbo = new User('limbo', 'limbo_zjp@163.com');
            Limbo.info();   //Hi, I'm limbo, my email is limbo_zjp@163.com
            `,
            codeTitle_2 : 'class是特殊的函数，不存在函数提升不能在声明前使用，只能通过new来调用',
            code_2 : this.ProjectJs.project_dealCode`
            User(); //Cannot call a class as a function
            `,
            codeTitle_3 : 'class的继承，通过关键字extends super',
            code_3 : this.ProjectJs.project_dealCode`
            class Animal {      //基类
                constructor (name) {
                    this.name = name;
                    this.belly = [];
                }

                eat (food) {
                    this.belly.push(food);
                }

                speak () {
                    console.log('Animal : 汪汪汪~~~');
                }
            }

            class Dog extends Animal {  //子类
                constructor (name, age) {
                    super(name);
                    this.age = age;
                }

                bark () {
                    console.log('汪汪汪~!');   
                }

                speak () {
                    console.log('Dog : 汪汪汪~~~');
                }
            }

            const lucky = new Dog('lucky', 2);
            console.log(lucky);     //{name: "lucky", belly: Array(0), age: 2}
            lucky.eat('race');      
            console.log(lucky);     //{name: "lucky", belly: Array(1), age: 2}
            lucky.bark();           //汪汪汪~!
            // 子类定义的方法与基类方法同名，会覆盖基类的方法
            lucky.speak();          //Dog : 汪汪汪~~~
            `,
        }
    },
    mounted() {
        let methodName = 'info';    //定义一个方法名
        class User {
            constructor (name, email) {    //构造函数
                this.name = name;
                this.email = email;
            }
            [methodName] () {   //属性可以通过计算属性的方法来定义
                console.log('Hi, I\'m ' + this.name + ', my email is ' + this.email);
            }
            static description () {     //静态方法
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
        // Limbo.info();   //Hi, I'm limbo, my email is limbo_zjp@163.com
        //  class是特殊的函数，不存在函数提升不能在声明前使用，只能通过new来调用
        // User(); //Cannot call a class as a function

        class Animal {      //基类
            constructor (name) {
                this.name = name;
                this.belly = [];
            }

            eat (food) {
                this.belly.push(food);
            }

            speak () {
                console.log('Animal : 汪汪汪~~~');
            }
        }

        class Dog extends Animal {  //子类
            constructor (name, age) {
                super(name);
                this.age = age;
            }

            bark () {
                console.log('汪汪汪~!');   
            }

            speak () {
                console.log('Dog : 汪汪汪~~~');
            }
        }

        const lucky = new Dog('lucky', 2);
        console.log(lucky);     //{name: "lucky", belly: Array(0), age: 2}
        lucky.eat('race');      
        console.log(lucky);     //{name: "lucky", belly: Array(1), age: 2}
        lucky.bark();           //汪汪汪~!

        // 子类定义的方法与基类方法同名，会覆盖基类的方法
        lucky.speak();          //Dog : 汪汪汪~~~
    },
}
</script>