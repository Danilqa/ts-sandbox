module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.ts',
          '.tsx',
          '.jsx'
        ],
        'paths': [
          './src'
        ]
      }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'lines-between-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-arrow-callback': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'none'
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
