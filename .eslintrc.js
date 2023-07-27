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
        jest: true,
    },
    extends: ['eslint:recommended', 'airbnb', 'plugin:storybook/recommended'],
    ignorePatterns: ['webpack.config.ts'],
    plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: ['draft', 'acc'],
        }],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'no-shadow': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/extensions': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreComments: true,
        }],
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
        }],
        'react/function-component-definition': ['error', {
            namedComponents: ['arrow-function'],
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // Temporary
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
    },
};
