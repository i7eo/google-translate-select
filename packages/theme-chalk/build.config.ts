import path from 'path'
import { defineConfig } from 'tsup'
import consola from 'consola'
import chalk from 'chalk'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import { sassPlugin } from 'esbuild-sass-plugin'
import CleanCSS from 'clean-css'
import { copy } from 'esbuild-plugin-copy'
import type { Options } from 'tsup'
import type { AcceptedPlugin } from 'postcss'

export default defineConfig((options: Options) => {
  const formatSize = (size: number) =>
    `${(size / 1000).toFixed(2).padStart(6)} KB`
  return {
    entry: ['./src/**/*.{scss,sass}'],
    // minify: !options.watch,
    esbuildPlugins: [
      sassPlugin({
        async transform(source, resolveDir, filePath) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv({ stage: 0 }) as AcceptedPlugin,
          ]).process(source, { from: undefined })
          const { styles, warnings, stats } = await new CleanCSS({
            returnPromise: true,
          }).minify(css)
          warnings.forEach((warning) => consola.warn(warning))

          const fileName = path.relative(resolveDir, filePath)
          consola.debug(
            `${chalk.cyan(fileName.padStart(25))}: ${chalk.yellow(
              formatSize(stats.originalSize)
            )} => ${chalk.green(formatSize(stats.minifiedSize))}`
          )
          return styles
        },
      }),
      copy({
        resolveFrom: 'cwd',
        assets: [
          {
            from: ['./src/**/*'],
            to: ['./dist/src'],
          },
        ],
      }),
    ],
  }
})
