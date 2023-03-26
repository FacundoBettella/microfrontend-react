const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: true,
    // {index: "index.html"}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
