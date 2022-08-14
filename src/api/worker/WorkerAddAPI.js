/*
 * @Author: vivi.
 * @Date: 2022-08-12 20:17:52
 * @LastEditTime: 2022-08-12 20:55:37
 * @FilePath: \back-stage\src\api\worker\WorkerAddAPI.js
 * @Description: 
 */
//导入request模块
import request from '@/utils/request'
//导入qs模块
import Qs from 'qs'


//添加员工
export const addWorkerAPI = function (name,date,status,age,address,position) {
  let data = {
    name,
    date,
    status,
    age,
    address,
    position
  }  
    return request({
        url: 'my/worker/addinfo',
        method: 'post',
        headers: {
            // 获取token
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: Qs.stringify(data)
    })
}