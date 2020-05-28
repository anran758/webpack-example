const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // 起点或是应用程序的起点入口
  entry: "./src/js/index",

  // 输出配置
  output: {
    // 编译后的输出路径
    // 注意此处必须是绝对路径，不然 webpack 将会抛错（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "dist"),

    // 输出 bundle 的名称
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        // 匹配文件规则
        test: /\.css$/i,
        // use 从右至左进行应用
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // html-webpack-plugin
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      title: 'Test Configuration',
      template: path.resolve(__dirname, "./src/index.html"),
    }),

    // 提取 css 到单独的文件
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // 选项类似于 webpackOptions.output 中的相同选项，该选项是可选的
      filename: 'css/index.css',
    })
  ],
}
