module.exports = {
  // eslint-configs
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  // eslint-plugins
  plugins: ['react', 'prettier', '@typescript-eslint'],
  // enabling/disabling/changing level of rules
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-shadow': 'off',
    'no-empty': 'off',
    'no-useless-return': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-useless-escape': 'off',
    'react/no-unescaped-entities': 'off',
    'react/button-has-type': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    quotes: ['error', 'single', { avoidEscape: true }]
  }
};
