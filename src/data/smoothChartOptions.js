/*
 * @Author: vivi.
 * @Date: 2022-12-06 17:29:19
 * @LastEditTime: 2022-12-06 17:29:27
 * @FilePath: \router-admin\src\data\smoothChartOptions.js
 * @Description: 
 */
const smoothChartOptions = {
  yAxis: {
    type: 'category',
    data: ['卷卷狗', '肥肥狗', '电子狗', '困困狗'],
  },
  xAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        {
          value: 84,
          itemStyle: {
            color: '#8db7d0',
          },
        },
        {
          value: 45,
          itemStyle: {
            color: '#585697',
          },
        },
        {
          value: 90,
          itemStyle: {
            color: '#4d62a3',
          },
        },
        {
          value: 30,
          itemStyle: {
            color: '#ad5a56',
          },
        },
      ],

      type: 'bar',
      barWidth: 20,
    },
  ],
}

module.exports = {smoothChartOptions}