<!--
 * @Author: vivi.
 * @Date: 2022-07-25 18:00:42
 * @LastEditTime: 2022-07-25 18:07:52
 * @FilePath: \router-admin\src\components\menus\tables\MySeller.vue
 * @Description: 
-->
<template>
  <div class="com-container">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: null,
    }
  },
  mounted(){
    this.initChart()
    this.getData()
  },
  methods:{
    initChart(){
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
    },
    getData(){

    },
    updatedChart() {
      
    },
  }
}
</script>

<style>

</style>