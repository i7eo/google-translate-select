import { resolve } from 'path'
import React from '@vitejs/plugin-react'
// import Dts from 'vite-plugin-dts'
import CssInjected from 'vite-plugin-css-injected-by-js'
import {
  PKG_CAMELCASE_NAME,
  PKG_NAME,
} from '@google-translate-select/constants'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  // const packageDir = './src'
  const entry = resolve(__dirname, './src/index.ts')
  const outDir = resolve(__dirname, 'dist/umd')
  return {
    mode: 'production',
    plugins: [
      React(),
      // Dts({
      //   insertTypesEntry: true,
      //   cleanVueFileName: true,
      //   skipDiagnostics: false,
      //   logDiagnostics: true,
      //   include: [packageDir],
      //   entryRoot: packageDir,
      // }),
      CssInjected({
        styleId: `${PKG_NAME}-theme-chalk`,
      }),
    ],
    build: {
      // target: 'modules',
      minify: true, // 压缩
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
      // reportCompressedSize: false,
      emptyOutDir: false,
      outDir,
      lib: {
        name: PKG_CAMELCASE_NAME,
        entry,
        formats: ['umd'],
        fileName: (target): string => {
          return `index.${target}.js`
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        // output: {
        //   preserveModules: true,
        //   preserveModulesRoot: packageDir,
        //   sourcemap: true,
        // },
        output: {
          format: 'umd',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDom',
          },
        },
      },
    },
  }
}
