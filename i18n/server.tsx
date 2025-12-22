// i18n/server.ts
import i18next from 'i18next'
import resources from './resources'

export async function getServerT(locale: string) {
  const i18n = i18next.createInstance()

  await i18n.init({
    lng: locale,
    fallbackLng: 'en',
    resources,
  })

  return i18n.t.bind(i18n)
}
