const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
    // {
    //   index: "index.html",
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
      // shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
