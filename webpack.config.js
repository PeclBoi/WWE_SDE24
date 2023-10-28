const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {

  mode: 'development',
  entry:
  {
    main: './src/index.ts',
    armor: './src/armor.ts',
    bookmark: './src/bookmarks.ts'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map', 
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    hot: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/armor.html',
      filename: 'armor.html',
      chunks: ['armor'],
    }),
    new HtmlWebpackPlugin({
      template: './src/bookmark.html',
      filename: 'bookmark.html',
      chunks: ['bookmark'],
    }),
  ],
};