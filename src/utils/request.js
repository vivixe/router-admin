/*
 * @Author: vivi.
 * @Date: 2022-07-26 19:22:10
 * @LastEditTime: 2022-07-31 19:48:22
 * @FilePath: \back-stage\src\utils\request.js
 * @Description: 
 */
//导入axios
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3007',
})

export default request