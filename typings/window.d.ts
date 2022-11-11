declare interface Window {
  google:
    | {
        translate:
          | {
              TranslateElement: any
              [key: string]: any
            }
          | undefined
        [key: string]: any
      }
    | undefined
  googleTranslateElementInit: (...args: any[]) => any | undefined
}
