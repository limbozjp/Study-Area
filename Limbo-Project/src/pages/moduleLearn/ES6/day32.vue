<template>
    <div class="day32">
        原型继承
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '如果将通用的方法写在构造函数里，每次新生成实例的时候都会执行一次这个方法，在JavaScript当中函数是一个对象，每次执行都会新生成一个对象，这样写构造函数会占用内存',
            code_1 : this.ProjectJs.project_dealCode`
            function User(name) {
                this.name = name;
                this.infos = function () {
                    console.log('Hi, I\'m ' + this.name + '.');
                };
            }
            User.prototype.info = function () {
                console.log('Hi, I\'m ' + this.name + '.');
            }
            const limbo = new User('limbo');
            console.log(limbo);
            limbo.info();
            `,
        }
    },
    mounted() {
        function User(name) {
            this.name = name;
            this.infos = function () {
                console.log('infos : Hi, I\'m ' + this.name + '.'); //infos : Hi, I'm limbo.
            };
        }
        User.prototype.info = function () {
            console.log('info : Hi, I\'m ' + this.name + '.'); //info : Hi, I'm limbo.
        }
        const limbo = new User('limbo');
        console.log(limbo); //User {name: "limbo", infos: ƒ}
        limbo.infos();
        limbo.info();
    },
}
</script>