module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'react-app'
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          printWidth: 80,
          bracketSpacing: false,
          arrowParens: 'avoid',
          endOfLine: 'auto'
        },
      ],
      // '@typescript-eslint/no-explicit-any': '',
      // "@typescript-eslint/explicit-function-return-type": 'off',
      'prefer-const': 'off',
      'linebreak-style': 0,      
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },    
  };