/*
 * @Author: vivi.
 * @Date: 2022-08-19 15:29:57
 * @LastEditTime: 2022-08-19 16:12:24
 * @FilePath: \back-stage\src\api\program\ProgramAddAPI.js
 * @Description: 
 */
//导入request.js
import request from '@/utils/request'
import Qs from 'qs'
//添加项目接口
export const ProgramAddAPI = function (name,owner,time,member,earn,propic,status,demand) {
    let data = {
        name,
        owner,
        time,
        member,
        earn,
        propic,
        status,
        demand
    }
    return request({
        url: '/my/program/addproinfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        },
        method: 'post',
        data: Qs.stringify(data)

    })

            
}