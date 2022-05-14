const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require("webpack").container;

// Module Federation 使 JavaScript 应用得以从另一个 JavaScript 应用中动态地加载代码 —— 同时共享依赖

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9001/"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9001,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", 'css-loader', "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'build/**/*')],
    }),
    new HtmlWebpackPlugin({
      title: "webpack5入门到放弃",
      // filename: "suibianqi/content.html",
      meta: {
        description: "webpack5"
      }
    }),
    new ModuleFederationPlugin({
      name: "MsButtonApp",
      filename: "remoteEntry.js", // http://localhost:9001/remoteEntry.js
      exposes: {
        "./MsButton": "./src/components/ms-button/ms-button.js"
      }
    })
  ]
}