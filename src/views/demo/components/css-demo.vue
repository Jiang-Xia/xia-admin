<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-10-21 09:21:48
 * @Description:
 * @FilePath: \xia-admin\src\views\demo\components\css-demo.vue
-->
<template>
  <div class="css-demo-container">
    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          标准盒模型和怪异盒模型
        </div>
      </template>
      <div>
        <div ref="box1" class="common-box" />
        <div ref="box2" class="spc-box" />
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CssDemo',
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$refs.box1.offsetWidth)
    console.log(this.$refs.box2.offsetWidth)
  }
}
</script>
<style lang="scss" scoped>
.css-demo-container{
  .common-box,.spc-box{
    width: 100px;
    height: 100px;
    padding:10px;
    border:4px solid #ccc;
    margin: 10px;
    background-color: rgb(9, 161, 161);
  }
  .common-box{
    box-sizing: content-box;
  }
  .spc-box{
    background-color: rgb(235, 16, 136);
    box-sizing: border-box;
  }
}
</style>
