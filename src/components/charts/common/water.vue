<!--
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-29 09:18:17
 * @LastEditTime: 2021-07-29 10:00:58
 * @Description:
 * @FilePath: \xia-admin\src\components\charts\common\water.vue
-->
<template>
  <div id="water-wrap" ref="water-wrap" class="wrap__inner">
    1
  </div>
</template>

<script>

const option = {
  series: [{
    type: 'liquidFill',
    data: [0.6, 0.5, 0.4, 0.3],
    radius: '80%'
  }]
}
import 'echarts-liquidfill'
import * as echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  name: 'Water',
  setup() {
    let chart = null
    onMounted(() => {
      chart = echarts.init(document.querySelector('#water-wrap'))
      chart.setOption(option)
      window.addEventListener('resize', () => chart.resize())
    })
    return {

    }
  },
  created() {
    // console.log(echarts)
  }
}
</script>
<style scoped lang="scss">
.wrap__inner{
    height: 100%;
    width: 100%;
}
</style>
