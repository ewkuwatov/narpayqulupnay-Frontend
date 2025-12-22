'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import '@/i18n/client'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-6 bg-primary text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">{t('cta.title')}</h2>
        <form className="flex flex-col gap-4">
          <input
            className="p-4 rounded-xl text-black"
            placeholder={t('cta.name')}
          />
          <input
            className="p-4 rounded-xl text-black"
            placeholder={t('cta.phone')}
          />
          <button className="bg-danger p-4 rounded-xl font-medium">
            {t('cta.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}
