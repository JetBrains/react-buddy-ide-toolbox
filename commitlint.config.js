module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'WIP'
    ]],
    'type-case': [0],
    'header-max-length': [2, 'always', 100]
  }
};
