<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-07 14:41:58
 * @LastEditTime: 2021-07-27 14:26:13
 * @Description:
 * @FilePath: \xia-admin\src\views\login\custom-login.vue
-->
<template>
  <div class="custom-login-glass-container">
    <section class="login-content">
      1
    </section>
  </div>
</template>

<script>
import loginMixins from './mixin'
export default {
  mixins: [loginMixins]
}
</script>

<style lang="scss">
@import "@/styles/scss/variables";
.custom-login-glass-container{
  height: 100%;
  // 渐变
  background-image: linear-gradient(to right,#5c82ff 0%,#64c5fc 100%);
}
</style>
