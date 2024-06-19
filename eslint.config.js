module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      myCustomGlobal: 'readonly',
    },
  },
  plugins: {
    babel: {}, // Ensure this object is correctly defined based on the plugin's requirements
    es: {},   // Ensure this object is correctly defined based on the plugin's requirements
  },
  extends: ['eslint:recommended'], // Adjust based on your preferred ESLint configuration
  rules: {
    // Define your ESLint rules here
  },
};

