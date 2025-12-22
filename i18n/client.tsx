'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/common.json'
import ru from './locales/ru/common.json'
import uz from './locales/uz/common.json'

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
}

export default i18n
