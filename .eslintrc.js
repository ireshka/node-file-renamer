module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    /**
     * @info General eslint extends
     */
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'prettier/babel',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    /**
     * @info Node eslint extends
     */
    'plugin:node/recommended',
    /**
     * @info Typescript eslint extends
     */
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:typescript-sort-keys/recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jest',
    'jest-dom',
    'promise',
    'sort-keys-fix',
    'unicorn',
    'prettier',
    'typescript-sort-keys',
  ],
  rules: {
    /**
     * @info sort-keys-fix rules
     */
    'sort-keys-fix/sort-keys-fix': 'warn',

    /**
     * @info unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkProperties: true,
      },
    ],
    /**
     * Various rules
     */
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  },
  settings: {
    node: {
      tryExtensions: ['.json', '.ts'],
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.config.js'],
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        /**
         * @info Turn off some typescript rules
         */
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-tslint-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/brace-style': 'off',
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/func-call-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-array-constructor': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off',
        '@typescript-eslint/no-duplicate-imports': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': 'off',
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        '@typescript-eslint/prefer-function-type': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/space-infix-ops': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/unified-signatures': 'off',
      },
    },
  ],
};
