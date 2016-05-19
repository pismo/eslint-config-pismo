module.exports = {
  extends: ['airbnb-base'],
  plugins: ['angular', 'lodash'],
  rules: {
    'no-var': ['warn'],
    'no-shadow': ['warn'],
    'prefer-template': ['warn'],
    'strict': ['warn'],
    'indent': ['error', 4, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'prefer-arrow-callback': ['warn'],
    'object-shorthand': ['warn'],
    'new-cap': ['warn'],
    'no-return-assign': ['off'],
    'linebreak-style': ['error', 'unix'],
    'camelcase': ['warn'],
    'no-use-before-define': ['off'],
    'max-len': ['error', 120],
    'padded-blocks': ['off'],
    'no-param-reassign': ['off'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'lodash/prop-shorthand': 2,
    'lodash/matches-shorthand': [2, 'always', 3],
    'lodash/matches-prop-shorthand': [2, 'always'],
    'lodash/prefer-chain': [0, 3],
    'lodash/preferred-alias': 2,
    'lodash/no-single-chain': 0,
    'lodash/prefer-reject': [2, 3],
    'lodash/prefer-filter': [2, 3],
    'lodash/callback-binding': 2,
    'lodash/unwrap': 2,
    'lodash/prefer-compact': 2,
    'lodash/no-double-unwrap': 2,
    'lodash/prefer-map': 2,
    'lodash/prefer-wrapper-method': 2,
    'lodash/prefer-invoke-map': 2,
    'lodash/prefer-thru': 2,
    'lodash/prefer-lodash-chain': 2,
    'lodash/prefer-lodash-method': 0,
    'lodash/prefer-lodash-typecheck': 2,
    'lodash/no-commit': 2,
    'lodash/prefer-get': [2, 3],
    'lodash/collection-return': 2,
    'lodash/prefer-matches': [2, 3],
    'lodash/prefer-times': 2,
    'lodash/prefer-startswith': 2,
    'lodash/prefer-noop': 2,
    'lodash/prefer-constant': 2,
    'lodash/chain-style': [2, 'as-needed'],
    'lodash/prefer-is-nil': 2,
    'lodash/prefer-over-quantifier': 2,
    'lodash/path-style': [2, 'as-needed'],
    'lodash/no-extra-args': 2
  }
};
