const path = require("path");
const minifyPlugin = require("babel-minify-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: path.resolve(__dirname, "src"),
  entry: ["./main.js", "main.css"],
  output: {
    path: path.resolve(__dirname, "public"),
  },
  modules: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        presets: ["@babel/preset-env"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin,
            options: {
              reload: true,
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new minifyPlugin(
      {},
      {
        comments: false,
      }
    ),
    new MiniCssExtractPlugin({
      fileName: "[name].css",
    }),
  ],
  devServer: {},
};
