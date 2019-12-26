<template>
    <div class="demo1">
        <div>
            <header>
                <span>输入</span>
            </header>
            <main>
                <el-form ref="form" :model="form" label-width="110px">
                    <el-form-item label="数组取值范围">
                        <el-input v-model="form.arrRangNum"></el-input>
                    </el-form-item>
                    <el-form-item label="数组长度">
                        <el-input v-model="form.arrlenNum"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getArr">创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </main>
        </div>
        <hr>
        <div>
            <header>
                <span>方法1</span>
            </header>
            <main>
                <el-button type="primary" @click="test('methodsOne','time1')">测试1</el-button>
                <span>执行时间：{{time1}}</span>
            </main>
        </div>
        <hr>
        <div>
            <header>
                <span>方法2</span>
            </header>
            <main>
                <el-button type="primary" @click="test('methodsTwo','time2')">测试2</el-button>
                <span>执行时间：{{time2}}</span>
            </main>
        </div>
        <hr>
        <div>
            <header>
                <span>方法3</span>
            </header>
            <main>
                <el-button type="primary" @click="test('methodsThree','time3')">测试3</el-button>
                <span>执行时间：{{time3}}</span>
            </main>
        </div>
        <hr>
        <div>
            <header>
                <span>方法4</span>
            </header>
            <main>
                <el-button type="primary" @click="test('methodsFour','time4')">测试4</el-button>
                <span>执行时间：{{time4}}</span>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'demo1',
        data() {
            return {
                form : {
                    arrlenNum : 100000,
                    arrRangNum : 10000,
                },
                arr : [],
                time1 : 0,
                time2 : 0,
                time3 : 0,
                time4 : 0,
                arrOne : [],
                arrTwo : [],
                arrThree : [],
                arrFour : [],
            }
        },
        methods : {
            // 获取任意位数数组
            getArr () {
                if (this.form.arrlenNum <= 0 || this.form.arrRangNum <= 0) {
                    return;
                }
                for(var i=0; i < this.form.arrlenNum; i++){
                    this.arr.push(Math.ceil(Math.random() * this.form.arrRangNum));
                }
                console.log(this.arr.length);
            },
            // 测试
            test (name,time) {
                var start = new Date();
                this[name]();
                var end = new Date();
                this[time] = end - start;
            },
            // 方法1
            methodsOne () {
                for(var i=0; i<this.arr.length; i++){
                    //如果把当前数组的第i已经保存进了临时数组, 那么跳过
                    if(this.arrOne.indexOf(this.arr[i]) == -1){
                        this.arrOne.push(this.arr[i]);
                    }
                }
                console.log(this.arrOne.length)
            },
            // 方法2
            methodsTwo () {
                var hash = {},
                    n = [];     //hash 作为哈希表, n为临时数组
                for(var i=0; i<this.arr.length; i++){
                    if(!hash[this.arr[i]]){         //如果hash表中没有当前项
                        hash[this.arr[i]] = true;   //存入hash表
                        n.push(this[i]);            //当前元素push到临时数组中
                    }
                }
                this.arrTwo = n;
                console.log(this.arrTwo.length)
            },
            // 方法3
            methodsThree () {
                var n = [this.arr[0]]; 
                for(var i=1; i<this.arr.length; i++){    //从第二项开始遍历
                    //如果当前数组元素在数组中出现的第一次的位置不是i
                    //说明是重复元素
                    if(this.arr.indexOf(this.arr[i]) == i){
                        n.push(this.arr[i]);
                    }
                }
                this.arrThree = n;
                console.log(this.arrThree.length)
            },
            // 方法4
            methodsFour () {
                this.arr.sort();
                // console.log(this.arr);
                var n = [this.arr[0]];
                for(var i=1; i<this.arr.length; i++){
                    if(this.arr[i] != this.arr[i-1]){
                        n.push(this.arr[i]);
                    }
                }
                this.arrFour = n;
                console.log(this.arrFour.length)
            }
        },
        mounted () {
            this.getArr();
        }
    }
</script>

<style scoped>

</style>
