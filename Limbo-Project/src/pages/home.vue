<template>
    <div class="home">
        <el-container class="home_main">
            <el-header>
                {{$store.state.projectName}}
            </el-header>
            <el-container>
                <div>
                    <AsideBar></AsideBar>
                </div>
                <div class="home_content">
                    <!-- 面包屑 -->
                    <div class="content_header">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item v-for="item in breadCrumbMenus" 
                                :key="item.name" 
                                :to="item.path">
                                {{item.meta.name}}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <!-- 内容区域 -->
                    <el-main class="content_main">
                        <!-- <transition name="el-zoom-in-bottom">
                            <router-view ></router-view>
                        </transition> -->
                        <el-collapse-transition>
                            <router-view ></router-view>
                        </el-collapse-transition>
                    </el-main>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import AsideBar from '@/pages/mainUnit/asideBar'

export default {
    data() {
        return {
            breadCrumbMenus : this.$route.matched,
        }
    },
    watch: {
        '$route' (){
            this.breadCrumbMenus = this.$route.matched;
        }
    },
    mounted () {
        // console.log(this.$route)
    },
    components : {
        AsideBar
    }
}
</script>

<style scoped>
.home_main{
    height: 100%;
}
.home_content{
    flex: 1;
    width: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content_header{
    padding: 0 20px;
}
.content_header>div{
    line-height: 40px;
}
.content_main>div{
    width: 100%;
    height: 100%;
}





.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-main {
    /* height: calc(100% -40px); */
    background-color: #E9EEF3;
    color: #333;
}

</style>

