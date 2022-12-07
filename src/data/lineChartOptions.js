/*
 * @Author: vivi.
 * @Date: 2022-12-06 17:24:54
 * @LastEditTime: 2022-12-06 17:26:08
 * @FilePath: \router-admin\src\data\lineChartOptions.js
 * @Description: 
 */
const lineChartOptions = {
  title: {
    text: '   近期收入',
    left: 'left',
    top: 10,
    margin: 10,
    textStyle: {
      color: '#333',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['收入'],
    top: 30,
    textStyle: {
      color: '#ccc',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  series: [
    {
      name: '收入',
      type: 'line',
      smooth: true,
      stack: '总量',
      areaStyle: {},
      data: [220, 152, 131, 174, 90, 230, 210],
    },
  ],
}

module.exports = {lineChartOptions}