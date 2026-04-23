const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");

const devConfig = {
  mode: "development",

  output: {
    publicPath: "http://localhost:8081/",
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies, // shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
