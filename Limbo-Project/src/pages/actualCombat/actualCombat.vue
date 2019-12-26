<template>
    <div class="actualCombat">
        <div class="actualCombat_main">
            <el-collapse v-model="activeName" accordion class="actualCombat_collapse" @change="handleChange">
                <el-collapse-item v-for="item in collapseMenus" :key="item.name" :title="item.meta.name" :name="item.name">
                    <!-- <router-view></router-view> -->
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'actualCombat-demo',
            collapseMenus : this.ProjectJs.project_dealTree(this.$router.options.routes, 'name', 'actualCombat-demo'),
        }
    },
    mounted () {
        console.log(this.collapseMenus);
    },
    methods: {
        handleChange(val) {
            this.$router.push({
                        name : val
                    })
            // for (const item of this.collapseMenus) {
            //     if (item.name === val) {
                    
            //         break;
            //     }
            // }
        }
    },
}
</script>

<style scoped>
.actualCombat{
    background: #fff;
}
.actualCombat_collapse{
    width: 96%;
    margin: 0 auto;
}
</style>
