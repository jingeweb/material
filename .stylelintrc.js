module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global']
    }],
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': null,
    'no-descending-specificity': null,
    'prettier/prettier': [true, { singleQuote: true }],
  },
};
