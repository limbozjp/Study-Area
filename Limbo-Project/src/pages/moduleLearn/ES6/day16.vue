<template>
    <div class="day16">
        <baseCode v-model="code_1" :codeTitle="codeTitle_1"></baseCode>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeTitle_1 : '',
            code_1 : this.ProjectJs.project_dealCode`
            
            `,
            codeTitle_1 : 'For of Loop/循环',
            code_1 : this.ProjectJs.project_dealCode`
            for循环较繁琐可读性不高
            forEach不可终止或者跳过
            for in循环遍历对象的可枚举属性，即使加到原型属性上。获取到的是索引值
            //for of获得到属性值，支持终止和跳过
            `,
        }
    },
}
</script>