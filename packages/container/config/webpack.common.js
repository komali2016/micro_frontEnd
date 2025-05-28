const HtmlWebpackPlugin = require("html-webpack-plugin"); // take html files and inject inside of it

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // both dev and prod - can pull from here  
      template: "./public/index.html",
    }),
  ],
};
