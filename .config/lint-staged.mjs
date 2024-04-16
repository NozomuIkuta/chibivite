export default {
  '*.{js,mjs,ts}': ['pnpm run lint', 'pnpm run format'],
  '*.{json,md}': ['pnpm run format'],
}
