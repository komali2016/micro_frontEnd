const { merge } = require("webpack-merge"); // merge helps to merge all code in "webapack.common.js" file code into 'webpack-dev' or 'webpack-pord' files
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require('../package.json');


const prodDomain = process.env.PRODUTION_DOMAIN;


const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js', // file name with hasing the content

    },
    plugins:[
     new ModuleFederationPlugin({
        name:'container',
        remotes:{
            marketing:`marketingApp@${prodDomain}/marketing/remoteEntry.js`
        },
        shared:packageJson.dependencies,
     })   
    ]
}

module.exports =  merge(commonConfig,prodConfig)