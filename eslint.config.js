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
    es: require('eslint-plugin-es'), // Ensure this points to the correct plugin
  },
  rules: {
    //'es/no-array-prototype-keys': 'error',

    // Uncomment and configure additional rules as needed
    // 'no-console': 'warn',
    // 'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    // 'no-empty': 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'semi': ['error', 'always'],
    // 'quotes': ['error', 'single', { 'avoidEscape': true }],
    // 'indent': ['error', 2, { 'SwitchCase': 1 }],
  },
};
