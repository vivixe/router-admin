/*
 * @Author: vivi.
 * @Date: 2022-08-03 16:27:16
 * @LastEditTime: 2022-08-03 16:30:23
 * @FilePath: \back-stage\src\api\user\UserRegAPI.js
 * @Description: 
 */
import request from '@/utils/request'
import Qs from 'qs'

export const RegAPI = function (username, password, nickname) {
    let data = {
        username,
        password,
        nickname
    }
    return request({
        url: '/api/reguser',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        data: Qs.stringify(data)
    })
}