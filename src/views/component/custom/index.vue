<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-02 09:38:08
 * @LastEditTime: 2021-08-11 17:08:25
 * @Description:
 * @FilePath: \xia-admin\src\views\component\custom\index.vue
-->
<template>
  <div class="component-container">
    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          长列表（自定义）
        </div>
      </template>
      <LongList />
    </el-card>

    <el-card class="mg-b-10">
      <template #header>
        <div class="card-header">
          验证码随机生成
        </div>
      </template>
      <AuthCode />
    </el-card>
  </div>
</template>

<script>
import LongList from './components/long-list.vue'
import AuthCode from './components/auth-code.vue'

export default {
  components: {
    LongList,
    AuthCode
  },
  setup() {
    return {
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.component-container{
  padding: 1rem 1.2rem;
  min-height: 80%;
  background-color: #fff;
  border-radius: $border-radius;
  .el-card{
    // width: 88%;
  }
}
</style>
