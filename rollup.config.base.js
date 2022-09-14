import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { defineConfig } from 'rollup'
import dev from 'rollup-plugin-dev'
import path from 'path'

import pkg from './package.json'

const extensions = ['.js', '.ts']

const resolve = (...args) => path.resolve(__dirname, ...args)

export default defineConfig({
  input: resolve('./packages/index.js'),
  output: [
    {
      file: resolve('./', pkg.main),
      format: 'umd',
      // name: pkg.name,
      name: 'nativeLodash',
      // 方便出现问题定位调试
      sourcemap: true
    },
    {
      file: resolve('./', pkg.module),
      format: 'es',
      name: pkg.name,
      sourcemap: true
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
