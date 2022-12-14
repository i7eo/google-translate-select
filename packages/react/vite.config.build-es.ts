import { resolve } from 'path'
import React from '@vitejs/plugin-react'
import Dts from 'vite-plugin-dts'
import type { UserConfigExport } from 'vitest/config'

export default (): UserConfigExport => {
  const packageDir = './src'
  const entry = resolve(__dirname, './src/index.ts')
  const outDir = resolve(__dirname, 'dist/es')
  return {
    mode: 'production',
    plugins: [
      React(),
      Dts({
        insertTypesEntry: true,
        skipDiagnostics: false,
        tsConfigFilePath: '../../tsconfig.web.json',
        include: [packageDir],
        entryRoot: packageDir,
      }),
    ],
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir,
      lib: {
        entry,
        formats: ['es'],
        fileName: (): string => {
          return 'index.mjs'
        },
      },
      rollupOptions: {
        external: ['react'],
        output: {
          preserveModules: true,
          preserveModulesRoot: packageDir,
          sourcemap: true,
        },
      },
    },
  }
}
