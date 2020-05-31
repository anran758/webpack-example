const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        // 匹配文件规则
        test: /\.css$/i,
        // use 从右至左进行应用
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../', }
          },
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:8].[ext]',
            fallback: 'file-loader'
          },
        },
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          },
        },
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
    }),

    new CopyPlugin({
      patterns: [
        // 如果只传 string 的话，那这个 string 相当于 from
        // path.resolve(__dirname, 'src', 'static'),

        // to 默认是 `compiler.options.output`, 也就是 dist 目录
        // {
        //   from: path.resolve(__dirname, 'src/static'),
        //   to: ''
        // },

        // 当前配置中与上面两例等价
        // {
        //   from: path.resolve(__dirname, 'src/static'),
        //   to: path.resolve(__dirname, 'dist'),
        // },

        {
          from: path.resolve(__dirname, 'src/static'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['/**/webpack.jpg', '/**/img/webpack.svg'],
          }
        },
      ],
    }),
  ],
}
