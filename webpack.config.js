var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  entry: path.resolve(__dirname, "react-app", "src", "index"),
  output: {
    path: path.resolve(__dirname, "react-app", "dist"),
    publicPath: "/static/",
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(gif|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  // Where webpack will save the satatuses
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "./webpack-stats.json",
    }),
  ],
};
