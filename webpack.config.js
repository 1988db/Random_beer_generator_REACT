const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader, css-loader' },
      { test: /\.s(a|c)ss$/, loader: 'style-loader, css-loader, sass-loader' }
    ]
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'src'),
      },
    hot: true,
    open: true,
    port: 8000,
    watchFiles: 'src/**/*'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}