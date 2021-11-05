<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-10-21 10:19:03
 * @LastEditTime: 2021-10-21 10:43:02
 * @Description: 
 * @FilePath: \xia-admin\src\views\demo\components\component-communicate\child.vue
-->
<template>
<div>child:{{fatherData.msg}}</div>
</template>
<script>
export default {
    name:'Child',
    inject:["fatherData"],
    watch:{
        fatherData:{
            handler:function(n){
                console.log(n,"fatherData")
            },
            deep:true
        }
    }
}
</script>