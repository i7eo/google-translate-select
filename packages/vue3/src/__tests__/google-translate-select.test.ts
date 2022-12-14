import { mount } from '@vue/test-utils'
import { GOOGLE_TRANSLATE_SELECT_LANGUAGES } from '@google-translate-select/constants'
import GoogleTranslateSelect from '../google-translate-select.vue'
import type { GoogleTranslateProps } from '../types/props'

// 取英语和中文简体测试，以中文简体为基准
const languages = [
  GOOGLE_TRANSLATE_SELECT_LANGUAGES[0],
  GOOGLE_TRANSLATE_SELECT_LANGUAGES[10],
]

describe('@GoogleTranslateSelect/vue3', () => {
  const props: GoogleTranslateProps = {
    languages,
    defaultLanguageCode: 'zh-CN',
    defaultPageLanguageCode: 'zh-CN',
    fetchBrowserLanguage: true,
    animateTimeout: 150,
    dropdownClassName: 'i7eo',
    dropdownStyle: {
      color: 'red',
    },
    showArrow: true,
    trigger: 'click',
  }

  test('component import', () => {
    expect(GoogleTranslateSelect).toBeTruthy()
  })

  test('component mounted', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm).toBeTruthy()
  })

  test('pass prop languages', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        languages: props.languages,
      },
    })
    expect(component.vm.languages).toStrictEqual(props.languages)
  })

  test('not pass prop languages, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.languages).toStrictEqual(
      GOOGLE_TRANSLATE_SELECT_LANGUAGES
    )
  })

  test('pass prop defaultLanguageCode', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        defaultLanguageCode: props.defaultLanguageCode,
      },
    })
    expect(component.vm.defaultLanguageCode).toBe(props.defaultLanguageCode)
  })

  test('not pass prop defaultLanguageCode, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.defaultLanguageCode).toBe('en')
  })

  test('pass prop defaultPageLanguageCode', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        defaultPageLanguageCode: props.defaultPageLanguageCode,
      },
    })
    expect(component.vm.defaultPageLanguageCode).toBe(
      props.defaultPageLanguageCode
    )
  })

  test('not pass prop defaultPageLanguageCode, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.defaultPageLanguageCode).toBe('en')
  })

  test('pass prop fetchBrowserLanguage', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        fetchBrowserLanguage: props.fetchBrowserLanguage,
      },
    })
    expect(component.vm.fetchBrowserLanguage).toBe(props.fetchBrowserLanguage)
  })

  test('not pass prop fetchBrowserLanguage, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.fetchBrowserLanguage).toBe(true)
  })

  test('pass prop animateTimeout', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        animateTimeout: props.animateTimeout,
      },
    })
    expect(component.vm.animateTimeout).toBe(props.animateTimeout)
  })

  test('not pass prop animateTimeout, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.animateTimeout).toBe(150)
  })

  test('pass prop dropdownClassName', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        dropdownClassName: props.dropdownClassName,
      },
    })
    expect(component.vm.dropdownClassName).toBe(props.dropdownClassName)
  })

  test('not pass prop dropdownClassName, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.dropdownClassName).toBe('')
  })

  test('pass prop dropdownStyle', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        dropdownStyle: props.dropdownStyle,
      },
    })
    expect(component.vm.dropdownStyle).toStrictEqual(props.dropdownStyle)
  })

  test('not pass prop dropdownStyle, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.dropdownStyle).toStrictEqual({})
  })

  test('pass prop showArrow', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        showArrow: props.showArrow,
      },
    })
    expect(component.vm.showArrow).toBe(props.showArrow)
  })

  test('not pass prop showArrow, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.showArrow).toBe(true)
  })

  test('pass prop trigger', () => {
    const component = mount(GoogleTranslateSelect, {
      props: {
        trigger: props.trigger,
      },
    })
    expect(component.vm.trigger).toBe(props.trigger)
  })

  test('not pass prop trigger, check default', () => {
    const component = mount(GoogleTranslateSelect, {})
    expect(component.vm.trigger).toBe('hover')
  })
})
