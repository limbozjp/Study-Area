import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home' 
import Login from '@/pages/login'
import Empty from '@/components/Empty'


import ModuleLearn from '@/pages/moduleLearn/moduleLearn'       //模块学习       
import Es6 from '@/pages/moduleLearn/ES6/es6'                   //模块学习-ES6
import Es6Day1 from '@/pages/moduleLearn/ES6/day1'              //模块学习-ES6-day1 
import Es6Day2 from '@/pages/moduleLearn/ES6/day2'              //模块学习-ES6-day2 
import Es6Day3 from '@/pages/moduleLearn/ES6/day3'              //模块学习-ES6-day3 
import Es6Day4 from '@/pages/moduleLearn/ES6/day4'              //模块学习-ES6-day4 
import Es6Day5 from '@/pages/moduleLearn/ES6/day5'              //模块学习-ES6-day5 
import Es6Day6 from '@/pages/moduleLearn/ES6/day6'              //模块学习-ES6-day6 
import Es6Day7 from '@/pages/moduleLearn/ES6/day7'              //模块学习-ES6-day7 
import Es6Day8 from '@/pages/moduleLearn/ES6/day8'              //模块学习-ES6-day8 
import Es6Day9 from '@/pages/moduleLearn/ES6/day9'              //模块学习-ES6-day9 
import Es6Day10 from '@/pages/moduleLearn/ES6/day10'            //模块学习-ES6-day10 
import Es6Day11 from '@/pages/moduleLearn/ES6/day11'            //模块学习-ES6-day11 
import Es6Day12 from '@/pages/moduleLearn/ES6/day12'            //模块学习-ES6-day12 
import Es6Day13 from '@/pages/moduleLearn/ES6/day13'            //模块学习-ES6-day13 
import Es6Day14 from '@/pages/moduleLearn/ES6/day14'            //模块学习-ES6-day14 
import Es6Day15 from '@/pages/moduleLearn/ES6/day15'            //模块学习-ES6-day15 
import Es6Day16 from '@/pages/moduleLearn/ES6/day16'            //模块学习-ES6-day16 
import Es6Day17 from '@/pages/moduleLearn/ES6/day17'            //模块学习-ES6-day17 
import Es6Day18 from '@/pages/moduleLearn/ES6/day18'            //模块学习-ES6-day18 
import Es6Day19 from '@/pages/moduleLearn/ES6/day19'            //模块学习-ES6-day19 
import Es6Day20 from '@/pages/moduleLearn/ES6/day20'            //模块学习-ES6-day20 
import Es6Day21 from '@/pages/moduleLearn/ES6/day21'            //模块学习-ES6-day21 
import Es6Day22 from '@/pages/moduleLearn/ES6/day22'            //模块学习-ES6-day22 
import Es6Day23 from '@/pages/moduleLearn/ES6/day23'            //模块学习-ES6-day23 
import Es6Day24 from '@/pages/moduleLearn/ES6/day24'            //模块学习-ES6-day24 
import Es6Day25 from '@/pages/moduleLearn/ES6/day25'            //模块学习-ES6-day25 
import Es6Day26 from '@/pages/moduleLearn/ES6/day26'            //模块学习-ES6-day26 
import Es6Day27 from '@/pages/moduleLearn/ES6/day27'            //模块学习-ES6-day27 
import Es6Day28 from '@/pages/moduleLearn/ES6/day28'            //模块学习-ES6-day28 
import Es6Day29 from '@/pages/moduleLearn/ES6/day29'            //模块学习-ES6-day29 
import Es6Day30 from '@/pages/moduleLearn/ES6/day30'            //模块学习-ES6-day30 
import Es6Day31 from '@/pages/moduleLearn/ES6/day31'            //模块学习-ES6-day31 
import Es6Day32 from '@/pages/moduleLearn/ES6/day32'            //模块学习-ES6-day32 
import Es6Day33 from '@/pages/moduleLearn/ES6/day33'            //模块学习-ES6-day33 
import Es6Day34 from '@/pages/moduleLearn/ES6/day34'            //模块学习-ES6-day34 
import Es6Day35 from '@/pages/moduleLearn/ES6/day35'            //模块学习-ES6-day35 
import Es6Day36 from '@/pages/moduleLearn/ES6/day36'            //模块学习-ES6-day36 
import Es6Day37 from '@/pages/moduleLearn/ES6/day37'            //模块学习-ES6-day37 
import Es6Day38 from '@/pages/moduleLearn/ES6/day38'            //模块学习-ES6-day38 
import Es6Day39 from '@/pages/moduleLearn/ES6/day39'            //模块学习-ES6-day39 
import Es6Day40 from '@/pages/moduleLearn/ES6/day40'            //模块学习-ES6-day40 
import Es6Day41 from '@/pages/moduleLearn/ES6/day41'            //模块学习-ES6-day41 
import Es6Day42 from '@/pages/moduleLearn/ES6/day42'            //模块学习-ES6-day42 
import Es6Day43 from '@/pages/moduleLearn/ES6/day43'            //模块学习-ES6-day43 
import Es6Day44 from '@/pages/moduleLearn/ES6/day44'            //模块学习-ES6-day44 
import Es6Day45 from '@/pages/moduleLearn/ES6/day45'            //模块学习-ES6-day45 
import Es6Day46 from '@/pages/moduleLearn/ES6/day46'            //模块学习-ES6-day46 
import Es6Day47 from '@/pages/moduleLearn/ES6/day47'            //模块学习-ES6-day47 
import Es6Day48 from '@/pages/moduleLearn/ES6/day48'            //模块学习-ES6-day48 
import Es6Day49 from '@/pages/moduleLearn/ES6/day49'            //模块学习-ES6-day49 
import Es6Day50 from '@/pages/moduleLearn/ES6/day50'            //模块学习-ES6-day50 
import Es6Day51 from '@/pages/moduleLearn/ES6/day51'            //模块学习-ES6-day51 
import Es6Day52 from '@/pages/moduleLearn/ES6/day52'            //模块学习-ES6-day52 
import Es6Day53 from '@/pages/moduleLearn/ES6/day53'            //模块学习-ES6-day53 
import Es6Day54 from '@/pages/moduleLearn/ES6/day54'            //模块学习-ES6-day54 
    
import DailyLearn from '@/pages/dailyLearn/dailyLearn'          //每日学习       
import WorkNote from '@/pages/workNote/workNote'                //工作笔记

import ActualCombat from '@/pages/actualCombat/actualCombat'    //实战训练
import Demo from '@/pages/actualCombat/demo'                    //实战训练
import DOMPurify from '@/pages/actualCombat/DOMPurify'          //实战训练


Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history', 

    routes : [
        {
            path : '/',
            name : 'Login',
            component : Login
        },
        {
            path : '/home',
            name : 'home',
            component : Home,
            redirect : '/home/dailyLearn',
            meta : {
                menuShow : true,
                name : '首页',
            },
            children : [
                {
                    path : '/home/moduleLearn',
                    name : 'ModuleLearn',
                    component : ModuleLearn,
                    redirect : '/home/moduleLearn/es6',
                    meta : {
                        menuShow : true,
                        name : '模块学习',
                        icon : 'el-icon-apple',
                    },
                    children : [
                        {
                            path : '/home/moduleLearn/es6',
                            name : 'es6',
                            component : Es6,
                            meta : {
                                menuShow : true,
                                name : 'ES6学习',
                                icon : 'el-icon-grape',
                            },
                            children : [
                                {path : '/home/moduleLearn/es6/day1', name : 'Es6Day1', component : Es6Day1, meta : {menuShow : true, name : 'Day1', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day2', name : 'Es6Day2', component : Es6Day2, meta : {menuShow : true, name : 'Day2', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day3', name : 'Es6Day3', component : Es6Day3, meta : {menuShow : true, name : 'Day3', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day4', name : 'Es6Day4', component : Es6Day4, meta : {menuShow : true, name : 'Day4', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day5', name : 'Es6Day5', component : Es6Day5, meta : {menuShow : true, name : 'Day5', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day6', name : 'Es6Day6', component : Es6Day6, meta : {menuShow : true, name : 'Day6', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day7', name : 'Es6Day7', component : Es6Day7, meta : {menuShow : true, name : 'Day7', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day8', name : 'Es6Day8', component : Es6Day8, meta : {menuShow : true, name : 'Day8', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day9', name : 'Es6Day9', component : Es6Day9, meta : {menuShow : true, name : 'Day9', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day10', name : 'Es6Day10', component : Es6Day10, meta : {menuShow : true, name : 'Day10', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day11', name : 'Es6Day11', component : Es6Day11, meta : {menuShow : true, name : 'Day11', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day12', name : 'Es6Day12', component : Es6Day12, meta : {menuShow : true, name : 'Day12', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day13', name : 'Es6Day13', component : Es6Day13, meta : {menuShow : true, name : 'Day13', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day14', name : 'Es6Day14', component : Es6Day14, meta : {menuShow : true, name : 'Day14', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day15', name : 'Es6Day15', component : Es6Day15, meta : {menuShow : true, name : 'Day15', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day16', name : 'Es6Day16', component : Es6Day16, meta : {menuShow : true, name : 'Day16', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day17', name : 'Es6Day17', component : Es6Day17, meta : {menuShow : true, name : 'Day17', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day18', name : 'Es6Day18', component : Es6Day18, meta : {menuShow : true, name : 'Day18', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day19', name : 'Es6Day19', component : Es6Day19, meta : {menuShow : true, name : 'Day19', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day20', name : 'Es6Day20', component : Es6Day20, meta : {menuShow : true, name : 'Day20', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day21', name : 'Es6Day21', component : Es6Day21, meta : {menuShow : true, name : 'Day21', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day22', name : 'Es6Day22', component : Es6Day22, meta : {menuShow : true, name : 'Day22', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day23', name : 'Es6Day23', component : Es6Day23, meta : {menuShow : true, name : 'Day23', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day24', name : 'Es6Day24', component : Es6Day24, meta : {menuShow : true, name : 'Day24', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day25', name : 'Es6Day25', component : Es6Day25, meta : {menuShow : true, name : 'Day25', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day26', name : 'Es6Day26', component : Es6Day26, meta : {menuShow : true, name : 'Day26', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day27', name : 'Es6Day27', component : Es6Day27, meta : {menuShow : true, name : 'Day27', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day28', name : 'Es6Day28', component : Es6Day28, meta : {menuShow : true, name : 'Day28', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day29', name : 'Es6Day29', component : Es6Day29, meta : {menuShow : true, name : 'Day29', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day30', name : 'Es6Day30', component : Es6Day30, meta : {menuShow : true, name : 'Day30', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day31', name : 'Es6Day31', component : Es6Day31, meta : {menuShow : true, name : 'Day31', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day32', name : 'Es6Day32', component : Es6Day32, meta : {menuShow : true, name : 'Day32', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day33', name : 'Es6Day33', component : Es6Day33, meta : {menuShow : true, name : 'Day33', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day34', name : 'Es6Day34', component : Es6Day34, meta : {menuShow : true, name : 'Day34', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day35', name : 'Es6Day35', component : Es6Day35, meta : {menuShow : true, name : 'Day35', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day36', name : 'Es6Day36', component : Es6Day36, meta : {menuShow : true, name : 'Day36', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day37', name : 'Es6Day37', component : Es6Day37, meta : {menuShow : true, name : 'Day37', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day38', name : 'Es6Day38', component : Es6Day38, meta : {menuShow : true, name : 'Day38', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day39', name : 'Es6Day39', component : Es6Day39, meta : {menuShow : true, name : 'Day39', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day40', name : 'Es6Day40', component : Es6Day40, meta : {menuShow : true, name : 'Day40', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day41', name : 'Es6Day41', component : Es6Day41, meta : {menuShow : true, name : 'Day41', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day42', name : 'Es6Day42', component : Es6Day42, meta : {menuShow : true, name : 'Day42', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day43', name : 'Es6Day43', component : Es6Day43, meta : {menuShow : true, name : 'Day43', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day44', name : 'Es6Day44', component : Es6Day44, meta : {menuShow : true, name : 'Day44', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day45', name : 'Es6Day45', component : Es6Day45, meta : {menuShow : true, name : 'Day45', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day46', name : 'Es6Day46', component : Es6Day46, meta : {menuShow : true, name : 'Day46', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day47', name : 'Es6Day47', component : Es6Day47, meta : {menuShow : true, name : 'Day47', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day48', name : 'Es6Day48', component : Es6Day48, meta : {menuShow : true, name : 'Day48', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day49', name : 'Es6Day49', component : Es6Day49, meta : {menuShow : true, name : 'Day49', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day50', name : 'Es6Day50', component : Es6Day50, meta : {menuShow : true, name : 'Day50', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day51', name : 'Es6Day51', component : Es6Day51, meta : {menuShow : true, name : 'Day51', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day52', name : 'Es6Day52', component : Es6Day52, meta : {menuShow : true, name : 'Day52', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day53', name : 'Es6Day53', component : Es6Day53, meta : {menuShow : true, name : 'Day53', icon : 'el-icon-cherry'}},
                                {path : '/home/moduleLearn/es6/day54', name : 'Es6Day54', component : Es6Day54, meta : {menuShow : true, name : 'Day54', icon : 'el-icon-cherry'}}
                            ]
                        },
                    ]
                },
                {
                    path : '/home/dailyLearn',
                    name : 'DailyLearn',
                    component : DailyLearn,
                    meta : {
                        menuShow : true,
                        name : '每日积累',
                        icon : 'el-icon-cherry',
                    }
                },
                {
                    path : '/home/workNote',
                    name : 'WorkNote',
                    component : WorkNote,
                    meta : {
                        menuShow : true,
                        name : '工作笔记',
                        icon : 'el-icon-watermelon',
                    }
                },
                {
                    path : '/home/actualCombat',
                    name : 'ActualCombat',
                    component : ActualCombat,
                    meta : {
                        menuShow : false,
                        name : '实战训练',
                        icon : 'el-icon-fork-spoon',
                    },
                    children : [
                        {path : '/home/actualCombat/demo', name : 'actualCombat-demo', component : Demo, meta : {menuShow : false, name : 'demo', icon : 'el-icon-cherry'}},
                        {path : '/home/actualCombat/DOMPurify', name : 'actualCombat-DOMPurify', component : DOMPurify, meta : {menuShow : false, name : 'DOMPurify', icon : 'el-icon-cherry'}},
                    ]
                },
            ]
        }
    ]
})

export default router;
