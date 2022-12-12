import { resolve } from 'path'
import React from '@vitejs/plugin-react'
import { PKG_NAME } from '@google-translate-select/constants'
import type { UserConfigExport } from 'vitest/config'

export default (): UserConfigExport => {
  const entry = resolve(__dirname, './src/index.ts')
  const outDir = resolve(__dirname, 'dist/umd')
  return {
    mode: 'production',
    plugins: [React()],
    build: {
      minify: true,
      chunkSizeWarningLimit: 2,
      emptyOutDir: false,
      outDir,
      lib: {
        name: PKG_NAME,
        entry,
        formats: ['umd'],
        fileName: (target): string => {
          return `index.${target}.js`
        },
      },
      rollupOptions: {
        external: ['react'],
        output: {
          format: 'umd',
          exports: 'named',
          globals: {
            react: 'React',
          },
        },
      },
    },
  }
}
