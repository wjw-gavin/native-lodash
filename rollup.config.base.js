import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { defineConfig } from 'rollup'
import path from 'path'

import pkg from './package.json'

const extensions = ['.js']

const resolve = (...args) => path.resolve(__dirname, ...args)

export default defineConfig({
  input: resolve('./src/index.js'),
  output: [
    {
      file: resolve('./', pkg.main),
      format: 'umd',
      // name: pkg.name,
      name: 'nativeLodash',
      sourcemap: false
    },
    {
      file: resolve('./', pkg.module),
      format: 'es',
      name: pkg.name,
      sourcemap: false
    }
  ],
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    babel({ exclude: 'node_modules/**' })
  ]
})
