import { defaultDocument } from './configurable'
import type { ConfigurableDocument } from './configurable'

export interface CreateStyleTagOptions extends ConfigurableDocument {
  /**
   * Load the style immediately
   *
   * @default true
   */
  immediate?: boolean

  /**
   * DOM id of the style tag
   *
   * @default auto-incremented
   */
  id?: string
}

export interface CreateStyleTagReturn {
  id: string
  css: string
  isLoaded: Readonly<boolean>
  load: () => void
  unload: () => void
}

let _id = 0

/**
 * Inject <style> element in head.
 *
 * @param css
 * @param options
 */
export function createStyleTag(
  css: string,
  options: CreateStyleTagOptions = {}
): CreateStyleTagReturn {
  let isLoaded = false

  const {
    immediate = true,
    id = `google-translate-select_${++_id}`,
    document = defaultDocument,
  } = options

  const load = () => {
    if (!document) return

    const el = (document.getElementById(id) ||
      document.createElement('style')) as HTMLStyleElement
    el.type = 'text/css'
    el.id = id
    el.innerText = css
    document.head.appendChild(el)
    el.onload = () => {
      isLoaded = true
    }
  }

  const unload = () => {
    if (!document || !isLoaded) return

    document.head.removeChild(document.getElementById(id) as HTMLStyleElement)
    isLoaded = false
  }

  if (immediate) load()

  return {
    id,
    css,
    isLoaded,
    load,
    unload,
  }
}
