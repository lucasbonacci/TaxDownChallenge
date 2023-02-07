import i18n from 'i18next'
import * as RNLocalize from 'react-native-localize'

import { initReactI18next } from 'react-i18next'

import locales from './locales'

const resources = {}
Object.entries(locales).forEach(([languageTag, translation]) => {
  resources[languageTag] = { translation }
})

const lng =
  RNLocalize.findBestAvailableLanguage(Object.keys(locales))?.languageTag ||
  'en'

i18n.use(initReactI18next).init({
  lng,
  fallbackLng: 'en',
  debug: __DEV__, // eslint-disable-line no-undef
  resources,
  returnObjects: true,
})

export default i18n
