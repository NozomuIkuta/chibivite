import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist/index.mjs'),
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.base.json'),
      sourceMap: true,
    }),
  ],
})
