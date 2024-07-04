const path = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './assets/js/_main.js', // Adjust entry point as per your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new DotenvWebpackPlugin()  ],
};
