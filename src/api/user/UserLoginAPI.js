/*
 * @Author: vivi.
 * @Date: 2022-07-26 19:26:55
 * @LastEditTime: 2022-07-31 21:14:14
 * @FilePath: \back-stage\src\api\user\UserLoginAPI.js
 * @Description: 
 */
//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
//登录接口
export const LoginAPI = function (username ,password) {
    let data = {
        username,
        password
    }
    return request({
        url: '/api/login',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        data: Qs.stringify(data)

    })

            
}