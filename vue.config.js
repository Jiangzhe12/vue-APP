const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'https://m.douban.com/', //接口域名
              changeOrigin: true,             //是否跨域
              pathRewrite: {                  //路径重置
                  '^/api': ''
              }
          },
      }
  }
};
