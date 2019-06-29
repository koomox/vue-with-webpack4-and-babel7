const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm
const webpack = require("webpack"); // to access built-in plugins
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  mode: "development",
  entry: {
    app: [
      "./src/main.js",
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    host: "localhost"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: "app",
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      inject: true
    })
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.js",
      "@": resolve("src")
    }
  }
};
