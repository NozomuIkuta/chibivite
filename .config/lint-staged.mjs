export default {
  '*.{js,mjs,ts}': ['pnpm run lint:lint-staged', 'pnpm run format:lint-staged'],
  '*.{css,json,md,yaml,yml}': ['pnpm run format:lint-staged'],
}
