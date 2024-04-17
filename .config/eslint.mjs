import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      'docs/.vitepress/cache',
      'docs/.vitepress/dist',
      'dist',
      'node_modules',
    ],
  },
]
