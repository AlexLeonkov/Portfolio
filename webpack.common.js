const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].js",
    assetModuleFilename: "assets/img/[name].[ext]",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|JPEG|gif|ico|svg|eot|ttf|woff)$/,
        type: "asset/resource",
      },
    ],
  },
};
