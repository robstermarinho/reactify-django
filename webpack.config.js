var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  entry: path.resolve(__dirname, "assets", "src", "index"),
  output: {
    path: path.resolve(__dirname, "assets/dist"),
    filename: "[name]-[hash].js",
  },
  // Where webpack will save the satatus
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "./webpack-stats.json",
    }),
  ],
};
