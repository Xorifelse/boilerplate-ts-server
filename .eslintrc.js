module.exports = {
  'env': {
      'es6': true,
      'node': true
  },
  'extends': [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended'
  ],
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'ecmaVersion': 2018,
      'sourceType': 'module'
  },
  'plugins': [
      '@typescript-eslint'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error','never'],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-this-before-super': 'error',    
    'no-useless-constructor': 'error',
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-spread': 'error',
    // "no-unused-vars": ['error', {
    //     vars: "local",
    //     args: "after-used",
    //     argsIgnorePattern: "^_", // ignore expected unused variable
    //     ignoreRestSiblings: false
    //   }
    // ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
}