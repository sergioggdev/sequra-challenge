const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/launch-app',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@Models': path.resolve(__dirname, 'src/models/'),
      '@Hooks': path.resolve(__dirname, 'src/models/hooks/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Tools': path.resolve(__dirname, 'src/tools/'),
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@Types': path.resolve(__dirname, 'src/typings/'),
    },
  },
  output: {
    filename: 'sequra.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'merchant-site/product-page.html',
    }),
  ],
};
