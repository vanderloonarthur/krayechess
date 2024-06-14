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
  plugins: {
    es: {
      // Optional: Add configuration for 'es' plugin if needed
    },
  },
};
