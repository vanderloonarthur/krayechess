module.exports = {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    rules: {
      // Add specific ESLint rules here if needed
      'no-unused-expressions': 'off', // Disable conflicting rule if it's causing issues
      // Add more rules as per your project requirements
    },
  };
  