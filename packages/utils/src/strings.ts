const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as T
}

const camelizeRE = /-(\w)/g
export const camelize = cacheStringFunction((str: string): string =>
  str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
)

const _capitalize = cacheStringFunction(
  (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
)

export const capitalize = <T extends string>(str: T) =>
  _capitalize(str) as Capitalize<T>

export const escapeStringRegexp = (string = '') =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = cacheStringFunction((str: string) =>
  str.replace(hyphenateRE, '-$1').toLowerCase()
)
