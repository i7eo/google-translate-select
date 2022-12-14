const fs = require('fs')
const path = require('path')

const internals = fs.readdirSync(path.resolve(__dirname, '../'))
const packages = fs.readdirSync(path.resolve(__dirname, '../../packages/'))
const apps = fs.readdirSync(path.resolve(__dirname, '../../apps'))
const scopes = [...internals, ...apps, ...packages]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
  prompt: {
    useEmoji: true,
    scopes: [...scopes],
    enableMultipleScopes: true,
    scopeEnumSeparator: ',',
  },
}
