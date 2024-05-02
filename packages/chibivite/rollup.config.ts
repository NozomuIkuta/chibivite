import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    dir: './dist',
    entryFileNames: `[name].js`,
    exports: 'named',
    format: 'esm',
    externalLiveBindings: false,
    freeze: false,
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.base.json'),
      sourceMap: true,
    }),
  ],
})
