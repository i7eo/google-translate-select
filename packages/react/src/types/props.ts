import type { CSSProperties } from 'react'
import type { Language as ILanguage } from '@google-translate-select/constants'

export interface IGoogleTranslateProps {
  /** select dropdown option */
  languages?: ILanguage[]
  /** select input default language*/
  defaultLanguageCode?: string
  /** page(browser) default language */
  defaultPageLanguageCode?: string
  /** get browser default language  */
  fetchBrowserLanguage?: boolean
  /** select dropdown animate */
  animateTimeout?: number
  dropdownClassName?: string
  dropdownStyles?: CSSProperties
  showArrow?: boolean
  className?: string
  select?: Function
}
