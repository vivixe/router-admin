/*
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-12-11 11:26:29
 * @FilePath: \back-stage\vue.config.js
 * @Description: 
 */


module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            // 这里就是样式变量的名称以及对应的值，可以按照上面提供的官方文档进行配置
            'primary-color': '#1890ff',
            'link-color': '#1890ff',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  }
}