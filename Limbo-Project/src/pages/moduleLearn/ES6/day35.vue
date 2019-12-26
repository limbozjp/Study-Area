<template>
    <div class="day35">
        继承的应用——扩建内建对象Array
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
        <img src="../../../assets/moduleLearn/ES6/day35-1.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '在vue项目中无法调用movie.addMovie()等方法，需寻找问题',
            code_1 : this.ProjectJs.project_dealCode`
            class movieCollection extends Array {
                constructor (name, ...items) {  //剩余参数
                    super(...items);    //扩展运算符
                    this.name = name;
                }

                addMovie (movie) {
                    this.prototype.push(movie);
                }

                topRated (limit = 10) {
                    return this.sort((a,b) => a.scores > b.scores ? -1 : 1).slice(0, limit);
                }
            }

            const movies = new movieCollection('favorite movies', 
                {name : '狮子王', scores : 8.8},
                {name : '扫毒2天地对决', scores : 8.6},
                {name : '哪吒之魔童降世', scores : 9.6},
                {name : '银河补习班', scores : 9.0},
                {name : '蜘蛛侠：英雄远征', scores : 8.9},
            )

            movies.push({name : '猪八戒传说', scores : 7.5})
            console.log(movies);    //(6) [{…}, {…}, {…}, {…}, {…}, {…}, name: "favorite movies"]
            console.log(movies.topRated());
            
            `,
        }
    },
    mounted () {
        class movieCollection extends Array {
            constructor (name, ...items) {  //剩余参数
                super(...items);    //扩展运算符
                this.name = name;
            }

            addMovie (movie) {
                this.push(movie);
            }

            topRated (limit = 10) {
                return this.sort((a,b) => a.scores > b.scores ? -1 : 1).slice(0, limit);
            }
        }

        const movies = new movieCollection('favorite movies', 
            {name : '狮子王', scores : 8.8},
            {name : '扫毒2天地对决', scores : 8.6},
            {name : '哪吒之魔童降世', scores : 9.6},
            {name : '银河补习班', scores : 9.0},
            {name : '蜘蛛侠：英雄远征', scores : 8.9},
        )

        movies.push({name : '猪八戒传说', scores : 7.5})
        console.log(movies);    //(6) [{…}, {…}, {…}, {…}, {…}, {…}, name: "favorite movies"]
        // console.log(movies.topRated()); 
        
        
    },
}
</script>