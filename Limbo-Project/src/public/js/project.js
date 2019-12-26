export default {
    /**
     * 处理模板字符串代码
     * 以{/n ; . 。}为分隔符
     * {\n}仅匹配模板字符串中的换行符
     */
    project_dealCode (string) {
        // console.log(string)
        // console.log(typeof string[0])
        // 将字符串按换行符转为数组
        let codeArr = string[0].trim().split(/[\n]/);
        // console.log(codeArr)
        let num1,num2;
        codeArr.map((item,index) =>{
            // 去除数组中每个元素的空格
            codeArr.splice(index,1,item.trim())
            // 获取含{}的索引值（缺点只能匹配到一个）
            if (!item.match('{}')) {
                item.match('{') ? num1 = index : '';
                item.match('}') ? num2 = index : '';
            }
        })
        // 给{}内的字符添加空格
        for (let i = num1 + 1; i < num2; i++) {
            codeArr[i] = '&nbsp;&nbsp' + codeArr[i]
        }
        const dealArr = function(res,index) {
            // console.log(res)
            let flag = res.trim().match('//'),newStr;
            if (flag) {
                // 将打印结果单独标注
                const value = flag.input;
                const index = flag.index;
                newStr = `${value.substring(0,index)}<span style="color:darkorchid;">${value.substring(index)}</span>`
            } else {
                newStr = res.trim();
            }
            return newStr
        }
        const lastCode  = `${codeArr.map((res,index) => 
            `${res == '' ?  '' : `<p>${dealArr(res,index)}</p>`}`
            ).join('')}`
        return lastCode
    },
    /**
     * 处理树结构数据
     * 通过某个属性值获取所在对象
     * @param {树结构数据} data 
     * @param {属性} key 
     * @param {属性值} value 
     */
    project_dealTree (data, key, value) {
        // console.log(data, key, value);
        let resultData = {};
        function mapData (data) {
            for (const item of data) {
                // console.log(item);
                if (item[key] === value) {
                    resultData = data;
                    break;
                } else{
                    if (item.children) {
                        mapData(item.children)
                    }
                }
            }
            return resultData
        }
        mapData(data);
        return resultData
    }
}