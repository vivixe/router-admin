/*
 * @Author: vivi.
 * @Date: 2022-08-10 14:29:32
 * @LastEditTime: 2022-08-10 15:25:20
 * @FilePath: \back-stage\src\api\worker\WorkerInfoAPI.js
 * @Description: 
 */
import request from '@/utils/request'

//获取员工列表
export const getWorkerListAPI = function () {
    
    return request({
        url: 'my/worker/info',
        method: 'get',
        headers: {
          // 获取token
          'Authorization': localStorage.getItem('token')
        },
    })
}