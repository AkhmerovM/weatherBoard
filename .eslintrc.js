module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    'react/jsx-filename-extension': ["error", { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    "import/prefer-default-export": "off",
  },
};
