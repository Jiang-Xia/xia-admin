<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-29 09:18:17
 * @LastEditTime: 2021-08-03 17:40:51
 * @Description:
 * @FilePath: \xia-admin\src\views\form\question-type\new-temp.vue
-->
<template>
  <div class="new-temp-container">
    <div class="temp-item">
      题目：<el-input v-model="addData.name" size="small" />
    </div>
    <div class="temp-item">
      备注：<el-input v-model="addData.mark" size="small" />
    </div>
    <!-- 选择题 -->
    <section v-if="['multiple_choice','multiple_dropdown','single_choice','single_dropdown'].includes(addData.type)">
      <el-input
        v-for="item in addData.options"
        :key="item.text_show"
        v-model="item.value"
        size="small"
        class="mg-b-10"
      />
      <div><el-button size="small">新增选项</el-button></div>
    </section>
    <!-- 填空题 -->
    <section v-else />
    <div class="temp-item mg-t-10">
      <el-button size="small" @click.stop="cancel">取消</el-button>
      <el-button size="small" type="primary" @click.stop="confirm">确认</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    addData: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    confirm() {
      // console.log(this.addData)
      if (!this.addData.name) {
        this.$message.warning('请先填写题目名称！')
        return
      }
      this.$emit('confirm')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="scss">
.new-temp-container{
  .el-input{
    display: inline-block;
    width: 70%;
  }
  .temp-item{
    margin-bottom: 1rem;
  }

}
</style>
