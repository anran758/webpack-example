const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 起点或是应用程序的起点入口
  entry: "./src/index",

  // 输出配置
  output: {
    // 编译后的输出路径
    // 注意此处必须是绝对路径，不然 webpack 将会抛错（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 输出 bundle 的名称
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test Configuration'
    })
  ],
}
