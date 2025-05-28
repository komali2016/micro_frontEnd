const { merge } = require("webpack-merge"); // merge helps to merge all code in "webapack.common.js" file code into 'webpack-dev' or 'webpack-pord' files
const HtmlWebpackPlugin = require("html-webpack-plugin"); // take html files and inject inside of it
// const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");


const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    // module federation plugin helps to connect container app through its plugin like below
    new ModuleFederationPlugin({
      name: "marketing", // some kind of declarating global variable to get all files into container
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared : packageJson.dependencies // shared: ["react", "react-dom"], // to share or load only copy of each 


    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
