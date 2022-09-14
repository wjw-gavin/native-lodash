import baseConfig from './rollup.config.base'
import livereload from 'rollup-plugin-livereload'
import { defineConfig } from 'rollup'
import dev from 'rollup-plugin-dev'

import pkg from './package.json'

export default defineConfig({
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    dev({
      port: '6666',
      host: 'localhost'
    }),
    livereload('packages')
  ]
})
