<template>
    <div class="es6">
        <div class="es6_tabs">
            <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane v-for="item in tabsMenus" :key="item.path" :label="item.meta.name" :name="item.name">
                    <transition name="slide-fade">
                        <component :is="item.component" v-if="item.name == activeName"></component>
                    </transition>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<style scoped>
.es6,.es6_tabs,.es6_tabs>div{
    height: 100%;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
</style>
<style>
.es6 img{
    margin : 10px 0;
}
</style>

<script>
export default {
    data() {
        return {
            activeName : sessionStorage.getItem('ES6') || 'Es6Day1',
            tabsMenus : this.ProjectJs.project_dealTree(this.$router.options.routes, 'name', sessionStorage.getItem('ES6') || 'Es6Day1'),
            tabContent : {},
            view: 'v-a'
        }
    },
    mounted () {
        // console.log(this.tabsMenus)
    },
    methods: {
        handleClick (tab) {
            sessionStorage.setItem('ES6', tab.name);
            // const name = tab.label.toLowerCase();
            // this.tabContent.component = import(`./${name}`);
            // this.tabContent.name = tab.label;
        }
    },
}
</script>
