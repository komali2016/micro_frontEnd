const { merge } = require("webpack-merge"); // merge helps to merge all code in "webapack.common.js" file code into 'webpack-dev' or 'webpack-pord' files
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig,prodConfig)