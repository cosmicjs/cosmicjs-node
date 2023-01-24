module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-async-promise-executor': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'node/no-missing-import': 'off',
    'node/no-extraneous-require': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
