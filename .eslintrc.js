const path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['standard', 'plugin:@typescript-eslint/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4],
        semi: [1, 'always'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off'
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', path.resolve(__dirname, 'src')]]
            }
        }
    }
};
