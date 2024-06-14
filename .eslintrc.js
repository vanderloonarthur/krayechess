module.exports = {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
    },
    extends: ['eslint:recommended', 'plugin:es/no-2022'],
    parserOptions: {
      ecmaVersion: 2021, // Adjust to your ECMAScript version
    },
    rules: {
      // Add your specific ESLint rules here
    },
  };