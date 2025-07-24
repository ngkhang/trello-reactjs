module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    // For react-refresh ==========
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // For react-hooks ==========
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.ts', '.tsx'] }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',

    // For import ==========
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'warn',

    // For jsx-a11y ==========
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    // Common ==========
    'array-bracket-spacing': 'warn',
    'arrow-spacing': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'indent': ['warn', 2],
    'keyword-spacing': 'warn',
    'linebreak-style': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-lonely-if': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multi-spaces': 'warn',
    'no-undef': 'error',
    'consistent-return': 'off',
    'no-nested-ternary': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-unexpected-multiline': 'warn',
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      }
    ],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-blocks': ['error', 'always'],
    'semi': 'warn',
    'prefer-const': 'error',
    'object-curly-spacing': ['warn', 'always'],

    // For Material UI ==========
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@mui/*/*/*'],
      }
    ]
  },
}
