// const path = require('path');
module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ 'react-app', 'react-app/jest', 'plugin:react-hooks/recommended' ],
  rules: {
    '@typescript-eslint/restrict-template-expressions': [ 'off' ],
    '@typescript-eslint/no-base-to-string': [ 'off' ],
  },
};
