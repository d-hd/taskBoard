module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        'ignores': [
        ]
      }
    ],
    'vue/attribute-hyphenation': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'vue/v-on-event-hyphenation': [
      'off',
      {
        'autofix': false
      }
    ],
    'vue/no-v-html': 'off'
  }
};