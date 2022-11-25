import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Dts from 'vite-plugin-dts'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  const packageDir = './src'
  const entry = resolve(__dirname, './src/index.ts')
  const outDir = resolve(__dirname, 'dist/es')
  return {
    mode: 'production',
    plugins: [
      Vue(),
      VueJsx(),
      Dts({
        insertTypesEntry: true,
        cleanVueFileName: true,
        skipDiagnostics: false,
        tsConfigFilePath: '../../tsconfig.web.json',
        include: [packageDir],
        entryRoot: packageDir,
      }),
    ],
    build: {
      target: 'modules',
      minify: true, // 压缩
      chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
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
        external: ['vue'],
        output: {
          preserveModules: true,
          preserveModulesRoot: packageDir,
          sourcemap: true,
        },
      },
    },
  }
}
