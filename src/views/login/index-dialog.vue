<!--
 * @Author: 江夏
 * @LastEditors: 酱
-->
<template>
  <el-dialog
    v-model="loginVisible"
    title="登录"
    :close-on-click-modal="false"
    custom-class="xia-dialog-login"
    width="400px"
    @close="closeHandle"
  >
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginrules"
      class="loginForm"
    >
      <el-form-item prop="username" class="me-item">
        <div class="xia-item">
          <i class="xia xia-user mg-r-10" />
          <el-input
            v-model="loginForm.username"
            class="inline"
            type="username"
            autocomplete="on"
          />
        </div>
      </el-form-item>
      <el-form-item prop="password" class="me-item">
        <div class="xia-item">
          <i class="xia xia-lock mg-r-10" />
          <el-input
            v-model="loginForm.password"
            class="inline"
            type="password"
            autocomplete="on"
            @keydown.enter="tologinForm('loginForm')"
          />
        </div>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="tologinForm('loginForm')"
        >登 录</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import loginMixins from './mixin'
export default {
  mixins: [loginMixins],
  props: {
    options: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      token: '',
      loginVisible: true
    }
  },
  mounted() {
    const dom = document.querySelector('.xia-dialog-login .el-dialog__headerbtn')
    if (dom) {
      dom.style.display = 'none'
    }
  },
  methods: {
    closeHandle() {
      this.loginVisible = false
      this.$emit('close')
    }
  }
}
</script>
<style scoped lang="scss">
.xia-dialog-login {
  .xia-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
