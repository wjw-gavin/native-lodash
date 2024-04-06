module.exports = [
  '@offbeat-ui/eslint-config',
  {
    rules: {
      'unicorn/prefer-number-properties': 'off'
    },
    ignores: ['!dist/', '!node_modules/', '*.d.ts']
  }
]
