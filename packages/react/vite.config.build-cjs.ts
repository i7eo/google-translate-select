import { resolve } from 'path'
import type { UserConfigExport } from 'vitest/config'

export default (): UserConfigExport => {
  const packageDir = './src'
  const entry = resolve(__dirname, './src/index.ts')
  const outDir = resolve(__dirname, 'dist/cjs')
  return {
    mode: 'production',
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      outDir,
      lib: {
        entry,
        formats: ['cjs'],
        fileName: (): string => {
          return 'index.cjs'
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          preserveModules: true,
          preserveModulesRoot: packageDir,
          sourcemap: true,
        },
      },
    },
  }
}
