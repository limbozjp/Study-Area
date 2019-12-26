<template>
    <div class="asideBar">
        <div class="asideBar_content">
            <el-menu v-if="true"
                :default-active=defaultActive
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                class="el-menu-vertical-demo"
                @open="handleOpen" 
                @close="handleClose" 
                :collapse="menusShow"
                :router="true"> 
                <div class="content_header" @click="menusChange">
                    <i :class="menusShow ? 'el-icon-moon' : 'el-icon-sunny'"></i>
                </div>
                <template v-for="item in menus">
                    <el-submenu :index="item.path" v-if="item.menuShow">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>p
                            <span slot="title">{{item.meta.name}}</span>
                        </template>
                        <el-menu-item v-for="childItem in item.children" 
                            :key="childItem.value" 
                            :index="childItem.path">
                            <i :class="childItem.meta.icon"></i>
                            <span slot="title">{{childItem.meta.name}}</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item :index="item.path" v-else>
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<style scoped>
.asideBar{
    width: 100%;
    height: 100%;
}
.content_header{
    line-height: 40px;
    text-align: center;
}
.el-icon-sunny{
    color: yellow;
}
.el-icon-moon{
    color: #B3C0D1;
}
.asideBar_content{
    width: 100%;
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}

</style>

<script>
export default {
    name : 'asideBar',
    data() {
        return {
            menusShow: false,
            defaultActive : this.$route.path,
            menus : this.$router.options.routes[1].children,
        }
    },
    watch: {
        '$route' () {
            this.defaultActive = this.$route.path;
        }
    },
    mounted () {
        
    },
    methods: {
        menusChange () {
            this.menusShow = !this.menusShow;
        },
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    },
}
</script>