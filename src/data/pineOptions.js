/*
 * @Author: vivi.
 * @Date: 2022-12-06 17:27:38
 * @LastEditTime: 2022-12-06 17:27:59
 * @FilePath: \router-admin\src\data\pineOptions.js
 * @Description: 
 */
const pineOptions = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['60%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}

module.exports = {pineOptions}