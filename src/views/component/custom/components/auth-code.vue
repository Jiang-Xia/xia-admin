<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-15 10:10:14
 * @LastEditTime: 2021-08-11 17:17:29
 * @Description:
 * @FilePath: \xia-admin\src\views\component\custom\components\auth-code.vue
-->
<template>
  <div class="auth-code-container">
    <AuthCode ref="AuthCode" v-if="show"/>
    <el-button size="small" type="text" @click="createCodeHandle">看不清？重新生成</el-button>
    <div style="margin-top: 15px">
      <el-input v-model="writeCode" size="small" placeholder="请输入图片中的验证码">
        <template #append>
          <el-button size="small" @click="checkCodeHandle"> 确认</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
import AuthCode from '@/components/auth-code/index.vue'
export default {
  components: {
    AuthCode
  },
  data() {
    return {
      authCode: '',
      writeCode: '',
      show: false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.show = true
    },2000)
  },
  methods: {
    createCodeHandle() {
      this.authCode = this.$refs.AuthCode.createCode(4)
    },
    checkCodeHandle() {
      const { authCode, writeCode } = this
      if (authCode.toUpperCase() !== writeCode.toUpperCase()) {
        this.$message.warning('验证码不正确！')
      } else {
        this.$message.warning('输入正确！')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.auth-code-container{
    .auth-code{
        height: 50px;
        width: 130px;
    }
}
</style>
