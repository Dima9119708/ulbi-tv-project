module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
    ],
    ignorePatterns: ['webpack.config.ts'],
    plugins: ['@typescript-eslint', 'react'],
    globals: {
        __IS_DEV__: true,
    },
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'no-shadow': 'off',
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/extensions': 'off',
        'max-len': ['warn', 120],
        'no-underscore-dangle': 'off',
    },
};