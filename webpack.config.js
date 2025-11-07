const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react'] }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './public/index.html',
      inject: 'body'
    })
  ],
  devtool: 'source-map',
  devServer: { 
    historyApiFallback: true,
    port: 3000
  }
};