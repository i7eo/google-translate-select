module.exports = {
  'pre-commit': 'pnpm exec lint-staged',
  'commit-msg': 'pnpm exec commitlint --edit $1',
}
