<template>
    <div id="app-2">
        <OpenPage></OpenPage>
    </div>
</template>

<script>
import OpenPage from '@/pages/mainUnit/openpage'
export default {
    name: 'App-2',
    mounted () {
        document.title = this.$store.state.projectName;
    },
    components : {
        OpenPage
    }
}
</script>

<style>
#app-2 {
    width: 100%;
    height: 100%;
    font-family: "微软雅黑";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1366px;
}
#app-2>div{
    width: 100%;
    height: 100%;
}
::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #c1c1c1;
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>
