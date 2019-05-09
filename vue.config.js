const path = require("path")

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
  },
  // 打包时不生产.map文件
  productionSourceMap:false,

  // 代理
  devServer:{
    proxy:"http://localhost:8080"
  }
}
