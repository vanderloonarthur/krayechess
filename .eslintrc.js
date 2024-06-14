module.exports = {
  // Set environment options directly
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  // Use extends for base configurations
  extends: ['eslint:recommended'],

  // Set parser options directly
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  // Plugins are specified directly as strings
  plugins: [
    // Add other plugins as needed
    // 'es', // Example if needed
  ],

  // Rules are defined directly in the rules object
  rules: {
    // Ensure these rules are correctly available
    // 'es/no-array-prototype-foreach': 'error', // Example if needed
    // Add more rules as needed
  },

  // Overrides are specified directly
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        // Define global variables directly
        browser: true,
        node: true,
        myCustomGlobal: 'readonly',
      },
      rules: {
        // Add specific rules for JavaScript files here
      },
    },
    // Add more overrides for other file types if needed
  ],
};
