module.exports = {
  /**
   * @module  https://www.npmjs.com/package/@typescript-eslint/parser
   * @see     https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/typescript-estree
   */
  // <--- start parsing logic section --->
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Parse JSX code
    },
    ecmaVersion: 2020, // ECMAScript 2020
    sourceType: 'module', // allow the use of import
    project: './tsconfig.json', // point to your typescript config source
    tsconfigRootDir: __dirname, // If using worspaces or different config files
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  // <--- end parsing logic section --->
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  /**
   * @package https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
   * @see     https://github.com/typescript-eslint/typescript-eslint
   */
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-restricted-globals': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
