module.exports = {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
    },
    extends: ['eslint:recommended'],  // Remove 'plugin:es/no-2022' if not necessary
    parserOptions: {
      ecmaVersion: 2021,
    },
    rules: {
      // Add specific ESLint rules here if needed
      'no-unused-expressions': 'off', // Disable conflicting rule if it's causing issues
      // Add more rules as per your project requirements
    },
  };
  