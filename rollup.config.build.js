import baseConfig from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import { defineConfig } from 'rollup'

import pkg from './package.json'

const extensions = ['.js', '.ts']

export default defineConfig({
  ...baseConfig,
  plugins: [...baseConfig.plugins, filesize(), terser()]
})
