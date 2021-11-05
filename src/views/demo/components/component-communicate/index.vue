<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-10-21 09:15:06
 * @LastEditTime: 2021-10-21 10:47:32
 * @Description:
 * @FilePath: \xia-admin\src\views\demo\components\component-communicate\index.vue
-->
<template>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span class="mg-r-10">组件通信</span>
        <el-button type="success" size="mini" @click="changeHandle">改变</el-button>
      </div>
    </template>
     <Child/>
  </el-card>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Father from "./father.vue"
import Child from "./child.vue"
import Mock from 'mockjs'
const Random = Mock.Random
export default {
  name: 'ComponentCommunicate',
  components:{
    Father,
    Child
  },
  provide(){
    return{
      fatherData:this.fatherData
    }
  },
  setup(){
    const fatherData = reactive({
      msg:"我是爸爸"
    })
    const changeHandle = () =>{
      fatherData.msg = Random.cname()
    }
    return{
      fatherData,
      changeHandle
    }
  }
}
</script>

<style>

</style>
