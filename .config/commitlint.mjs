export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['chore', 'ci', 'docs', 'feat', 'fix', 'refactor', 'revert'],
    ],
  },
}
