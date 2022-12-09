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

const data = {
    name,
    date,
    status,
    age,
    address,
    position
  }  

//添加员工
export const addWorkerAPI = function (...data) {
  
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

export const getWorkerInfoAPI = function(id) {
	return request({
	    url: 'my/worker/getinfo',
	    method: 'post',
	    headers: {
	        // 获取token
	        'Authorization': localStorage.getItem('token'),
	        'Content-Type': 'application/x-www-form-urlencoded'
	    },
	    id: Qs.stringify(id)
	})
}

export const delWorkerAPI = function(id) {
	return request({
	    url: 'my/worker/del',
	    method: 'post',
	    headers: {
	        // 获取token
	        'Authorization': localStorage.getItem('token'),
	        'Content-Type': 'application/x-www-form-urlencoded'
	    },
	    id: Qs.stringify(id)
	})
}

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