module.exports = {
  plugins: ['babel', 'xo'],
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
  extends: ['eslint:recommended'],
  rules: {
    'babel/new-cap': 'error',
    'xo/throw-new-error': 'error',
    // Define your ESLint rules here
    // Example:
    // 'no-console': 'warn',
    // 'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    // 'no-empty': 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'semi': ['error', 'always'],
    // 'quotes': ['error', 'single', { 'avoidEscape': true }],
    // 'indent': ['error', 2, { 'SwitchCase': 1 }],
  },
};
