const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for production build
  entry: './assets/js/_main.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file
  },
  // Add loaders, plugins, and other configurations as needed
};
