import { GOOGLE_TRANSLATE_ORIGINAL_DOM_ID } from '@google-translate-select/constants'
import { throwError, throwWarn } from './error'

export interface CreateGoogleTranslateJsonpCallbackOptions {
  pageLanguage: string

  /**
   * google translate auto display original dom
   *
   * @default false
   */
  autoDisplay: boolean
}

export function createGoogleTranslateJsonpCallback(
  options: CreateGoogleTranslateJsonpCallbackOptions,
  cb: (...args: any[]) => any
) {
  const { pageLanguage, autoDisplay = false } = options

  if (!pageLanguage)
    throwError(
      'createGoogleTranslateJsonpCallback',
      'pageLanguage is required.'
    )

  function googleTranslateElementInit() {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage,
          autoDisplay,
        },
        GOOGLE_TRANSLATE_ORIGINAL_DOM_ID
      )

      cb()
    } else {
      throwError(
        'googleTranslateElementInit',
        'please check window.google & window.google.translate'
      )
    }
  }

  window['googleTranslateElementInit'] = googleTranslateElementInit

  return {
    jsonpCallbackName: 'googleTranslateElementInit',
  }
}

export type CreateGoogleTranslateJsonpCallbackReturn = ReturnType<
  typeof createGoogleTranslateJsonpCallback
>

export function GoogleTranslateFireEvent(
  GOOGLE_TRANSLATE_ORIGINAL_SELECT_DOM: HTMLElement,
  eventName = 'change'
) {
  try {
    if (document.createEvent) {
      const event: Event = document.createEvent('HTMLEvents')
      event.initEvent(eventName, true, true)
      GOOGLE_TRANSLATE_ORIGINAL_SELECT_DOM.dispatchEvent(event)
    } else {
      // @ts-ignore
      const event: Event = document.createEventObject()
      // @ts-ignore
      GOOGLE_TRANSLATE_ORIGINAL_SELECT_DOM.fireEvent(`on${eventName}`, event)
    }
  } catch (e) {
    throwWarn('GoogleTranslateFireEvent', `${e}`)
  }
}
