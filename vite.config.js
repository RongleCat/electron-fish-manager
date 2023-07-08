/// <reference types="vitest" />
/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path'
import { setupVitePlugins } from './plugins'

const rootPath = __dirname
const srcPath = `${rootPath}/src`

/**
 * https://vitejs.dev/config
 */
// export default defineConfig(() => {
//   return {
//     plugins: setupVitePlugins(),
//     resolve: {
//       alias: {
//         '~': rootPath,
//         '@': srcPath,
//       },
//     },
//     publicDir: 'public',
//     server: {
//       port: 8080,
//     },
//     open: false,
//     build: {
//       outDir: join(__dirname, 'build', 'renderer'),
//       emptyOutDir: true,
//     },
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: '@import "./src/renderer/styles/index.scss";',
//         },
//       },
//     },
//   }
// })

// module.exports = {
//   plugins: setupVitePlugins(),
//   resolve: {
//     alias: {
//       '~': rootPath,
//       '@': srcPath,
//     },
//   },
//   publicDir: 'public',
//   server: {
//     port: 8080,
//   },
//   open: false,
//   build: {
//     outDir: join(__dirname, 'build', 'renderer'),
//     emptyOutDir: true,
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: '@import "./src/renderer/styles/index.scss";',
//       },
//     },
//   },
// }

const Path = require('path')
// const vuePlugin = require('@vitejs/plugin-vue')

const { defineConfig } = require('vite')

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
  resolve: {
    alias: {
      '~': rootPath,
      '@': srcPath,
    },
  },
  publicDir: 'public',
  server: {
    port: 8080,
  },
  open: false,
  build: {
    outDir: Path.join(__dirname, 'build', 'renderer'),
    emptyOutDir: true,
  },
  plugins: setupVitePlugins(),
})

module.exports = config
