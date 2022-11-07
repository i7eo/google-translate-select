import { defaultWindow } from './configurable'
import { isSupport } from './types'
import type { ConfigurableWindow } from './configurable'

export interface UseMutationObserverOptions
  extends MutationObserverInit,
    ConfigurableWindow {}

/**
 * Watch for changes being made to the DOM tree.
 *
 * @see https://vueuse.org/useMutationObserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver MutationObserver MDN
 * @param target
 * @param callback
 * @param options
 */
export function useMutationObserver(
  target: HTMLElement,
  callback: MutationCallback,
  options: UseMutationObserverOptions = {}
) {
  const { window = defaultWindow, ...mutationOptions } = options
  let observer: MutationObserver | undefined
  const isSupported = isSupport(() => window && 'MutationObserver' in window)

  const start = () => {
    if (isSupported && window && target) {
      observer = new MutationObserver(callback)
      observer!.observe(target, mutationOptions)
    }
  }

  const stop = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  return {
    isSupported,
    start,
    stop,
  }
}

export type UseMutationObserverReturn = ReturnType<typeof useMutationObserver>
