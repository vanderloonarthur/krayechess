module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    globals: {
      browser: true,
      node: true,
      myCustomGlobal: 'readonly',
    },
  },
  plugins: {
    es: {}, // Ensure this object structure is correct based on the plugin's requirements
  },
  rules: {
    // Define your ESLint rules here
  },
};
