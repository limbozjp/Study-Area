<template>
    <div class="openPage">
        <el-container class="openPage_main">
            <el-header>
                {{$store.state.projectName}}
            </el-header>
            <el-main class="openPage_content">
                <div 
                    v-loading.fullscreen.lock="fullscreenLoading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0, 0, 0, 0.8)">
                    <iframe class="content_main" ref="myiframe" :src="openUrl" frameborder="0"></iframe>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openUrl : this.BaseJs.base_getUrl('openUrl'),
            fullscreenLoading: true
        }
    },
    mounted() {
        // console.log(this.BaseJs);
        this.iframeLoading();
    },
    methods: {
        iframeLoading () {
            const _this = this;
            const iframe = this.$refs.myiframe;
            iframe.onload = function () {
                _this.fullscreenLoading = false;
            }
        }
    },
}
</script>

<style scoped>
.openPage_main{
    height: 100%;
}
.openPage_content{
    height: 100%;
}
.openPage_content>div{
    width: 100%;
    height: 100%;
}
.content_main{
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
    background-color: #E9EEF3;
    color: #333;
}
</style>
