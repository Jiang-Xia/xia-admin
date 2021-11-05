<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-10-21 09:19:59
 * @Description:
 * @FilePath: \xia-admin\src\views\demo\components\directive.vue
-->
<template>
  <div>
    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          水印(v-watermark)
        </div>
      </template>
      <div>
        <div v-watermark class="cusrom-directive" />
      </div>
    </el-card>

    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          复制(v-copy)
        </div>
      </template>
      <div>
        <el-button v-copy="copyText">复制</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Directive',
  data() {
    return {
      copyText: '这是一段复制的文本。。。'
    }
  }
}
</script>
