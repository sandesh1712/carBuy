const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s(a|c)ss)|css$/,
        use: ['style-loader','css-loader', 'sass-loader']
     }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    symlinks: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
