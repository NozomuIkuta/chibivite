export default {
  '*.{js,mjs,ts,vue}': [
    'pnpm run lint:lint-staged',
    'pnpm run format:lint-staged',
  ],
  '*.{css,html,json,md,yaml,yml}': ['pnpm run format:lint-staged'],
}
