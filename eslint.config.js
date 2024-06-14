module.exports = {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        browser: true,
        node: true,
        myCustomGlobal: 'readonly', // Define your custom global variable here
      },
    },
    plugins: {
      es: {
        // Configuration for 'es' plugin if needed
      },
    },
    rules: {
      // Specific ESLint rules here
      // Add more rules as needed
      'es/no-2022': 'error', // Example rule from the 'es' plugin
    },
  };
  