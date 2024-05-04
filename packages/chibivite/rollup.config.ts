import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: {
    cli: path.resolve(__dirname, 'src/node/cli.ts'),
  },
  output: {
    dir: './dist',
    entryFileNames: `node/[name].js`,
    chunkFileNames: 'node/chunks/dep-[hash].js',
    exports: 'named',
    format: 'esm',
    externalLiveBindings: false,
    freeze: false,
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: path.resolve(__dirname, 'src/node/tsconfig.json'),
      sourceMap: true,
    }),
    commonjs({
      extensions: ['.js'],
    }),
    json(),
  ],
})
