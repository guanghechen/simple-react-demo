import dts from '@guanghechen/postcss-modules-dts'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { defineConfig } from 'vite'
import paths from './script/config/paths'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: paths.alias },
  server: {
    port: 3030,
    host: '127.0.0.1',
    // hmr: {
    //   host: '127.0.0.1',
    //   protocol: 'ws',
    //   port: 3031,
    // },
  },
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
  css: {
    modules: {
      ...dts(),
      localsConvention: 'camelCaseOnly',
      generateScopedName: (name, filepath) => {
        const scopedName =
          'ghc-' +
          path
            .relative(path.join(__dirname, 'src'), filepath)
            .replace(/([/\\]style)?(\.module)?\.styl?$/, '')
            .replace(/[/\\]+/g, '-')
            .replace(/-$/, '') +
          '__' +
          name
        return scopedName
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 2048,
  },
})
