export const objectToString = Object.prototype.toString

export const is = (value: unknown, type: string): boolean =>
  objectToString.call(value) === `[object ${type}]`

export const isArray = Array.isArray

export const isMap = (val: unknown): val is Map<any, any> => is(val, 'Map')

export const isSet = (val: unknown): val is Set<any> => is(val, 'Set')

export const isBoolean = (val: unknown): val is Boolean => is(val, 'Boolean')

export const isNumber = (val: unknown): val is Number => is(val, 'Number')

export const isDate = (val: unknown): val is Date => is(val, 'Date')

export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isPlainObject = (val: unknown): val is object => is(val, 'Object')

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch)

export const isDef = (val: any): val is undefined => val !== undefined

export const isUndef = (val: any): val is undefined => val === undefined

export const isRegExp = (val: unknown): val is RegExp => is(val, 'RegExp')

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length)

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export function isUrl(path: string): boolean {
  const reg =
    // eslint-disable-next-line no-useless-escape
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

export const isWindow = (val: any): val is Window =>
  typeof window !== 'undefined' && is(val, 'Window')

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}

export const isSupport = (callback: () => unknown) => {
  const isSupported = Boolean(callback())

  return isSupported
}
