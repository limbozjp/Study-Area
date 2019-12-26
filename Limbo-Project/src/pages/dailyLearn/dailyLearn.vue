<template>
    <div class="dailyLearn">
        <el-table
            :data="tableDate"
            style="width: 100%"
            height="100%"
            :row-class-name="tableRowClassName"
            stripe>
            <el-table-column
                v-for="item in tableMenus"
                :type="item.type"
                :width="item.width"
                :key="item.label"
                :prop="item.prop"
                :label="item.label">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                    <el-button
                        @click="detailTable(scope)"
                        type="text">
                        详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            class="detailDialog"
            :title="detailIntro"
            :visible.sync="detailDialog"
            width="40%">
            <el-container>
                <el-main>
                    <div class="detail_content">
                        {{detailContent}}
                    </div>
                    <div class="detail_image">
                        <img :src="detailImage" alt="" srcset="">
                    </div>
                </el-main>
            </el-container>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableDate : require('@/public/json/data.json').dailyLearnData,
            tableMenus : [
                {
                    label : '序号',
                    prop : 'index',
                    type : 'index',
                    width : 50,
                },
                {
                    label : '日期',
                    prop : 'date',
                    type : '',
                    width : 180,
                },
                {
                    label : '简介',
                    prop : 'intro',
                    type : '',
                    width : '',
                },
            ],
            detailDialog : false,
            detailIntro : '',
            detailContent : '',
            detailImage : '',
        }
    },
    mounted() {},
    methods: {
        // 定义表格颜色
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
        detailTable (scope) {
            // console.log(scope);
            if (scope.row.url) {
                const url = `http://${window.location.host}/newOpenPage.html?openUrl=${scope.row.url}`;
                window.open(url);
            } else{
                // console.log(scope.row.content);
                this.detailDialog = true;
                this.detailIntro = scope.row.intro;
                this.detailContent = scope.row.content;
                this.detailImage = require(`@/assets/dailyImage/${scope.row.image}.png`);
            }
        },
    },
}
</script>

<style scope>
.dailyLearn .el-table .warning-row {
    background: oldlace;
}
.dailyLearn .el-table .success-row {
    background: #f0f9eb;
}
.dailyLearn .el-dialog{
    max-height: calc(100% - 15vh - 50px);
}
.dailyLearn .el-dialog__body{
    height: calc(100% - 55px);
    overflow: auto;
}
.detail_content{
    padding-bottom: 20px;
}
.detail_image{
    height: 30vh;
    display: flex;
    justify-content: center;
}
</style>

