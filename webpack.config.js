const path = require('path');

module.exports = {
  entry: './index/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 babel-loader 处理
          options: {
            presets: ['@babel/preset-env'] // 使用 @babel/preset-env 进行转换
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'index'), // 指定静态文件目录
    },
    compress: true, // 启用 gzip 压缩
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
  }
};
