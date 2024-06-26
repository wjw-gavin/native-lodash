import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'

const entries = ['./src/index.ts']

const plugins = [
  alias({
    entries: [{ find: /^node:(.+)$/, replacement: '$1' }]
  }),
  resolve({
    preferBuiltins: true
  }),
  json(),
  commonjs(),
  esbuild({
    target: 'node16'
  }),
  terser()
]

export default [
  ...entries.map((input) => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.mjs'),
        format: 'esm'
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.cjs'),
        format: 'cjs'
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.js'),
        name: 'nativeLodash',
        format: 'umd'
      }
    ],
    external: [],
    plugins
  })),
  ...entries.map((input) => ({
    input,
    output: {
      file: input.replace('src/', '').replace('.ts', '.d.ts'),
      format: 'esm'
    },
    external: [],
    plugins: [dts({ respectExternal: true })]
  }))
]
