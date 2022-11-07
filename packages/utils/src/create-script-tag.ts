import { defaultDocument } from './configurable'
import { noop } from './types'
import type { ConfigurableDocument } from './configurable'

export interface CreateScriptTagOptions extends ConfigurableDocument {
  /**
   * Load the script immediately
   *
   * @default true
   */
  immediate?: boolean

  /**
   * Script type
   *
   * @default 'text/javascript'
   */
  type?: string

  /**
   * Add `async` attribute to the script tag
   *
   */
  async?: boolean

  /**
   * Add `defer` attribute to the script tag
   *
   */
  defer?: boolean

  crossOrigin?: 'anonymous' | 'use-credentials'

  /**
   * Add custom attribute to the script tag
   *
   */
  attrs?: Record<string, string>
}

/**
 * Inject <script> element in body.
 *
 * @param src
 * @param onLoaded
 * @param options
 */
export function createScriptTag(
  src: string,
  onLoaded: (el: HTMLScriptElement) => void = noop,
  options: CreateScriptTagOptions = {}
) {
  const {
    immediate = true,
    type = 'text/javascript',
    async,
    crossOrigin,
    defer = true,
    document = defaultDocument,
    attrs = {},
  } = options

  let scriptTag: HTMLScriptElement | null = null

  let _promise: Promise<HTMLScriptElement | boolean> | null = null

  /**
   * Load the script specified via `src`.
   *
   * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
   * @returns Promise<HTMLScriptElement>
   */
  const loadScript = (
    waitForScriptLoad: boolean
  ): Promise<HTMLScriptElement | boolean> =>
    new Promise((resolve, reject) => {
      // Some little closure for resolving the Promise.
      const resolveWithElement = (el: HTMLScriptElement) => {
        scriptTag = el
        resolve(el)
        return el
      }

      // Check if document actually exists, otherwise resolve the Promise (SSR Support).
      if (!document) {
        resolve(false)
        return
      }

      // Local variable defining if the <script> tag should be appended or not.
      let shouldAppend = false

      let el = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)

      // Script tag not found, preparing the element for appending
      if (!el) {
        el = document.createElement('script')
        el.type = type
        el.src = src
        el.defer = defer

        // Optional attributes
        if (async) el.async = async
        if (crossOrigin) el.crossOrigin = crossOrigin

        Object.entries(attrs).forEach(([name, value]) =>
          el?.setAttribute(name, value)
        )

        // Enables shouldAppend
        shouldAppend = true
      }
      // Script tag already exists, resolve the loading Promise with it.
      else if (el.hasAttribute('data-loaded')) {
        resolveWithElement(el)
      }

      // Event listeners
      el.addEventListener('error', (event) => reject(event))
      el.addEventListener('abort', (event) => reject(event))
      el.addEventListener('load', () => {
        el!.setAttribute('data-loaded', 'true')

        onLoaded(el!)
        resolveWithElement(el!)
      })

      // Append the <script> tag to head.
      if (shouldAppend) el = document.head.appendChild(el)

      // If script load awaiting isn't needed, we can resolve the Promise.
      if (!waitForScriptLoad) resolveWithElement(el)
    })

  /**
   * Exposed singleton wrapper for `loadScript`, avoiding calling it twice.
   *
   * @param waitForScriptLoad Whether if the Promise should resolve once the "load" event is emitted by the <script> attribute, or right after appending it to the DOM.
   * @returns Promise<HTMLScriptElement>
   */
  const load = (
    waitForScriptLoad = true
  ): Promise<HTMLScriptElement | boolean> => {
    if (!_promise) _promise = loadScript(waitForScriptLoad)

    return _promise
  }

  /**
   * Unload the script specified by `src`.
   */
  const unload = () => {
    if (!document) return

    _promise = null

    if (scriptTag) scriptTag = null

    const el = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (el) document.head.removeChild(el)
  }

  if (immediate) load()

  return { scriptTag, load, unload }
}

export type CreateScriptTagReturn = ReturnType<typeof createScriptTag>
