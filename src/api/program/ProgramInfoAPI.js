/*
 * @Author: vivi.
 * @Date: 2022-08-20 10:31:45
 * @LastEditTime: 2022-08-20 10:32:09
 * @FilePath: \back-stage\src\api\program\ProgramInfoAPI.js
 * @Description: 
 */
import request from "@/utils/request";

export const getProgramListAPI = function () {
  return request({
    url: "my/program/proinfo",
    method: "get",
    headers: {
      // 获取token
      "Authorization": localStorage.getItem("token")
    }
  });
}