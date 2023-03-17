// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
    'unused-imports',
  ],
  parserOptions: {
    // ecmaVersion: 'latest',
    // sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.json', '.code-workspace'],
  },
  ignorePatterns: ['/**/node_modules/*'],
  settings: {
    'import/resolver': { typescript: {} },
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    curly: ['error', 'multi'],
    'object-curly-newline': ['error', {
      ObjectPattern: { multiline: true },
      ObjectExpression: { multiline: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true },
    }],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['./graphql/*.ts'],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: { '@graphql-eslint/known-type-names': 'error' },
    },
  ],
};
