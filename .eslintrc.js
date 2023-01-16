// eslint-disable-next-line no-undef
module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true
  // },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    // 'airbnb',
    // 'airbnb-typescript',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier'
  ],
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    // project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
