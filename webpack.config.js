var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  // Set entry point
  entry: path.join(__dirname, "assets/src/js/index"),
  // Set output
  output: {
    path: path.join(__dirname, "assets/dist"),
    filename: "[name]-[hash].js",
  },
  // Where webpack will save the satatus
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "webpack-stats.json",
    }),
  ],
  mode: "development",
};
