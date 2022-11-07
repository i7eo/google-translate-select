import { PKG_CAMELCASE_NAME } from '@google-translate-select/constants'
import { isClient, isString } from './types'

class ComponentError extends Error {
  constructor(m: string) {
    super(m)
    this.name = `${PKG_CAMELCASE_NAME}Error`
  }
}

export function throwError(scope: string, m: string): never {
  throw new ComponentError(`[${scope}] ${m}`)
}

export function throwWarn(err: Error): void
export function throwWarn(scope: string, message: string): void
export function throwWarn(scope: string | Error, message?: string): void {
  if (isClient) {
    const error: Error = isString(scope)
      ? new ComponentError(`[${scope}] ${message}`)
      : scope

    console.warn(error)
  }
}
