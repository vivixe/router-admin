/*
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-08-20 14:49:52
 * @FilePath: \back-stage\vue.config.js
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer: {
    allowedHosts: [
      'test.lilinbo.cn',
      'test.lilinbo.cn:8080',
      'test.lilinbo.cn:8081',
      '.test.lilinbo.cn',
    ],
    
  }
})
