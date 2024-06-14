const { browser } = require('globals');

module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    globals: {
      ...browser,
      myCustomGlobal: 'readonly', // Your custom global variable
    },
  },
  rules: {
    // Add your ESLint rules here
    'no-unused-expressions': 'off', // Disable no-unused-expressions rule if it's causing issues
  },
};
