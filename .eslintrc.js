module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2]
  }
};
