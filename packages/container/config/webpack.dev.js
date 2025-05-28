const { merge } = require("webpack-merge"); // merge helps to merge all code in "webapack.common.js" file code into 'webpack-dev' or 'webpack-pord' files
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require('../package.json');


const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // HOST --> it's working as host --> get info from marking app bcz we have set it up below in remote Object
      // wants make use a module from other parts of application
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared:['react','react-dom']
      shared:packageJson.dependencies

    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
