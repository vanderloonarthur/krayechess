const path = require('path');

module.exports = {
  entry: './eslint.config.js', // Adjust the entry point to your main JavaScript file
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
            presets: ['@babel/preset-env']
            // add any other babel options if needed
          }
        }
      }
    ]
  }
};
