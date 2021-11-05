<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-05 10:46:31
 * @LastEditTime: 2021-10-21 09:20:43
 * @Description:
 * @FilePath: \xia-admin\src\views\demo\components\js-demo.vue
-->
<template>
  <div>
    <el-card class="mg-t-10">
      <template #header>
        <div class="card-header">
          等于运算符
        </div>
      </template>
      <div />
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'JsDemo',
  data() {
    return {
    }
  },
  mounted() {
    this.testJSHandle()
  },
  methods: {
    testJSHandle() {
      console.log('相等运算符', '=============')
      const obj1 = {
        a: 1,
        b: {
          c: 2
        }
      }
      const obj2 = {
        d: 3,
        e: {
          f: 4
        }
      }
      const b1 = obj1.b
      const b2 = obj1.b
      const obj3 = obj1
      console.log(obj1 === obj3)
      console.log(b1 === b2)
      console.log('b' in obj1)
      console.log('=============')
      const arr = [{ a: 1, b: { c: 2 }}, { d: 3, e: { f: 4 }}]
      const item2 = arr[1]
      const bool = arr.includes(item2)
      const index = arr.indexOf(item2)
      console.log(bool, index) // true 1
      console.log(item2 === arr[1]) // true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
