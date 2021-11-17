module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['@white-matrix/eslint-config'],
  parserOptions: {
    project: require.resolve('./tsconfig.json')
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-void': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['off', 'type'],
    '@typescript-eslint/no-empty-interface': 'warn'
  }
};
